package com.hydrashield.store.model;

import com.hydrashield.store.data.Item;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DetailBill {
    int bill_id;
    String customer;
    String mobile;
    long amount;

    boolean status;
    LocalDate date;

    List<OnlyItem> items;

    List<Integer> quantity;

    public DetailBill(int bill_id, String customer, String mobile, long amount, LocalDate date,boolean status, List<OnlyItem> items, List<Integer> quantity) {
        this.bill_id = bill_id;
        this.customer = customer;
        this.mobile = mobile;
        this.amount = amount;
        this.date = date;
        this.items = items;
        this.quantity = quantity;
        this.status = status;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public void setItems(List<OnlyItem> items) {
        this.items = items;
    }

    public List<OnlyItem> getItems() {
        return items;
    }

    public List<Integer> getQuantity() {
        return quantity;
    }

    public void setQuantity(List<Integer> quantity) {
        this.quantity = quantity;
    }

    public DetailBill() {
    }


    public int getBill_id() {
        return bill_id;
    }

    public void setBill_id(int bill_id) {
        this.bill_id = bill_id;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public long getAmount() {
        return amount;
    }

    public void setAmount(long amount) {
        this.amount = amount;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "DetailBill{" +
                "bill_id=" + bill_id +
                ", customer='" + customer + '\'' +
                ", mobile='" + mobile + '\'' +
                ", amount=" + amount +
                ", date=" + date +
                ", items=" + items +
                ", quantity=" + quantity +
                '}';
    }
}
