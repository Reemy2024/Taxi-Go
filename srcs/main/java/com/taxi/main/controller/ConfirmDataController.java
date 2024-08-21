package com.taxi.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.taxi.main.pojo.Cabs;
import com.taxi.main.pojo.confirmData;
import com.taxi.main.repo.ConfirmDataRepository;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class ConfirmDataController {
    
    @Autowired
    private ConfirmDataRepository confirmDataRepository;
    
    @PostMapping("/savedata")
	public String insert(@RequestBody confirmData confirmData) {
    	confirmDataRepository.save(confirmData);
		return "Hello "+confirmData +" Confirm Booking";
	}
    
    @GetMapping("/confirm")
    public List<confirmData> getConfirmData(@RequestParam("pickupspot") String pickupspot, 
                                             @RequestParam("destination") String destination, 
                                             @RequestParam("duration") int duration) {
        // You can add your custom logic to fetch data based on the query parameters
        return confirmDataRepository.findAll();
    }
}