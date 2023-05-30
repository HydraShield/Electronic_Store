package com.hydrashield.storemanagement.respository;

import com.hydrashield.storemanagement.data.Item;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends CrudRepository<Item, Integer> {
    Iterable<Item> findByModel(String model);
    Iterable<Item> findByCompany(String company);
    Iterable<Item> findByPrice(int price);
    Iterable<Item> findByPriceLessThanEqual(int price);
    Iterable<Item> findByPriceGreaterThanEqual(int price);
}
