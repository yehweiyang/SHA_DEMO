package com.weiyang;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Tom {

	@RequestMapping("/jump")
	public String jump() {
		System.out.println("come to here");
		return "my_page";

	}

}
