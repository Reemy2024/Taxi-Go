package com.taxi.main.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.taxi.main.pojo.confirmData;

public interface ConfirmDataRepository extends JpaRepository <confirmData, String> {

	List<confirmData> findAll();

}
