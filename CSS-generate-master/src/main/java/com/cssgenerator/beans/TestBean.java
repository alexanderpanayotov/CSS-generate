package com.cssgenerator.beans;

import javax.faces.bean.ManagedBean;

@ManagedBean(name = "testBean", eager = true)
public class TestBean {
	public TestBean() {
		System.out.println("Aplication started!");
	}

	public String getMessage() {
		return "Aplication started!";
	}
}
