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

import com.taxi.main.pojo.Cabs;
import com.taxi.main.repo.CabsRepo;


@CrossOrigin(origins = "*")

@RestController


public class CabsRestController {

	@Autowired
	private CabsRepo repo;
	
	@PostMapping("/insert")
	public String insert(@RequestBody Cabs Cabs) {
		repo.save(Cabs);
		return "Hello "+Cabs.getDrivername()+" Cab inserted successfully";
	}
	
	@GetMapping("/getAllcabs")
	public List<Cabs> findAllcabs() {
		return repo.findAll();
	}
	
		
	@DeleteMapping("/delete/{cid}")
	public List<Cabs> deletecab(@PathVariable Cabs id){
		repo.delete(id);
		return repo.findAll();
	}
	
	
	}

	

