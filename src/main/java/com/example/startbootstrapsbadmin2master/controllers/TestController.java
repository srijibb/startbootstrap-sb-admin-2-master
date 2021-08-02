package com.example.startbootstrapsbadmin2master.controllers;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class TestController {



    @RequestMapping(value = "/index.html")
    public String hello(Model model) {
            return "index";
        }

    @RequestMapping(value = "/tables.html")
    public String tables(Model model) {
        return "tables";
    }

    @RequestMapping(value = "/charts.html")
    public String charts(Model model)
    {
        model.addAttribute("text","controllertest");
        //obj.sav(input);
        return "charts";

    }

    @RequestMapping(value = {"/","/login.html"})
    public String login(Model model)
    {
        return "login";
    }

    @RequestMapping(value = "/register.html")
    public String register(Model model)
    {
        return "register";
    }

    @RequestMapping(value = "/forgot-password.html")
    public String forget_password(Model model)
    {
        return "forgot-password.html";
    }

    @RequestMapping(value = "/blank.html")
    public String blank(Model model)
    {
        return "blank";
    }

    @RequestMapping(value = "/404.html")
    public String error(Model model)
    {
        return "404";
    }

    @RequestMapping(value = "/utilities-animation.html")
    public String animations(Model model)
    {
        return "utilities-animation";
    }

    @RequestMapping(value = "/cards.html")
    public String cards(Model model){
        return "cards";
    }

    @RequestMapping(value = "/buttons.html")
    public String buttons(Model model){
        return "buttons";
    }

}
