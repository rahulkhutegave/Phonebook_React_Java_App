package com.phonebook.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.phonebook.main.entity.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {

}
