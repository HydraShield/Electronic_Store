package com.hydrashield.storemanagement.data;

public class OrderCompositeKey {
    Item item;
    Bill bill;

    public OrderCompositeKey(Item item, Bill bill) {
        this.item = item;
        this.bill = bill;
    }

    public OrderCompositeKey() {
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public Bill getBill() {
        return bill;
    }

    public void setBill(Bill bill) {
        this.bill = bill;
    }
}
