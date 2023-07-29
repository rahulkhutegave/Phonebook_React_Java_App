package com.phonebook.main.service;

import java.util.List;

import com.phonebook.main.entity.Contact;
import com.phonebook.main.request.ContactRequest;

public interface ContactService {

	String addContact(ContactRequest contact);

	List<Contact> fetchContacts();

	String deleteContacts(List<Long> ids);

	Contact getContactId(Long id);
	
	//.mvnw package

}
