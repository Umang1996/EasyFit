angular.module('fp_controllers', [])

  .controller('startController', function ($scope, $state) {

  })
  .controller('aboutUsController' , function ($scope, $state) {

  })
  .controller('settingsController' , function ($scope, $state,$cordovaDatePicker) {
    var options = {
      date: new Date(),
      mode: 'time',
      minDate: new Date() - 10000,
      allowOldDates: true,
      allowFutureDates: false,
      doneButtonLabel: 'DONE',
      doneButtonColor: '#F2F3F4',
      cancelButtonLabel: 'CANCEL',
      cancelButtonColor: '#000000',
      minuteInterval:'1'
    };
    $scope.pickTime = function () {

      $cordovaDatePicker.show(options).then(function(date){
        alert(date);
      });
    };

    $scope.settingsTime = new Date().getHours();
    $scope.settingsMins = new Date().getMinutes();

  })
  .controller('noviceController', function ($scope) {
    $scope.beginnerPictures = [{time: 3000, src: 'img/noob/1.png'},
      {time: 1000, src: 'img/noob/2.png'},
      {time: 2000, src: 'img/noob/3.png'},
      {time: 3000, src: 'img/noob/4.png'},
      {time: 3000, src: 'img/noob/5.png'},
      {time: 4000, src: 'img/noob/6.png'}
    ];
    $scope.id = 0;
    $scope.beginnerImg = $scope.beginnerPictures[$scope.id].src;


$scope.changeBeginnerImage=function (property) {
  $scope.id += property;
  $scope.beginnerImg = $scope.beginnerPictures[$scope.id].src;
  console.log($scope.id);
if ($scope.id==5) {
$scope.id=0-1
}



}



  })
  .controller('middleController', function ($scope) {
    $scope.MiddlePictures = [{time: 3000, src: 'img/middle/1.png'},
      {time: 1000, src: 'img/middle/2.png'},
      {time: 2000, src: 'img/middle/3.png'},
      {time: 3000, src: 'img/middle/4and8.png'},
      {time: 3000, src: 'img/middle/5.png'},
      {time: 4000, src: 'img/middle/6.png'},
      {time: 4000, src: 'img/middle/7.png'},
      {time: 4000, src: 'img/middle/9.png'},
      {time: 4000, src: 'img/middle/10.png'},
      {time: 4000, src: 'img/middle/11.png'},
      {time: 4000, src: 'img/middle/12.png'},
    ];
    $scope.id = 0;
    $scope.MidImg = $scope.MiddlePictures[$scope.id].src;


    $scope.changeMidImage=function (value) {
      $scope.id += value;
      $scope.MidImg = $scope.MiddlePictures[$scope.id].src;
      console.log($scope.id)
      if ($scope.id==10) {
        $scope.id=0-1
      }



    }

  })
  .controller('proController', function ($scope) {
    $scope.ProfessionalPictures = [{time: 3000, src: 'img/pro/1.png'},
      {time: 1000, src: 'img/pro/2.png'},
      {time: 2000, src: 'img/pro/3.png'},
      {time: 3000, src: 'img/pro/4and10.png'},
      {time: 3000, src: 'img/pro/5and11.png'},
      {time: 4000, src: 'img/pro/6.png'},
      {time: 4000, src: 'img/pro/7.png'},
      {time: 4000, src: 'img/pro/8.png'},
      {time: 4000, src: 'img/pro/9.png'},
      {time: 4000, src: 'img/pro/12.png'},
      {time: 4000, src: 'img/pro/13.png'},
      {time: 4000, src: 'img/pro/14.png'},
      {time: 4000, src: 'img/pro/15.png'},
      {time: 4000, src: 'img/pro/16.png'},
    ];
    $scope.id = 0;
    $scope.ProImg = $scope.ProfessionalPictures[$scope.id].src;


    $scope.changeProImage=function (meaning) {
      $scope.id += meaning;
      $scope.ProImg = $scope.ProfessionalPictures[$scope.id].src;
      console.log($scope.id)
      if ($scope.id==13) {
        $scope.id=0-1
      }



    }


  });
