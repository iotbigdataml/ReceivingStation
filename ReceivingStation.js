var app = angular.module("receivingstation", []);
app.controller("receivingcontroller", ['$scope', '$http', function ($scope, $http) {





  // Fetch data from url every one second
  setInterval(function () {
    $http({
      method: 'GET',
      url: 'http://ec2-34-238-240-46.compute-1.amazonaws.com:3000/api/orders/pending'

    }).then(function successCallback(response) {

      $scope.pending = response.data;

    }, function errorCallback(response) {

      // alert("Error. Try Again!");

    })
  }, 1000);

  setInterval(function () {
    $http({
      method: 'GET',
      url: 'http://ec2-34-238-240-46.compute-1.amazonaws.com:3000/api/orders/loaded'

    }).then(function successCallback(response) {

      $scope.loaded = response.data;

    }, function errorCallback(response) {

      //alert("Error. Try Again!");

    })
  }, 1000);

  setInterval(function () {
    $http({
      method: 'GET',
      url: 'http://ec2-34-238-240-46.compute-1.amazonaws.com:3000/api/orders/cancelled'

    }).then(function successCallback(response) {

      $scope.cancelled = response.data;

    }, function errorCallback(response) {

      //alert("Error. Try Again!");

    })
  }, 1000);

  // Function to control bot one
  $scope.botone = function () {
    var parameter = JSON.stringify({ "station": "RECV", "bot": "11" });
    url = 'http://ec2-34-238-240-46.compute-1.amazonaws.com:3000/api/trips/update/bot/departure'
    $http.post(url, parameter).
      success(function (data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(data);
      }).
      error(function (data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

    $http({
      method: 'GET',
      url: 'http://ad289656.ngrok.io/bot1'

    }).then(function successCallback(response) {



    }, function errorCallback(response) {

      alert("Error. Try Again!");

    });


  };

  // Function to control bot two

  $scope.bottwo = function () {
    var parameter = JSON.stringify({ "station": "RECV", "bot": "12" });
    url = 'http://ec2-34-238-240-46.compute-1.amazonaws.com:3000/api/trips/update/bot/departure'
    $http.post(url, parameter).
      success(function (data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(data);
      }).
      error(function (data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });


    $http({
      method: 'GET',
      url: 'http://ad289656.ngrok.io/bot2'

    }).then(function successCallback(response) {




    }, function errorCallback(response) {

      alert("Error. Try Again!");

    });


  };

  // Function to put bots on maintenance

  $scope.maintainenceOn = function () {
    $http({
      method: 'GET',
      url: 'http://ad289656.ngrok.io/entermaintenance'

    }).then(function successCallback(response) {




    }, function errorCallback(response) {

      alert("Error. Try Again!");

    });


  };

  // Function to put bots out of maintenance

  $scope.maintainenceOff = function () {
    $http({
      method: 'GET',
      url: 'http://ad289656.ngrok.io/exitmaintenance'

    }).then(function successCallback(response) {


    }, function errorCallback(response) {

      alert("Error. Try Again!");

    });


  };

  //function to change order Status from pending to loaded
  $scope.loadOrder = function (id) {


    $http({
      method: 'POST',
      url: 'http://ec2-34-238-240-46.compute-1.amazonaws.com:3000/api/orders/update/' + id,
      data: { "status": "loaded" }

    }).then(function successCallback(response) {

    }, function errorCallback(response) {

      alert("Error. Try Again");
    });

  }

  $scope.cancelOrder = function (id) {


    $http({
      method: 'POST',
      url: 'http://ec2-34-238-240-46.compute-1.amazonaws.com:3000/api/orders/update/' + id,
      data: { "status": "returned" }

    }).then(function successCallback(response) {

    }, function errorCallback(response) {

      console.log("Error. Try Again!");
    });

  }





}]);

// filter to group orders by ID

app.filter("groupBy", ["$parse", "$filter", function ($parse, $filter) {
  return function (array, groupByField) {
    var result = [];
    var prev_item = null;
    var groupKey = false;
    var filteredData = $filter('orderBy')(array, groupByField);
    for (var i = 0; i < filteredData.length; i++) {
      groupKey = false;
      if (prev_item !== null) {
        if (prev_item[groupByField] !== filteredData[i][groupByField]) {
          groupKey = true;
        }
      } else {
        groupKey = true;
      }
      if (groupKey) {
        filteredData[i]['group_by_key'] = true;
      } else {
        filteredData[i]['group_by_key'] = false;
      }
      result.push(filteredData[i]);
      prev_item = filteredData[i];
    }
    return result;
  }
}]);
