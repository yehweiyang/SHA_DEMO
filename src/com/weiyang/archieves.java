package com.weiyang;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.DB.core.ConnectDB;
import com.entity.SHAEntity;
import com.fasterxml.jackson.databind.JsonNode;
import com.google.gson.Gson;
import com.impl.GetDBServiceImpl;
import com.service.GetDBService;
@RestController
public class archieves {
	
	@Autowired
	 GetDBService getDBService;
	ConnectDB connectDB = new ConnectDB();
	@RequestMapping(value="query",method = RequestMethod.GET)
	public List<SHAEntity> query(@RequestParam Map<String, Object> requestParams){
		List<SHAEntity> list = new ArrayList<SHAEntity>();
		Object obj = requestParams.get("id");
		if(requestParams.get("id")==null||requestParams.get("id")==""){
			list = getDBService.queryAll();
		}else{
		list.add(getDBService.query((String)requestParams.get("id")));
		}
		return list;
	}
	@RequestMapping(value="insert",method = RequestMethod.POST)
	public void insert(@RequestBody SHAEntity input){
		getDBService.insert(input);
	}
	@RequestMapping(value="update",method = RequestMethod.PUT)
	public String update(@RequestBody SHAEntity input){
		getDBService.update(input);
		Gson gson = new Gson();
		String ss = gson.toJson("修改成功");
		return ss;
	}
	@RequestMapping(value="cancel",method = RequestMethod.DELETE)
	public String cancel(@RequestParam Map<String, Object> requestParams){
		System.out.println(requestParams.keySet());
		getDBService.cancel(requestParams.get("id").toString());
		Gson gson = new Gson();
		String ss = gson.toJson("刪除成功");
		return ss;
	}

}
