package com.cssgenerator.beans;

import java.util.ArrayList;
import java.util.List;

import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.faces.context.FacesContext;
import javax.persistence.Entity;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceException;
import javax.servlet.http.HttpServletRequest;

import org.hibernate.HibernateException;
import org.junit.Test;

import com.cssgenerator.dao.CssStyleDAO;
import com.cssgenerator.entities.CssStyle;
import com.cssgenerator.system.JPAUtil;

@ManagedBean(name = "controller")
@ViewScoped
public class MainBean {

	private CssStyle currentStyle = new CssStyle();
	private List<CssStyle> listOfCssStyle;
	private EntityManagerFactory emf = JPAUtil.getEntityManagerFactory();
	@Test
	public void save() {

		EntityManager entitymanager = emf.createEntityManager();

		HttpServletRequest request = (HttpServletRequest) FacesContext
				.getCurrentInstance().getExternalContext().getRequest();

		currentStyle.setCss(request.getParameter("border-radius"));
//		currentStyle.setType(request.getParameter("type"));
//		currentStyle.setStyleName(request.getParameter("name"));
		CssStyleDAO dao = new CssStyleDAO();
		currentStyle.setStyleName("qwer");
		try {
			entitymanager.getTransaction().begin();
			dao.save(currentStyle, entitymanager);
			entitymanager.getTransaction().commit();

			FacesMessage message = new FacesMessage(FacesMessage.SEVERITY_INFO,
					"Инфо:", "Успешeн запис.");
			addFacesContextMessage(message);
		} catch (IllegalArgumentException e) {
			if (entitymanager.getTransaction().isActive()) {
				entitymanager.getTransaction().rollback();
			}
			FacesMessage message = new FacesMessage(FacesMessage.SEVERITY_WARN,
					"Инфо:", e.getMessage());
			addFacesContextMessage(message);
		} catch (PersistenceException e) {

			if (entitymanager.getTransaction().isActive()) {
				entitymanager.getTransaction().rollback();
			}
			FacesMessage message = new FacesMessage(FacesMessage.SEVERITY_INFO,
					"Инфо:", "Неуспешен запис.");
			addFacesContextMessage(message);
			e.printStackTrace();

		} finally {
			entitymanager.close();
		}
	}

	public void load() {

		EntityManager entitymanager = emf.createEntityManager();
		CssStyleDAO dao = new CssStyleDAO();
		try {
			listOfCssStyle = dao.loadAllStyles(entitymanager);
		} catch (PersistenceException e) {
			e.printStackTrace();
		} finally {
			entitymanager.close();
		}
	}

	public void addFacesContextMessage(FacesMessage message) {
		FacesContext context = FacesContext.getCurrentInstance();
		context.addMessage(null, message);
	}

	public CssStyle getCurrentStyle() {
		return currentStyle;
	}

	public void setCurrentStyle(CssStyle currentStyle) {
		this.currentStyle = currentStyle;

	}

	public List<CssStyle> getListOfCssStyle() {
		return listOfCssStyle;
	}

	public void setListOfCssStyle(List<CssStyle> listOfCssStyle) {
		this.listOfCssStyle = listOfCssStyle;
	}

}
