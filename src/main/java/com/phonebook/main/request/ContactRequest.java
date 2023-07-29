package com.phonebook.main.request;

public class ContactRequest {

	private Long id;

	private String name;

	private String email;

	private Long mobNumber;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getMobNumber() {
		return mobNumber;
	}

	public void setMobNumber(Long mobNumber) {
		this.mobNumber = mobNumber;
	}

	@Override
	public String toString() {
		return "ContactRequest [name=" + name + ", email=" + email + ", mobNumber=" + mobNumber + "]";
	}

}
