package com.hydrashield.store.model;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

public class CompleteBill {
    int bill_id;
    String customer;
    String mobile;
    long amount;
    LocalDate date;

    Map<Integer, Integer> items = new HashMap<>();

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

    public Map<Integer, Integer> getItems() {
        return items;
    }

    public void setItems(Map<Integer, Integer> items) {
        this.items = items;
    }

    public int getBill_id() {
        return bill_id;
    }

    public void setBill_id(int bill_id) {
        this.bill_id = bill_id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "CompleteBill{" +
                "bill_id=" + bill_id +
                ", customer='" + customer + '\'' +
                ", mobile='" + mobile + '\'' +
                ", amount=" + amount +
                ", date=" + date +
                ", items=" + items +
                '}';
    }
}
