package com.cssgenerator.dao;

//import java.util.List;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceException;
import javax.persistence.Query;

import org.hibernate.HibernateException;
import org.hibernate.SQLQuery;
import org.hibernate.event.spi.SaveOrUpdateEvent;



import com.cssgenerator.entities.CssStyle;

public class CssStyleDAO {

	public void save(CssStyle css, EntityManager entitymanager)
			throws PersistenceException, IllegalArgumentException {

		Query query = entitymanager
				.createQuery("SELECT count(*) From CssStyle style where style.type = :type");
		query.setParameter("type", css.getType());
		long count = (Long) query.getSingleResult();
		System.out.println("���� ������ �� ������� ���:" + count);

		if (count >= 5) {
			throw new IllegalArgumentException(
					"�� � ��������� ����������� �� ������ �� 5 ������!");
		} else {

			try {
				entitymanager.persist(css);
			} catch (PersistenceException e) {
				e.printStackTrace();
				throw new PersistenceException(
						"������ � ������ ��� ����� �� ������� !!!", e);
			} finally {
				entitymanager.close();
			}
		}
	}

	public List loadAllStyles(EntityManager entitymanager) {
		
		try {
			String sql = "FROM CssStyle";
			Query query = entitymanager.createQuery(sql);
			List<CssStyle> results = (List<CssStyle>) query.getResultList();
			return results;
		} catch (PersistenceException e) {
			throw new PersistenceException("������ ��� ������ �� ������", e);
		}
	}

	public List loadStyleByType(CssStyle css, EntityManager entitymanager) {
		
		String type = css.getType();
		try {
			String sql = "FROM CssStyle css Where css.type =:type";
			Query query = entitymanager.createQuery(sql);
			query.setParameter("type", type);
			List<CssStyle> results = (List<CssStyle>) query.getResultList();
			return results;
		} catch (PersistenceException e) {
			throw new PersistenceException("������ ��� ������ �� ������", e);
		}
	}
}
 