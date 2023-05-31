package com.hydrashield.storemanagement.data;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;
import java.util.Set;

@Entity
@Table(name = "items")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int item_id;
    String model;
    String company;
    int price;


    @OneToMany(mappedBy = "item")
    public List<Order> orders;

    @JsonManagedReference(value = "item-orders")
    public List<Order> getOrders() {
        return orders;
    }

    public int getItem_id() {
        return item_id;
    }

    public void setItem_id(int item_id) {
        this.item_id = item_id;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Item{" +
                "item_id=" + item_id +
                ", model='" + model + '\'' +
                ", company='" + company + '\'' +
                ", price=" + price +
                ", orders=" + orders +
                '}';
    }
}
