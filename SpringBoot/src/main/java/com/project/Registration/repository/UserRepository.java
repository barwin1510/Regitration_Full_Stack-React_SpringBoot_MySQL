package com.project.Registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.Registration.model.User;

public interface UserRepository extends JpaRepository<User, Long> {}
