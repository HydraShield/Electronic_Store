package com.hydrashield.store.service;

import com.hydrashield.store.data.*;
import com.hydrashield.store.model.CompleteBill;
import com.hydrashield.store.model.DetailBill;
import com.hydrashield.store.model.OnlyItem;
import com.hydrashield.store.respository.BillRepository;
import com.hydrashield.store.respository.ItemRepository;
import com.hydrashield.store.respository.OrderRepository;
import com.hydrashield.store.respository.StockRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@Transactional
public class BillService {
    @Autowired
    BillRepository billRepository;
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    StockRepository stockRepository;
    @Autowired
    ItemRepository itemRepository;

    public List<Bill> getAll(){
        Iterable<Bill> bills =  billRepository.findAll();
        List<Bill> lst = new ArrayList<>();
        bills.forEach(lst::add);
        return lst;
    }

    public DetailBill getById(Integer id){
        Optional<Bill> bill = billRepository.findById(id);
        if (bill.isEmpty()) return null;
        Bill fbill = bill.get();
        Iterable<Order> orders = fbill.getOrders();

        List<OnlyItem> items = new ArrayList<>();
        List<Integer> quantity = new ArrayList<>();

        orders.forEach(order -> {
            int I_id = order.getOrder_id().getItem_id();
            Item item = itemRepository.findById(I_id).orElse(null);
            assert item != null;
            items.add(new OnlyItem(item.getItem_id(), item.getModel(), item.getCompany(), item.getPrice()));
            quantity.add(order.getQuantity());

        });

        return new DetailBill(fbill.getBill_id(), fbill.getCustomer(), fbill.getMobile(), fbill.getAmount(), fbill.getDate(), fbill.isStatus(), items, quantity);

    }

    public void updateById(Integer id){
        Optional<Bill> bill = billRepository.findById(id);
        if (bill.isEmpty()) return;
        Bill fbill = bill.get();
        fbill.setStatus(true);

        Iterable<Order> orders = fbill.getOrders();
        Map<Integer, Integer> ids = new HashMap<>();
        orders.forEach(order -> {
            Integer I_id = order.getOrder_id().getItem_id();
            ids.put(I_id, order.getQuantity());
        });

        Iterable<Stock> stocks = stockRepository.findAllById(ids.keySet());
        stocks.forEach(stock -> {
            stock.setDeliver(stock.getDeliver() - ids.get(stock.getItem_id()));
        });
        stockRepository.saveAll(stocks);
        billRepository.save(fbill);
    }
    
    public CompleteBill addBill(CompleteBill completeBill){
        Bill bill1 = new Bill();
        bill1.setCustomer(completeBill.getCustomer());
        bill1.setMobile(completeBill.getMobile());

        long amount = 0;
        Map<Integer, Integer> items = completeBill.getItems();
        System.out.println(items);
        List<Order> orders = new ArrayList<>();
        List<Stock> stocks = new ArrayList<>();
        for (Integer key:
             items.keySet()) {
            Optional<Item> item = itemRepository.findById(key);
            if (item.isEmpty()) return null;
            int value = items.get(key);
            Item fitem = item.get();
            amount += (long) fitem.getPrice() * value;
            Order order = new Order();
//            order.setOrder_id(new OrderCompositeKey(bill1.getBill_id(), key));
            order.setItem(fitem);
            order.setBill(bill1);
            order.setQuantity(value);
            orders.add(order);

            Optional<Stock> oStock = stockRepository.findById(key);
            if (oStock.isPresent()){
                Stock stock = oStock.get();
                stock.setCurrent(stock.getCurrent() - value);
                stock.setDeliver(stock.getDeliver() + value);
                stocks.add(stock);
            }

        }
        bill1.setAmount(amount);
        Bill bill = billRepository.save(bill1);
        orders.forEach(order -> {
            order.setBill(bill);
            orderRepository.save(order);
        });
        stocks.forEach(stock -> stockRepository.save(stock));
        completeBill.setAmount(amount);
        completeBill.setBill_id(bill.getBill_id());
        completeBill.setDate(bill.getDate());
        return completeBill;
    }

    public void deleteAll(){
        billRepository.deleteAll();
    }

    public void deleteById(int id){
        billRepository.deleteById(id);
    }
}
