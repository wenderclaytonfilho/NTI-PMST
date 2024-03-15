package com.estagio.estagio.model;

public class Task {
    private long id;
    private String description;
    private String priority;

    
    public Task(long id, String description, String priority) {
        this.id = id;
        this.description = description;
        this.priority = priority;
    }

   
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }
}