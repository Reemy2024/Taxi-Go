

package com.taxi.main.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.taxi.main.pojo.Cabs;



public interface CabsRepo extends JpaRepository<Cabs, Integer> {

	
	List<Cabs> findBycid(Integer cid);
	  
}
