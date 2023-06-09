package com.hydrashield.store.service;

import com.hydrashield.store.data.Item;
import com.hydrashield.store.data.Stock;
import com.hydrashield.store.respository.ItemRepository;
import com.hydrashield.store.respository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ItemService {

    @Autowired
    public ItemRepository itemRepository;
    @Autowired
    public StockRepository stockRepository;

    public List<Item> getAll(){
        Iterable<Item> items =  itemRepository.findAll();
        List<Item> lst = new ArrayList<>();
        items.forEach(lst::add);
        return lst;
    }

    public Item getById(Integer id){
        Optional<Item> item = itemRepository.findById(id);
        return item.orElse(null);
    }

    public List<Item> getByModel(String model){
        Iterable<Item> items =  itemRepository.findByModel(model);
        List<Item> lst = new ArrayList<>();
        items.forEach(lst::add);
        return lst;
    }

    public List<Item> getByCompany(String company){
        Iterable<Item> items =  itemRepository.findByCompany(company);
        List<Item> lst = new ArrayList<>();
        items.forEach(lst::add);
        return lst;
    }

    public List<Item> getByPrice(int price){
        Iterable<Item> items =  itemRepository.findByPrice(price);
        List<Item> lst = new ArrayList<>();
        items.forEach(lst::add);
        return lst;
    }

    public List<Item> getByPriceLessThan(int price){
        Iterable<Item> items =  itemRepository.findByPriceLessThanEqual(price);
        List<Item> lst = new ArrayList<>();
        items.forEach(lst::add);
        return lst;
    }

    public List<Item> getByPriceGraterThan(int price){
        Iterable<Item> items =  itemRepository.findByPriceGreaterThanEqual(price);
        List<Item> lst = new ArrayList<>();
        items.forEach(lst::add);
        return lst;
    }

    public Item addItem(Item item){
        if(item.getItem_stock()==null){
            Stock stock = new Stock();
            stock.setDeliver(0);
            stock.setCurrent(0);
            stock.setOrdered(0);
            stock.setItem(item);
            item.setItem_stock(stock);
        }
        itemRepository.deleteById(2);
        return itemRepository.save(item);
    }

    public Item updateItem(Integer id, Item item){
        Optional<Item> oldItem = itemRepository.findById(id);
        if (oldItem.isPresent()){
            Item tmp = oldItem.get();
            tmp.setPrice(item.getPrice());
            tmp.setModel(item.getModel());
            tmp.setCompany(item.getCompany());
            return itemRepository.save(tmp);
        }
        else{
            item.setItem_id(id);
            return itemRepository.save(item);
        }
    }

    public void deleteItem(Integer id){
        stockRepository.deleteById(id);
        itemRepository.deleteById(id);
    }

    public void deleteAll(){
        stockRepository.deleteAll();
        itemRepository.deleteAll();
    }
}
