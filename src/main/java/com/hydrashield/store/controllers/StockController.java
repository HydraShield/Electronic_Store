package com.hydrashield.store.controllers;

import com.hydrashield.store.data.Stock;
import com.hydrashield.store.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class StockController {
    @Autowired
    StockService stockAccess;

    @GetMapping(path = "/stocks")
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(stockAccess.getAll());
    }

    @GetMapping(path = "/stock/{id}")
    public ResponseEntity<?> getById(@PathVariable @NonNull Integer id){
        Stock stock = stockAccess.getById(id);
        if (stock==null) return ResponseEntity.ok("No Stock Details With This Id");
        return ResponseEntity.ok(stock);
    }

    @PostMapping(path = "/stock")
    public ResponseEntity<?> addItem(@RequestBody Stock stock){
        System.out.println(stock);
        Stock stock1 = stockAccess.addStock(stock);
        if (stock1==null) return ResponseEntity.ok("No Item with this entry");
        return ResponseEntity.ok(stock1);
    }

    @PutMapping(path = "/stock/{id}")
    public ResponseEntity<?> updateItem(@PathVariable @NonNull Integer id, @RequestBody Stock stock){
        Stock newStock = stockAccess.updateStock(id, stock);
        if (newStock==null) return ResponseEntity.ok("No Item with this entry");
        return ResponseEntity.ok(newStock);
    }

    @DeleteMapping(path = "/stock/{id}")
    public ResponseEntity<?> deleteItem(@PathVariable @NonNull Integer id){
        stockAccess.deleteStock(id);
        return ResponseEntity.ok("Stock Details Deleted");
    }

    @DeleteMapping(path = "/stocks")
    public ResponseEntity<?> deleteAll(){
        stockAccess.deleteAll();
        return ResponseEntity.ok("All Stocks Details Deleted");
    }
}
