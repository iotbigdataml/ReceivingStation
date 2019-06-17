var app=angular.module("shippingstation",[]);
app.controller("shipmentcontroller",['$scope','$http', function($scope, $http){

$scope.funcA = function(){

  $http({
      method: 'GET',
      url: 'http://1fee38b1.ngrok.io/api/pending'

    }).then(function successCallback(response) {

      $scope.users = response.data;


    }, function errorCallback(response) {

      alert("Error. Try Again!");

    });
}
    $scope.funcB = function(){

      $http({
          method: 'GET',
          url: 'http://1fee38b1.ngrok.io/api/pending'

        }).then(function successCallback(response) {

          $scope.us = response.data;


        }, function errorCallback(response) {

          alert("Error. Try Again!");

        });


      angular.forEach($scope.us.Orders,function(value,index){

                alert("Shipping order Id "+ value.orderID);


            })






        };


        $scope.funcC = function(){
          $http({
              method: 'GET',
              url: 'http://cbd0b3ab.ngrok.io/bot1'

            }).then(function successCallback(response) {

              alert(response.data);


            }, function errorCallback(response) {

              alert("Error. Try Again!");

            });


        };

        $scope.funcD = function(){
          $http({
              method: 'GET',
              url: 'http://cbd0b3ab.ngrok.io/bot2'

            }).then(function successCallback(response) {

              alert(response.data);


            }, function errorCallback(response) {

              alert("Error. Try Again!");

            });


        };

        $scope.funcE = function(){
          $http({
              method: 'GET',
              url: 'http://cbd0b3ab.ngrok.io/maintenance'

            }).then(function successCallback(response) {

              alert(response.data);


            }, function errorCallback(response) {

              alert("Error. Try Again!");

            });


        };




}]);


app.filter("groupBy",["$parse","$filter",function($parse,$filter){
  return function(array,groupByField){
    var result	= [];
            var prev_item = null;
            var groupKey = false;
            var filteredData = $filter('orderBy')(array,groupByField);
            for(var i=0;i<filteredData.length;i++){
              groupKey = false;
              if(prev_item !== null){
                if(prev_item[groupByField] !== filteredData[i][groupByField]){
                  groupKey = true;
                }
              } else {
                groupKey = true;
              }
              if(groupKey){
                filteredData[i]['group_by_key'] =true;
              } else {
                filteredData[i]['group_by_key'] =false;
              }
              result.push(filteredData[i]);
              prev_item = filteredData[i];
            }
            return result;
  }
}]);
