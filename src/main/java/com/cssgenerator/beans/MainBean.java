packpackage com.cssgenerator.beans;



import java.util.ArrayList;

import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.faces.context.FacesContext;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceException;
import javax.servlet.http.HttpServletRequest;

import org.hibernate.HibernateException;

import antlr.collections.List;

import com.cssgenerator.dao.CssStyleDAO;
import com.cssgenerator.entities.CssStyle;
import com.cssgenerator.system.JPAUtil;


@ManagedBean(name="controller")
@ViewScoped
public class MainBean {

	private CssStyle currentStyle = new CssStyle();
	private ArrayList<CssStyle> listOfCssStyle;
	private EntityManagerFactory emf = JPAUtil.getEntityManagerFactory();
	
	public void save() {
		
		EntityManager entitymanager = emf.createEntityManager();
		
		
		HttpServletRequest request = (HttpServletRequest)FacesContext.getCurrentInstance().getExternalContext().getRequest();
		
		currentStyle.setCss(request.getParameter("css"));
		currentStyle.setType(request.getParameter("type"));
		currentStyle.setStyleName(request.getParameter("name"));
		CssStyleDAO dao = new CssStyleDAO();
		
		try {
			entitymanager.getTransaction().begin();
			dao.save(currentStyle, entitymanager);
			entitymanager.getTransaction().commit();

		} catch (PersistenceException e) {
			if (entitymanager.getTransaction().isActive()) {
				entitymanager.getTransaction().rollback();
			}
			FacesMessage message = new FacesMessage(FacesMessage.SEVERITY_INFO, "Инфо:", "Неуспешен запис.");
			FacesContext context = FacesContext.getCurrentInstance();
			context.addMessage(null, message);
			e.printStackTrace();

		} finally {
			entitymanager.close();
		}
	}
	public void load() {
		
	}

	public CssStyle getCurrentStyle() {
		return currentStyle;
	}

	public void setCurrentStyle(CssStyle currentStyle) {
		this.currentStyle = currentStyle;

	}
	public ArrayList<CssStyle> getListOfCssStyle() {
		return listOfCssStyle;
	}
	public void setListOfCssStyle(ArrayList<CssStyle> listOfCssStyle) {
		this.listOfCssStyle = listOfCssStyle;
	}

}
