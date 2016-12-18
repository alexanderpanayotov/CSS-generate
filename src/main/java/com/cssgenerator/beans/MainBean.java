package com.cssgenerator.beans;



import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.faces.context.FacesContext;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.servlet.http.HttpServletRequest;

import org.hibernate.HibernateException;


import com.cssgenerator.dao.CssStyleDAO;
import com.cssgenerator.entities.CssStyle;


@ManagedBean(name="controller")
@ViewScoped
public class MainBean {

	private CssStyle currentStyle = new CssStyle();
	
	public static void main(String[] args) {
		save();
	}
	
	public static String save() {
		EntityManagerFactory emfactory = Persistence
				.createEntityManagerFactory("Hibernate_JPA");
		EntityManager entitymanager = emfactory.createEntityManager();
		
		HttpServletRequest request = (HttpServletRequest)FacesContext.getCurrentInstance().getExternalContext().getRequest();
        String css = request.getParameter("preview");
		 

		CssStyleDAO DAO = new CssStyleDAO();
		
		try {
//			entitymanager.getTransaction().begin();
//			DAO.save(getCurrentStyle(), entitymanager);
//			entitymanager.getTransaction().commit();

		} catch (HibernateException e) {
			if (entitymanager.getTransaction().isActive()) {
				entitymanager.getTransaction().rollback();
			}
			e.printStackTrace();

		} finally {
			entitymanager.close();
			emfactory.close();
		}
		return null;
	}

	public CssStyle getCurrentStyle() {
		return currentStyle;
	}

	public void setCurrentStyle(CssStyle currentStyle) {
		this.currentStyle = currentStyle;
	}

}
