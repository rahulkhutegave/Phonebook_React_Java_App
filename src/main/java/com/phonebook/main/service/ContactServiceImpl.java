package com.phonebook.main.service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.phonebook.main.entity.Contact;
import com.phonebook.main.repository.ContactRepository;
import com.phonebook.main.request.ContactRequest;

@Service
public class ContactServiceImpl implements ContactService {

	@Autowired
	private ContactRepository contactRepo;

	@Override
	public String addContact(ContactRequest contactReq) {
		
		if(null !=contactReq.getId()) {
			Contact contact = contactRepo.findById(contactReq.getId()).get();
			contact.setName(contactReq.getName());
			contact.setEmail(contact.getEmail());
			contact.setPhoneNumber(contact.getPhoneNumber());
			Contact savedContact = contactRepo.save(contact);
			if (!Objects.isNull(savedContact))
				return "Contact Updated Successfully!!";
		}else {
			Contact contact = new Contact();
			contact.setName(contactReq.getName());
			contact.setEmail(contactReq.getEmail());
			contact.setPhoneNumber(contactReq.getMobNumber());
			System.out.println("service:>>>" + contact);
			Contact savedContact = contactRepo.save(contact);
			if (!Objects.isNull(savedContact))
				return "Contact Saved Successfully!!";
		}

		
		return "Something Went Wrong";
	}

	@Override
	public List<Contact> fetchContacts() {

		return contactRepo.findAll();
	}

	@Override
	public String deleteContacts(List<Long> ids) {
		contactRepo.deleteAllById(ids);
		return "Contacts Deleted Successfully!!";
	}

	@Override
	public Contact getContactId(Long id) {
		
		return contactRepo.findById(id).get();
	}

}
