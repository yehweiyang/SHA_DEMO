package com.DB.core;

import org.hibernate.*;
import org.hibernate.cfg.*;

import com.entity.SHAEntity;
import com.weiyang.Tom;

public class ConnectDB {
	
	public Session start(Class obj){
		SessionFactory factory = new Configuration()
		.configure("hibernate.cfg.xml")
		.addAnnotatedClass(obj)
		.buildSessionFactory();
		return factory.getCurrentSession();
	}
}
