package com.hydrashield.store.respository;

import com.hydrashield.store.data.Bill;
import com.hydrashield.store.data.Order;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends CrudRepository<Order, Integer> {
    Iterable<Order> findByBill(Bill bill);
    void deleteByBill(Bill bill);
}
