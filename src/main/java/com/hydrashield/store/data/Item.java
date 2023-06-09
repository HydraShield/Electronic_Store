package com.hydrashield.store.data;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "items")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int item_id;
    String model;
    String company;
    int price;

    @OneToOne(mappedBy = "item", cascade = CascadeType.ALL)
    Stock item_stock;

    @OneToMany(mappedBy = "item", cascade = CascadeType.ALL)
    List<Order> orders;

    @JsonManagedReference("item-order")
    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }

    @JsonManagedReference("item-stock")
    public Stock getItem_stock() {
        return item_stock;
    }

    public void setItem_stock(Stock item_stock) {
        this.item_stock = item_stock;
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
                ", item_stock=" + item_stock +
                ", orders=" + orders +
                '}';
    }
}
