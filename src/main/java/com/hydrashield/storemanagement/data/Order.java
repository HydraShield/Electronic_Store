package com.hydrashield.storemanagement.data;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table(name = "orders")
@IdClass(OrderCompositeKey.class)
public class Order {
    @Id
    @ManyToOne
    @JoinColumn(name = "fk_bill")
    Bill bill;

    @Id
    @ManyToOne
    @JoinColumn(name = "fk_item")
    Item item;

    int quantity;

    @JsonBackReference(value = "bill-orders")
    public Bill getBill() {
        return bill;
    }

    public void setBill(Bill bill) {
        this.bill = bill;
    }

    @JsonBackReference(value = "item-orders")
    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}

