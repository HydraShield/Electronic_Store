package com.hydrashield.storemanagement.controllers;

import com.hydrashield.storemanagement.data.Item;
import com.hydrashield.storemanagement.logic.ItemAccess;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class MainController {

    @Autowired
    public ItemAccess itemAccess;

    @GetMapping(path = "/items")
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(itemAccess.getAll());
    }

    @GetMapping(path = "/item/{id}")
    public ResponseEntity<?> getById(@PathVariable @NonNull Integer id){
        Item item = itemAccess.getById(id);
        if (item==null) return ResponseEntity.ok("No Item With This Id");
        return ResponseEntity.ok(item);
    }

    @GetMapping(path = "/items/model")
    public ResponseEntity<?> getByModel(@RequestParam("model") String model){
        return ResponseEntity.ok(itemAccess.getByModel(model));
    }

    @GetMapping(path = "/items/company")
    public ResponseEntity<?> getByCompany(@RequestParam("company") String company){
        return ResponseEntity.ok(itemAccess.getByCompany(company));
    }

    @GetMapping(path = "/items/price")
    public ResponseEntity<?> getByPrice(@RequestParam("price") String price){
        return ResponseEntity.ok(itemAccess.getByPrice(Integer.parseInt(price)));
    }

    @GetMapping(path = "/items/priceLess")
    public ResponseEntity<?> getByPriceLessThan(@RequestParam("price") String price){
        return ResponseEntity.ok(itemAccess.getByPriceLessThan(Integer.parseInt(price)));
    }

    @GetMapping(path = "/items/priceGreater")
    public ResponseEntity<?> getByPriceGreaterThan(@RequestParam("price") String price){
        return ResponseEntity.ok(itemAccess.getByPriceGraterThan(Integer.parseInt(price)));
    }

    @PostMapping(path = "/item", consumes={"application/json"})
    public ResponseEntity<?> addItem(@RequestBody Item item){
        System.out.println(item);
        return ResponseEntity.ok(itemAccess.addItem(item));
    }

    @PutMapping(path = "/item/{id}")
    public ResponseEntity<?> updateItem(@PathVariable @NonNull Integer id, @RequestBody Item item){
        Item newItem = itemAccess.updateItem(id, item);
        return ResponseEntity.ok(newItem);
    }

    @DeleteMapping(path = "/item/{id}")
    public ResponseEntity<?> deleteItem(@PathVariable @NonNull Integer id){
        itemAccess.deleteItem(id);
        return ResponseEntity.ok("Item Deleted");
    }

    @DeleteMapping(path = "/items")
    public ResponseEntity<?> deleteAll(){
        itemAccess.deleteAll();
        return ResponseEntity.ok("All Item Deleted");
    }
}
