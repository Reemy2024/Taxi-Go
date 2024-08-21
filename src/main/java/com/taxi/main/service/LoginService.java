package com.taxi.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.taxi.main.pojo.UserID;
import com.taxi.main.repo.UserRepository;

@Service
public class LoginService {
	 @Autowired
	    private UserRepository userRepository;
	 public UserID login(String username, String password) {
	        UserID user = userRepository.findByUsername(username);
	        if (user != null && user.getPassword().equals(password)) {
	            return user;
	        } else {
	            return null;
	        }
	    }
}
