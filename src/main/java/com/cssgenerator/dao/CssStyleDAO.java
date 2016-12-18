package com.cssgenerator.dao;

//import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

import org.hibernate.event.spi.SaveOrUpdateEvent;

import com.cssgenerator.entities.CssStyle;


public class CssStyleDAO {
	
	public static void save (){//(CssStyle css, EntityManager entitymanager){
		EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Hibernate_JPA" );
	      EntityManager entitymanager= emfactory.createEntityManager();
	      Query query = entitymanager.createQuery("SELECT count(*) " + "From CssStyle style");
		      long count = (Long)query.getSingleResult();
		      System.out.println(count);
	   /*   if(count == 1){
	    	  System.out.println("Belq");
	      }
	      else{
	    	  entitymanager.getTransaction( ).begin( );
	    	  CssStyle style = new CssStyle( ); 
	    	  long a = 2;
	         style.setId(a);
	          style.setStyleName("Css2");
	          style.setType("bbc");
	          style.setCss("CSSSsS");
	          
	          entitymanager.persist( style );
	          entitymanager.getTransaction( ).commit( );

	          entitymanager.close( );
	          emfactory.close( );
	    	   System.out.println("Gotovo");
	    	*/      
	      }
	//}
	public boolean load (CssStyle css, EntityManager entitymanager){
		return false;
	}
	
	
	public static void main(String[] args) {
		 EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Hibernate_JPA" );
	      
	      EntityManager entitymanager = emfactory.createEntityManager( );
	      entitymanager.getTransaction( ).begin( );

	      CssStyle style = new CssStyle( ); 
	      style.setId( (long)3);
	      style.setType( "eqweqwe" );
	      style.setStyleName("styasdasdle");
	      style.setCss( "CSSSSS" );
	      
	      entitymanager.persist( style );
	      entitymanager.getTransaction( ).commit( );

	      entitymanager.close( );
	      emfactory.close( );
	}
	
	
}

 