package com.hydrashield.storemanagement.respository;

import com.hydrashield.storemanagement.data.Bill;
import com.hydrashield.storemanagement.data.Order;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends CrudRepository<Order, Integer> {
    Iterable<Order> findByBill(Bill bill);
    void deleteByBill(Bill bill);
}
