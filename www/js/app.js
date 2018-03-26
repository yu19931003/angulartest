var app=angular.module("baidu",["ui.router",]);
app.controller("headerCtrl",function($scope,$filter){
	$scope.leftNav=[
			{name:"首页",url:"www.baidu.com"},
			{name:"新闻",url:".news"},
			{name:"hao123",url:".hao123"},
			{name:"地图",url:".map"},
			{name:"视频",url:".v"},
			{name:"贴吧",url:".tieba"},
			{name:"学术",url:".xueshu"},
			{name:"登录",url:"c"},
			{name:"设置",url:"c"},
			{name:"更多产品",url:"c"},
	];
	$scope.point="山东省济南市发布高温橙色预警"
	$scope.img="./images/a0.png";
	//根据后面的空气数值写前面的空气状态
	var stateHtml=angular.element(".weather-state").children("span").html();
	$scope.weatherState=function(){
		if(stateHtml<=50 && stateHtml>0){
			return 1;
		}else if(stateHtml<=100 && stateHtml>50){
			return 2;
		}else if(stateHtml<=150 && stateHtml>100){
			return 3;
		}else if(stateHtml<=200 && stateHtml>150){
			return 4;
		}else if(stateHtml<=300 && stateHtml>200){
			return 5;
		}else{
			return 6;
		}
	}
	//日期
	var today = new Date();
	$scope.solarDate = $filter('date')(today, 'MM月dd日');
	$scope.lunarDate=GetLunarDay();
})
//天气的布局
app.directive("weather",function(){
	return{
		restrict:"E",
		templateUrl:"./web/listPage/header/weather.html"
	}
})
app.controller("footerCtrl",function($scope){
	$scope.footerNav=[
			{name:"把百度设为首页",url:"www.baidu.com"},
			{name:"关于百度",url:".news"},
			{name:"About Baidu",url:".hao123"},
			{name:"百度推广",url:".map"}
	];
})
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/view");
	$stateProvider
	.state("view",{
		url:"/view",
		views:{
			"":{
				templateUrl:"web/view.html"
			},
			"header@view":{
				templateUrl:"web/listPage/header/header.html",
			},
			"content@view":{
				templateUrl:"web/listPage/content/main.html"
			},
			"footer@view":{
				templateUrl:"web/listPage/footer.html"
			}
		}
	})

})
