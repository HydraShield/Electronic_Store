package com.hydrashield.storemanagement.respository;

import com.hydrashield.storemanagement.data.Stock;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StockRepository extends CrudRepository<Stock, Integer> {
}
