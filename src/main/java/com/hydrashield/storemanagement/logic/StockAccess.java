package com.hydrashield.storemanagement.logic;

import com.hydrashield.storemanagement.data.Stock;
import com.hydrashield.storemanagement.respository.ItemRepository;
import com.hydrashield.storemanagement.respository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class StockAccess {
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
        if (itemRepository.findById(stock.getItem_id()).isEmpty()) {
            return null;
        }
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
            if (itemRepository.findById(id).isPresent()) {
                stock.setItem_id(id);
                return stockRepository.save(stock);
            }
            else{
                return null;
            }
        }
    }

    public void deleteStock(Integer id){
        stockRepository.deleteById(id);
    }

    public void deleteAll(){
        stockRepository.deleteAll();
    }

}
