package com.estagio.estagio.model;

public class Task {
    private String description;
    private String priority;

    
    public Task(String description, String priority) {
        this.description = description;
        this.priority = priority;
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