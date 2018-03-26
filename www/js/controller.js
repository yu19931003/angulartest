var app=angular.module("baidu",[]);
app.controller("headerCtrl",function($scope){
	$scope.leftNav=[
			{name:"首页",url:"www.baidu.com"},
			{name:"新闻",url:".news"},
			{name:"hao123",url:".hao123"},
			{name:"地图",url:".map"},
			{name:"视频",url:".v"},
			{name:"贴吧",url:".tieba"},
			{name:"学术",url:".xueshu"},
	];

})
