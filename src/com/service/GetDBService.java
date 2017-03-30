package com.service;

import java.util.List;

import com.entity.SHAEntity;

public interface GetDBService {
	public void insert(SHAEntity entity);
	public void update(SHAEntity entity);
	public void cancel(String name);
	public SHAEntity query(String name);

}
