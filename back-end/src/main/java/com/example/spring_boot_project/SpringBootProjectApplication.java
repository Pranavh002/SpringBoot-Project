package com.example.spring_boot_project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootProjectApplication {
	
	public static void main(String[] args) {

		SpringApplication.run(SpringBootProjectApplication.class, args);
		System.out.println("Hi, I'm testing my backend");
	}

}
