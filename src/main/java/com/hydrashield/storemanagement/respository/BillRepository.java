package com.hydrashield.storemanagement.respository;

import com.hydrashield.storemanagement.data.Bill;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BillRepository extends CrudRepository<Bill, Integer> {
}
