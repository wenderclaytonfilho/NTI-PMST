package com.estagio.estagio.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class controller {

    @GetMapping("/home")
    public ModelAndView home() {
    ModelAndView mv = new ModelAndView("index");
       return mv;

    }

}
