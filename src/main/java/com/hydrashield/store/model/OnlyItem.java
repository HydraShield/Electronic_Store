package com.hydrashield.store.model;

public class OnlyItem {
    int item_id;
    String model;
    String company;
    int price;

    public OnlyItem() {
    }

    public OnlyItem(int item_id, String model, String company, int price) {
        this.item_id = item_id;
        this.model = model;
        this.company = company;
        this.price = price;
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
}
