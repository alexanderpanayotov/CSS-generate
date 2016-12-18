package com.cssgenerator.system;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class JPAUtil {
	private static final EntityManagerFactory emf = Persistence.createEntityManagerFactory("Hibernate_JPA");

	public static EntityManagerFactory getEntityManagerFactory() {
		return JPAUtil.emf;
	}
}
