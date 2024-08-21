package com.taxi.main.pojo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class confirmData {
	@Id
	private String pickupspot;
	private int duration;
	private String destination;
	private int fare;
}
