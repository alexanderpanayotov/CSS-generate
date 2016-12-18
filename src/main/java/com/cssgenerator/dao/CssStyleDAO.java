package com.cssgenerator.dao;

//import java.util.List;

import java.util.ArrayList;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceException;
import javax.persistence.Query;

import org.hibernate.HibernateException;
import org.hibernate.SQLQuery;
import org.hibernate.event.spi.SaveOrUpdateEvent;

import antlr.collections.List;

import com.cssgenerator.entities.CssStyle;

public class CssStyleDAO {

	public void save(CssStyle css, EntityManager entitymanager)
			throws PersistenceException, IllegalArgumentException {

		Query query = entitymanager
				.createQuery("SELECT count(*) From CssStyle style where style.type = :type");
		query.setParameter("type", css.getType());
		long count = (Long) query.getSingleResult();
		System.out.println("Брой записи от дадения тип:" + count);

		if (count >= 5) {
			throw new IllegalArgumentException(
					"Не е позволено записването на повече от 5 записа!");
		} else {

			try {
				entitymanager.persist(css);
			} catch (PersistenceException e) {
				e.printStackTrace();
				throw new PersistenceException(
						"Грешка в базата при запис на продукт !!!", e);
			} finally {
				entitymanager.close();
			}

		}

	}

	public ArrayList loadAllStyles(EntityManager entitymanager) {
		
		try {
			String sql = "FROM CssStyle";
			Query query = entitymanager.createQuery(sql);
			ArrayList<CssStyle> results = (ArrayList<CssStyle>) query.getResultList();
			return results;
		} catch (PersistenceException e) {
			throw new PersistenceException("Грешка при четене от базата", e);
		}
	}

	public ArrayList loadStyleByType(CssStyle css, EntityManager entitymanager) {
		
		String type = css.getType();
		try {
			String sql = "FROM CssStyle css Where css.type =:type";
			Query query = entitymanager.createQuery(sql);
			query.setParameter("type", type);
			ArrayList<CssStyle> results = (ArrayList<CssStyle>) query.getResultList();
			return results;
		} catch (PersistenceException e) {
			throw new PersistenceException("Грешка при четене от базата", e);
		}
	}
}
 