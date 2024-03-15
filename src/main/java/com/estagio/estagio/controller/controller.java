package com.estagio.estagio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.ArrayList;
import java.util.List;

import com.estagio.estagio.model.Task;

@Controller
public class controller {

    List<Task> tasks = new ArrayList<>();

    @PostMapping("/redirect")
    public String redirectToPage(@RequestParam("action") String action) {
        if ("Entrar".equals(action)) {
            return "redirect:/tasks";
        } else if ("Cadastro".equals(action)) {
            return "redirect:/register";
        } else {
            return "redirect:/error.html";
        }
    }

    @PostMapping("/index")
    public String handleIndexPost(@RequestParam("nome") String nome,
            @RequestParam("email") String email,
            @RequestParam("senha") String senha,
            @RequestParam("confirmarSenha") String confirmarSenha) {

        return "redirect:/index";
    }

    @GetMapping("/index")
    public String indexPage() {
        return "index";
    }

    @GetMapping("/tasks")
    public String tasksPage() {
        return "tasks";
    }

    @PostMapping("/register")
    public String registerPage() {
        return "register";
    }

}