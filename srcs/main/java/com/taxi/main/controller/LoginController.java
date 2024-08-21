package com.taxi.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.taxi.main.pojo.UserID;
import com.taxi.main.service.LoginService;

@RestController
@RequestMapping("/api/login")

public class LoginController {
	@Autowired
    private LoginService loginService;
	
	 @PostMapping
	    public UserID login(@RequestBody LoginRequest loginRequest) {
	        return loginService.login(loginRequest.getUsername(), loginRequest.getPassword());
	    }
}
class LoginRequest {
    private String username;
    private String password;
	public String getUsername() {
		// TODO Auto-generated method stub
		return null;
	}
	public String getPassword() {
		// TODO Auto-generated method stub
		return null;
	}
}
