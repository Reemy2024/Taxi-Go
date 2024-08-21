package com.taxi.main.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.taxi.main.pojo.UserID;

public interface UserRepository extends JpaRepository<UserID, Long>{
    UserID findByUsername(String username);

}
