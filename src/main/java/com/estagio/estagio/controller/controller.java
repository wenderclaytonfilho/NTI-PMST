package com.estagio.estagio.controller;


import org.springframework.web.servlet.ModelAndView;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class controller {

    @GetMapping("/home")
    public ModelAndView home() {
    ModelAndView mv = new ModelAndView("index");
       return mv;

    }

}
