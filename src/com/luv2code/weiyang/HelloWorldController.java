package com.luv2code.weiyang;
 
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
 
@Controller
public class HelloWorldController {
 
    @RequestMapping(value ="/",method = RequestMethod.GET)
    public String sayHello(ModelMap model) {
    	System.out.println("come to papa");
        model.addAttribute("greeting", "Hello World from Spring 4 MVC");
        return "maki";
    }
 
    @RequestMapping(value = "/BIBBY", method = RequestMethod.GET)
    public String sayHelloAgain(ModelMap model) {
    	System.out.println("************");
    	System.out.println("************");
    	System.out.println("************");
    	System.out.println("幹 為什麼沒有辦法跳轉");
        model.addAttribute("greeting", "Hello World Again, from Spring 4 MVC");
        return "maki";
    }
 
}