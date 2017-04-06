package com.impl;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DB.core.ConnectDB;
import com.entity.SHAEntity;
import com.service.GetDBService;
@Service
public class GetDBServiceImpl implements GetDBService {
	
	private ConnectDB connectDB=null;
	@Override
	public void insert(SHAEntity entity) {
		Session  session =new ConnectDB().start(SHAEntity.class);
		Transaction tx = session.beginTransaction();
		session.save(entity);
		tx.commit();
	}

	@Override
	public void update(SHAEntity entity) {
		Session  session =new ConnectDB().start(SHAEntity.class);
		Transaction tx = session.beginTransaction();
		session.update(entity);
		tx.commit();
	}

	@Override
	public void cancel(String name) {
		Session  session =new ConnectDB().start(SHAEntity.class);
		SHAEntity sha = new SHAEntity();
		Transaction tx = session.beginTransaction();
		sha = session.get(SHAEntity.class, name);
		session.delete(sha);
		tx.commit();
	}

	@Override
	public SHAEntity query(String name) {
		SHAEntity sha = new SHAEntity();
		Session  session =new ConnectDB().start(SHAEntity.class);
		Transaction tx = session.beginTransaction();
		sha = session.get(SHAEntity.class, name);
		tx.commit();
		return sha;
	}

	@Override
	public List<SHAEntity> queryAll() {
		Session  session =new ConnectDB().start(SHAEntity.class);
		Transaction tx = session.beginTransaction();
		Query query = session.createQuery("from SHAEntity");
		List<SHAEntity> list = query.list();
		tx.commit();
		return list;
	}
	



}
