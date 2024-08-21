package com.taxi.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.taxi.main.pojo.User;
import com.taxi.main.repo.UserRepo;



@RestController
@CrossOrigin(origins = "*")

public class UserRestController {

	@Autowired
	private UserRepo repo;
	
	@PostMapping("/register")
	public String register(@RequestBody User user) {
		repo.save(user);
		return "Hello "+user.getName()+" Welcome to Taxi-Go";
	}
	
	@GetMapping("/getAllusers")
	public List<User> findAllusers() {
		return repo.findAll();
	}
	
	@GetMapping("/findbyemail/{email}")
	public List<User> getUser(@PathVariable String email) {
		return repo.findByEmail(email);
	}
	
	@DeleteMapping("/cancel/{id}")
	public List<User> deleteuser(@PathVariable int id){
		repo.deleteById(id);
		return repo.findAll();
	}
	
}
