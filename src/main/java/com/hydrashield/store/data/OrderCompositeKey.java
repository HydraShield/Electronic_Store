package com.hydrashield.store.data;

import jakarta.persistence.Embeddable;

import java.io.Serializable;

@Embeddable
public class OrderCompositeKey implements Serializable {
    int item_id;
    int bill_id;

    public OrderCompositeKey(int item, int bill) {
        this.item_id = item;
        this.bill_id = bill;
    }

    public OrderCompositeKey() {
    }

    public int getItem_id() {
        return item_id;
    }

    public void setItem_id(int item_id) {
        this.item_id = item_id;
    }

    public int getBill_id() {
        return bill_id;
    }

    public void setBill_id(int bill_id) {
        this.bill_id = bill_id;
    }

    @Override
    public String toString() {
        return "OrderCompositeKey{" +
                "item_id=" + item_id +
                ", bill_id=" + bill_id +
                '}';
    }
}
