package br.org.generation.habilidadesementalidadescontroller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

public class HabilidadeseMentalidadesController {
	
	@RestController
	@RequestMapping("/hello")
	public class HelloController {
		
		@GetMapping
		public String hello() {
			return "Hello World";
		}
	}

}
