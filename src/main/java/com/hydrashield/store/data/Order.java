package com.hydrashield.store.data;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "orders")
public class Order {

    @EmbeddedId
    OrderCompositeKey order_id = new OrderCompositeKey();

    @MapsId("bill_id")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bill_fk")
    Bill bill;

    @MapsId("item_id")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_fk")
    Item item;

    int quantity;

    @JsonBackReference("bill-order")
    public Bill getBill() {
        return bill;
    }

    public void setBill(Bill bill) {
        this.bill = bill;
    }

    @JsonBackReference("item-order")
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

    public OrderCompositeKey getOrder_id() {
        return order_id;
    }

    public void setOrder_id(OrderCompositeKey order_id) {
        this.order_id = order_id;
    }

    @Override
    public String toString() {
        return "Order{" +
                "order_id=" + order_id +
                ", bill=" + bill +
                ", item=" + item +
                ", quantity=" + quantity +
                '}';
    }
}

