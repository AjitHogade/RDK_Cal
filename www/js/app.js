angular.module('ionicApp', ['ionic','ui.calendar', 'ngSanitize'])

 .filter("sanitize", ['$sce', function($sce) {
        return function(htmlCode){
            return $sce.trustAsHtml(htmlCode);
        }
  }])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    
    .state('menu', {
      url: "",
      abstract: true,
      templateUrl: "templates/menu.html"
    })

    .state('menu.tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    
    .state('menu.tabs.charitra', {
      url: '/charitra',
      views: {
      'home-tab': {
        templateUrl: 'templates/charitra.html'
      }
    }
    })
         
    .state('menu.tabs.karyakram', {
      url: '/karyakram',
      views: {
      'home-tab': {
        templateUrl: 'templates/karyakram.html'
      }
    }
    })

   .state('menu.tabs.granthbhandar', {
     url: '/granthbhandar',
     views: {
      'home-tab': {
        templateUrl: 'templates/granthbhandar.html'
      }
    }
    })

   .state('menu.tabs.dengi', {
    url: '/dengi',
    views: {
      'home-tab': {
        templateUrl: 'templates/dengi.html'
      }
    }
    })
   .state('menu.tabs.sampark', {
     url: '/sampark',
     views: {
      'home-tab': {
        templateUrl: 'templates/sampark.html'
      }
    }
    })

    .state('menu.tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })

    .state('menu.tabs.calendar', {
      url: "/calendar",
      views: {
        'calendar-tab': {
          templateUrl: "templates/calendar.html",
          controller: 'CalTabCtrl'
        }
      }
    })
    .state('menu.tabs.gallery', {
      url: "/gallery",
      views: {
        'gallery-tab': {
          templateUrl: "templates/gallery.html",
          controller: 'GalleryCtrl'

        }
      }
    })
    .state('menu.tabs.info', {
      url: '/info',
      views: {
        'menuContent': {
            templateUrl: 'templates/info.html',
            controller: 'InfoCtrl'
          },     
        }
     })
   
   $urlRouterProvider.otherwise("/tab/home");

})
.controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
 
})
.controller('HomeTabCtrl', function($scope,$ionicSideMenuDelegate) {

})
.controller('InfoCtrl', function($scope, $stateParams, $timeout) {
         $ionicSideMenuDelegate.canDragContent(true);

})

.controller('CalTabCtrl', function($scope ,$ionicSideMenuDelegate,$ionicModal, $ionicPopup,$sce) {
      $ionicSideMenuDelegate.canDragContent(true);

            $scope.eventSources = [];
            $scope.eventSources.push(events)
            $scope.calOptions = {
              editable: true,
              lang:'hi',
              height: ($(window).height()) - ($('#calendar').fullCalendar('option', 'height', 1000)),
              header : {
              left: 'prev',
              center: 'title,today',
              right: 'next'
              },
              eventClick: function(calEvent, jsEvent, view){  
                var selectedDate=calEvent.start.format('Do MMMM YYYY,dddd');
                var eventTitle=calEvent.title;
                var description=calEvent.description;
                //alert(selectedDate);
                //alert('Event: ' +a );
                   $scope.safeApply(function()
                   {
                   // alert('Event: ' + calEvent.description);
                     $scope.eventModal(selectedDate,eventTitle,description)
                   });
                 },

                 eventRender: function (event, element) {
                 element.find('span.fc-title').html(element.find('span.fc-title').text());
                  if (event.imageurl) {
        eventElement.find("div.fc-content").prepend("<img src='" + event.imageurl +"' width='12' height='12'>");
    }
             eventElement.find("div.fc-event").parents('div..fc td').css('background-image','red')
                 },
                     dayClick: function(date, jsEvent, view) {

        alert('Clicked on: ' + date.format());

        alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

        alert('Current view: ' + view.name);

        // change the day's background color just for fun
        $(this).css('background-color', 'red');

    }

               };

        $ionicModal.fromTemplateUrl('event-modal.html', function(modal) {
        $scope.eventsModal = modal;
        },{
        scope: $scope,
        animation: 'slide-in-up'
        });  

 $scope.eventModal=function(selectedDate,eventTitle,description){
 //alert(eventTitle);
 $scope.modalData = { "selectedDate" : selectedDate,
                      "eventTitle" : eventTitle,
                      "description" : description
                    };
                     $scope.deliberatelyTrustDangerousSnippet = function() {
               var eventData= $sce.trustAsHtml($scope.modalData);
        
               return eventData;
             };
 $scope.eventsModal.show();
}
 $scope.closeModal=function() {
  $scope.eventsModal.hide();
}

$scope.safeApply = function(fn) {
  var phase = this.$root.$$phase;
  if(phase == '$apply' || phase == '$digest') {
    if(fn && (typeof(fn) === 'function')) {
      fn();
    }
  } else {
    this.$apply(fn);
  }
}; 
})
.controller('GalleryCtrl', function($scope,  $ionicSideMenuDelegate,$ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate) {

    $ionicSideMenuDelegate.canDragContent(false)
  $scope.allImages = [
  {
    src: 'img/gallery/alandi_saptah/Image01.jpg'
  }, {
    src: 'img/gallery/alandi_saptah/Image02.jpg'
  }, {
    src: 'img/gallery/alandi_saptah/Image03.jpg'
  }, {
    src: 'img/gallery/alandi_saptah/Image04.jpg'
  }, {
    src: 'img/gallery/alandi_saptah/Image05.jpg'
  }, {
    src: 'img/gallery/alandi_saptah/Image06.jpg'
  }, {
    src: 'img/gallery/alandi_saptah/Image07.jpg'
  }, {
    src: 'img/gallery/alandi_saptah/Image08.jpg'
  }, {
    src: 'img/gallery/alandi_saptah/Image09.jpg'
  }, {
    src: 'img/gallery/alandi_saptah/Image10.jpg'
  }
  ];
    $scope.newImages = [
  {
    src: 'img/pic1.jpg'
  }, {
    src: 'img/pic2.jpg'
  }, {
    src: 'img/pic3.jpg'
  }
  ];

  $scope.zoomMin = 1;

  $scope.showImages = function(index) {
    $scope.activeSlide = index;
    $scope.showModal('templates/gallery-zoomview.html');
  };
$scope.Images = function(index1) {
    $scope.activeSlide = index1;
    $scope.showModal('templates/gallery2.html');
  };

  $scope.showModal = function(templateUrl) {
    $ionicModal.fromTemplateUrl(templateUrl, {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
    $scope.modal.remove()
  };

  $scope.updateSlideStatus = function(slide) {
    var zoomFactor = $ionicScrollDelegate.$getByHandle('scrollHandle' + slide).getScrollPosition().zoom;
    if (zoomFactor == $scope.zoomMin) {
      $ionicSlideBoxDelegate.enableSlide(true);
    } else {
      $ionicSlideBoxDelegate.enableSlide(false);
    }
  };
});


