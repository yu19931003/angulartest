var app=angular.module("directive",[]);
app.directive("yu",function(){
	return{
		restrict:"E",
		priority:3,
		template:"<h1>这里是做了一个测试</h1>"
	}
});
app.directive("cheng",function(){
	return{
		restrict:"E",
		priority:22,
		terminal:true,//测试不管用
		template:function(tElement,tAttrs){
			var html="";
			html+='<h1>这里是做了一个测试1</h1>';
			return html;
		}
	}
});
app.controller("ctrl",function($scope){
	$scope.name="111";
})
app.directive("shuai",function(){
	return{
		restrict:"E",
		scope:true,
		template:'子级元素：{{name}}<input type="text" ng-model="name">'

	}
})