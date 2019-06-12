var app=angular.module("shippingstation",[]);
app.controller("shipmentcontroller",['$scope','$http', function($scope, $http){


$http({
    method: 'GET',
    url: 'http://2a309936.ngrok.io/notif'

  }).then(function successCallback(response) {

    $scope.users = response.data;

  }, function errorCallback(response) {

    alert("Error. Try Again!");

  });




}])
