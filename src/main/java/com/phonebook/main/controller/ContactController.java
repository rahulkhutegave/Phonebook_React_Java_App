package com.phonebook.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.phonebook.main.entity.Contact;
import com.phonebook.main.request.ContactRequest;
import com.phonebook.main.service.ContactService;

@RestController
@CrossOrigin("*")
public class ContactController {

	@Autowired
	private ContactService contactService;

	@PostMapping("/add-contact")
	public String createContact(@RequestBody ContactRequest contact) {

		return contactService.addContact(contact);
	}

	@GetMapping("/contacts")
	public List<Contact> getContact() {
		return contactService.fetchContacts();
	}
	
	@GetMapping("/contact/id")
	public Contact getContactById(@RequestParam("id") Long id) {
		return contactService.getContactId(id);
	}

	@PostMapping("/delete-contacts")
	public String deleteContacts(@RequestBody List<Long> ids) {

		return contactService.deleteContacts(ids);
	}

}
