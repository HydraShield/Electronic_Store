package com.hydrashield.store;

import com.hydrashield.store.data.Bill;
import com.hydrashield.store.data.Item;
import com.hydrashield.store.data.Order;
import com.hydrashield.store.model.CompleteBill;
import com.hydrashield.store.respository.BillRepository;
import com.hydrashield.store.service.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.ArrayList;
import java.util.List;

@EnableWebMvc
@SpringBootApplication
public class StoreApplication {

	@Autowired
	static BillService billService;
	public static void main(String[] args) {
		SpringApplication.run(StoreApplication.class, args);
	}

}
