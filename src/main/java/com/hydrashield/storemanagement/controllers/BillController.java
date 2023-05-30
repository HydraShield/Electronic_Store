package com.hydrashield.storemanagement.controllers;

import com.hydrashield.storemanagement.data.CompleteBill;
import com.hydrashield.storemanagement.logic.BillAccess;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

@RestController
public class BillController {
    @Autowired
    BillAccess billAccess;

    @GetMapping(path = "/bills")
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(billAccess.getAll());
    }

    @GetMapping(path = "/bill/{id}")
    public ResponseEntity<?> getById(@PathVariable @NonNull Integer id){
        return ResponseEntity.ok(billAccess.getById(id));
    }

    @PostMapping(path = "/bill")
    public ResponseEntity<?> createBill(@RequestBody CompleteBill bill){
        return ResponseEntity.ok(billAccess.addBill(bill));
    }

    @DeleteMapping(path = "/bills")
    public ResponseEntity<?> deleteAll(){
        billAccess.deleteAll();
        return ResponseEntity.ok("All Bill Deleted");
    }

    @DeleteMapping(path = "/bill/{id}")
    public ResponseEntity<?> deleteById(@PathVariable @NonNull Integer id){
        billAccess.deleteById(id);
        return ResponseEntity.ok("Given Bill Deleted");
    }

}
