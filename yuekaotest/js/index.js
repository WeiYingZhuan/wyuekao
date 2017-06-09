var app = angular.module("app",[]);
app.controller("ctrl",function($scope){
	
	 $scope.arr=[
	
	{"con":"手机卫士","src":"img/soft-01.png"},
	{"con":"手机助手","src":"img/soft-02.png"},
	{"con":"浏览器","src":"img/soft-03.png"},
	{"con":"360商城","src":"img/soft-04.png"},
	{"con":"影视大全","src":"img/soft-05.png"},
	{"con":"省电王","src":"img/soft-06.png"},
	{"con":"免费WIFI","src":"img/soft-07.png"},
	{"con":"ROOT","src":"img/soft-08.png"}
	
	]
//	//控制器
	$scope.add = false;
	$scope.w = function(){
		$scope.add = !$scope.add;
	}

	
})