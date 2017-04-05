<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en"  ng-app="myApp">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Jumbotron Template for Bootstrap</title>

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">



  </head>

  <body ng-controller="AppController">
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title" id="exampleModalLabel">New message</h4>
      </div>
      <div class="modal-body">
        <form role="form">
          <div class="form-group">
            <label for="recipient-name" class="control-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="form-group">
            <label for="message-text" class="control-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
      
 		<script type="text/ng-template" id="myModalContent.html">
        <div class="modal-header">
            <h3 class="modal-title" id="modal-title">I'm a modal!</h3>
        </div>
        <div class="modal-body" id="modal-body">
            <ul>
                <li ng-repeat="item in $ctrl.items">
                    <a href="#" ng-click="$event.preventDefault(); $ctrl.selected.item = item">{{ item }}</a>
                </li>
            </ul>
            Selected: <b>{{ $ctrl.selected.item }}</b>
        </div>
        <div class="modal-footer">
            <button class="btn btn-primary" type="button" ng-click="ok()">OK</button>
            <button class="btn btn-warning" type="button" ng-click="cancel()">Cancel</button>
        </div>
   		 </script>
 
  
  
  

    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <form class="navbar-form navbar-right" role="form">
            <div class="form-group">
              <input type="text" placeholder="Email" class="form-control">
            </div>
            <div class="form-group">
              <input type="password" placeholder="Password" class="form-control">
            </div>
            <button type="submit" class="btn btn-success">Sign in</button>
          </form>
        </div><!--/.navbar-collapse -->
      </div>
    </nav>
	<form class="form-inline" role="form">
	  <div class="form-group">
	    <div class="input-group">
	      <label class="sr-only" for="exampleInputEmail2">電子郵件</label>
	      <div class="input-group-addon">@</div>
	      <input type="email" class="form-control" id="exampleInputEmail2" placeholder="輸入電子郵件">
	    </div>
	  </div>
	  <div class="form-group">
	    <label class="sr-only" for="exampleInputPassword2">密碼</label>
	    <input type="password" class="form-control" id="exampleInputPassword2" placeholder="密碼">
	  </div>
	  <div class="checkbox">
	    <label>
	      <input type="checkbox"> 記住我
	    </label>
	  </div>
	  <button type="submit" class="btn btn-default">登入</button>
	</form>
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
      
       <div class="container">
        <h1>基本資料</h1>
        <table class="table table-border">
        
        <div class="form-horizontal well well-sm archives-well-fixed">
       <div class="row">
       <label class="col-md-2 control-label">姓氏</label>
       <div class="col-md-4"><input type="text" class="form-control"  name="last_name" ng-model="inputVO.last_name"/></div>
       <label class="col-md-2 control-label">名字</label>
       <div class="col-md-4"><input type="text" class="form-control"  name="first_name" ng-model="inputVO.first_name"/></div>
       </div>
         <div class="row">
       <label class="col-md-2 control-label">身分證字號</label>
       <div class="col-md-4"><input type="text" class="form-control"  name="id" ng-model="inputVO.id"/></div>
       <label class="col-md-2 control-label">電子信箱</label>
       <div class="col-md-4"><input type="text" class="form-control"  name="email" ng-model="inputVO.email"/></div>
       </div>
       </div>
       </table>
      </div>
      <div class="container">
       <div class="row text-center">
       <div class="col-md-3"></div>
       <button class="col-md-2 btn btn-primary btn-lg" ng-click=query()>查詢</button>
       <button class="col-md-2 btn btn-primary btn-lg" ng-click=insert()>新增</button>
       <button class="col-md-2 btn btn-primary btn-lg" ng-click=nope()>取消</button>

       </div>
      </div>
      
    </div>

     <a href="#/good">good</a><br>
    <a href="#/GGYY">test</a><br>
    <a href="#/insert">insert</a>
 <button type="button" class="btn btn-default" ng-click="open()">Open me!</button>
<!-- 
       <button class="col-md-2 btn btn-primary btn-lg" ng-click="insert()">新增</button>
       <button class="col-md-2 btn btn-primary btn-lg" ng-click="update()">修改</button>
       <button class="col-md-2 btn btn-primary btn-lg" ng-click="cancel()">刪除</button>
 -->
    <div class="container">
      <!-- Example row of columns -->
      <div class="row">
      
      
      
      
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@twbootstrap">Open modal for @twbootstrap</button>


		
      </div>
      <table class="table table-striped">
  		<thead><tr><th><label class="col-md-2" text-align="center">修改</label><label class="col-md-2">刪除</label></th><th>姓氏</th><th>名字</th><th>身分證字號</th><th>電子信箱</th></tr></thead>
  		<tbody ng-repeat="row in total">
  		<tr>
  		<td><!-- 指出應謹慎採取此一行動 -->
  		<label><button type="button" class="btn btn-warning">Warning</button></label>
  		<label><button type="button" class="btn btn-danger">Danger</button></label>
<!-- 指出危險或潛在負面作用的行動 -->
</td>
  		<td>{{row.last_name}}</td>
  		<td>{{row.first_name}}</td>
  		<td>{{row.id}}</td>
  		<td>{{row.email}}</td></tr>
  		</tbody>
		</table>
<hr>
	<div class="container" ng-view></div>
      <hr>
      
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1 id="good">good</h1>
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1>11111111111111111111</h1>
<h1><c:url value='/myApp/assets/html/'></c:url></h1>
      <footer>
        <p>&copy; Company 2014</p>
      </footer>
    </div> <!-- /container -->


    <!-- Bootstrap core JavaScript
    ================================================== -->
    
    <!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>

<!-- Latest compiled JavaScript-->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="<c:url value='/myApp/assets/lib/angular.js' />"></script>
<script src="<c:url value='/myApp/assets/lib/ui-bootstrap-tpls-2.5.0.js' />"></script>
<script src="<c:url value='/myApp/assets/lib/angular-route.js' />"></script>

<script src="<c:url value='/myApp/assets/js/main.js' />"></script>
<script src="<c:url value='/myApp/assets/js/ngRoute.js' />"></script>
<script src="<c:url value='/myApp/assets/js/appConstant.js' />"></script>
  </body>
</html>

