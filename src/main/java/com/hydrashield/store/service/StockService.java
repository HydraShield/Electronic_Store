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
public class StockService {
    @Autowired
    StockRepository stockRepository;
    @Autowired
    ItemRepository itemRepository;

    public List<Stock> getAll(){
        Iterable<Stock> stocks =  stockRepository.findAll();
        List<Stock> lst = new ArrayList<>();
        stocks.forEach(lst::add);
        return lst;
    }

    public Stock getById(Integer id){
        Optional<Stock> stock = stockRepository.findById(id);
        return stock.orElse(null);
    }

    public Stock addStock(Stock stock){
        Optional<Item> item = itemRepository.findById(stock.getItem_id());
        if (item.isEmpty()) {
            return null;
        }
        stock.setItem(item.get());
        return stockRepository.save(stock);
    }

    public Stock updateStock(Integer id, Stock stock){
        Optional<Stock> oldStock = stockRepository.findById(id);
        if (oldStock.isPresent()){
            Stock tmp = oldStock.get();
            tmp.setCurrent(stock.getCurrent());
            tmp.setOrdered(stock.getOrdered());
            tmp.setDeliver(stock.getDeliver());
            return stockRepository.save(tmp);
        }
        else{
            return addStock(stock);
        }
    }

    public void deleteStock(Integer id){
        stockRepository.deleteById(id);
    }

    public void deleteAll(){
        stockRepository.deleteAll();
    }

}
