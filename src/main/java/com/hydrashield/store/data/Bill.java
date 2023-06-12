package com.hydrashield.store.data;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "bills")
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int bill_id;

    String customer;
    String mobile;

    long amount;

    boolean status = false;
    final LocalDate date = LocalDate.now();


    @OneToMany(mappedBy = "bill", cascade = CascadeType.ALL)
    List<Order> orders;

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }

    @JsonManagedReference("bill-order")
    public List<Order> getOrders() {
        return orders;
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

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
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

    public LocalDate getDate() {
        return date;
    }

    public long getAmount() {
        return amount;
    }

    public void setAmount(long amount) {
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "Bill{" +
                "bill_id=" + bill_id +
                ", customer='" + customer + '\'' +
                ", mobile='" + mobile + '\'' +
                ", amount=" + amount +
                ", date=" + date +
                ", orders=" + orders +
                '}';
    }
}
