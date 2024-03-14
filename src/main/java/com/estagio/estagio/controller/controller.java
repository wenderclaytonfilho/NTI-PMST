package com.estagio.estagio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class controller {

    @GetMapping("/tasks")
    public String tasks() {
        return "tasks";

    }
}
