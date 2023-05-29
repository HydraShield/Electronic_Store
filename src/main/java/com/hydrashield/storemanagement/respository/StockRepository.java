package com.hydrashield.storemanagement.respository;

import com.hydrashield.storemanagement.data.Stock;
import org.springframework.data.repository.CrudRepository;

public interface StockRepository extends CrudRepository<Stock, Integer> {
}
