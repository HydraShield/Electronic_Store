package com.hydrashield.storemanagement.logic;

import com.hydrashield.storemanagement.data.*;
import com.hydrashield.storemanagement.data2.CompleteBill;
import com.hydrashield.storemanagement.respository.BillRepository;
import com.hydrashield.storemanagement.respository.ItemRepository;
import com.hydrashield.storemanagement.respository.OrderRepository;
import com.hydrashield.storemanagement.respository.StockRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@Transactional
public class BillAccess {
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

    public CompleteBill getById(Integer id){
        CompleteBill completeBill = new CompleteBill();
        Map<Integer, Integer> items = new HashMap<>();
        Optional<Bill> bill = billRepository.findById(id);
        if (bill.isEmpty()) return null;
        Bill fbill = bill.get();
        Iterable<Order> orders = fbill.orders;
        List<Order> lst = new ArrayList<>();
        orders.forEach(lst::add);


        for (Order order:
             lst) {
            items.put(order.getItem().getItem_id(), order.getQuantity());
        }

        completeBill.setBill_id(fbill.getBill_id());
        completeBill.setCustomer(fbill.getCustomer());
        completeBill.setMobile(fbill.getMobile());
        completeBill.setDate(fbill.getDate());
        completeBill.setAmount(fbill.getAmount());
        completeBill.setItems(items);
        return completeBill;

    }
    
    public CompleteBill addBill(CompleteBill completeBill){
        Bill bill1 = new Bill();
        bill1.setCustomer(completeBill.getCustomer());
        bill1.setMobile(completeBill.getMobile());

        long amount = 0;
        Map<Integer, Integer> items = completeBill.getItems();
        List<Order> orders = new ArrayList<>();
        for (Integer key:
             items.keySet()) {
            Optional<Item> item = itemRepository.findById(key);
            if (item.isEmpty()) return null;
            int value = items.get(key);
            Item fitem = item.get();
            amount += (long) fitem.getPrice() * value;
            Order order = new Order();
            order.setItem(fitem);
            order.setBill(bill1);
            order.setQuantity(value);
            orders.add(order);

            Optional<Stock> oStock = stockRepository.findById(key);
            if (oStock.isPresent()){
                Stock stock = oStock.get();
                stock.setCurrent(stock.getCurrent() - value);
                stock.setDeliver(stock.getDeliver() + value);
            }

        }
        bill1.setAmount(amount);
        Bill bill = billRepository.save(bill1);
        orderRepository.saveAll(orders);

        completeBill.setAmount(amount);
        completeBill.setBill_id(bill.getBill_id());
        completeBill.setDate(bill.getDate());
        return completeBill;
    }

    public void deleteAll(){
        orderRepository.deleteAll();
        billRepository.deleteAll();
    }

    public void deleteById(int id){
        Optional<Bill> bill = billRepository.findById(id);
        if (bill.isEmpty()) return;
        Bill fbill = bill.get();
        orderRepository.deleteByBill(fbill);
        billRepository.deleteById(id);
    }

    public List<Order> getAllOrder(){
        Iterable<Order> orders =  orderRepository.findAll();
        List<Order> lst = new ArrayList<>();
        orders.forEach(lst::add);
        return lst;
    }
}
