var app=angular.module("table",[]);
app.controller("tableCtrl",function($scope){
	$scope.list=[
			{name:"xiaoyu",age:"22",sex:"女"},
			{name:"xiaoxue",age:"24",sex:"女"},
			{name:"xiaolei",age:"20",sex:"男"},
			{name:"xiaodain",age:"23",sex:"男"}
		]
})