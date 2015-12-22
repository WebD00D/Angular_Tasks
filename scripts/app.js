angular.module("myTaskApp",[])
.controller('mainCtrl',function($scope){
  $scope.helloWorld = function(){
    console.log("hello world!");
  };


});
