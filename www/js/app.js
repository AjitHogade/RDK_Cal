angular.module('ionicApp', ['ionic','ui.calendar', 'ngSanitize'])

 .filter("sanitize", ['$sce', function($sce) {
        return function(htmlCode){
            return $sce.trustAsHtml(htmlCode);
        }
}])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('search', {
      url: '/search',
      templateUrl: 'templates/search.html'
    })
    .state('settings', {
      url: '/settings',
      templateUrl: 'templates/settings.html'
    })
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.facts', {
      url: "/facts",
      views: {
        'home-tab': {
          templateUrl: "ftemplates/acts.html"
        }
      }
    })
    .state('tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "templates/facts2.html"
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "templates/about.html"
        }
      }
    })
    .state('tabs.calendar', {
      url: "/calendar",
      views: {
        'calendar-tab': {
          templateUrl: "calendar.html",
          controller: 'CalTabCtrl'
        }
      }
    })
    .state('tabs.navstack', {
      url: "/navstack",
      views: {
        'about-tab': {
          templateUrl: "templates/nav-stack.html"
        }
      }
    })
     .state('tabs.gallery', {
      url: "/gallery",
      views: {
        'gallery-tab': {
          templateUrl: "templates/gallery.html"
        }
      }
      })
     .state('tabs.info', {
        url: '/info',
        views: {
            'menuContent': {
                templateUrl: 'templates/info.html',
                controller: 'InfoCtrl'
            },
            'fabContent': {
                template: '<button id="fab-friends" class="button button-fab button-fab-top-left expanded button-energized-900 spin"><i class="icon ion-chatbubbles"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-friends').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })
   


   $urlRouterProvider.otherwise("/tab/home");

})
.controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
 
})
.controller('HomeTabCtrl', function($scope) {
})
.controller('InfoCtrl', function($scope, $stateParams, $timeout) {
   
})

.controller("ExampleController", function($scope) {
    $scope.images = []; 
    $scope.loadImages = function() {
        for(var i = 0; i < 100; i++) {
            $scope.images.push({id: i, src: "http://placehold.it/50x50"});
        }
    }
})
.controller('CalTabCtrl', function($scope ,$ionicModal, $ionicPopup,$sce) {
            $scope.eventSources = [];
            $scope.eventSources.push(events)
            $scope.calOptions = {
              editable: true,
              lang:'hi',
              height: ($(window).height()) - ($('#calendar').fullCalendar('option', 'height', 1000)),
              editable : true,
              header : {
              left: 'prev',
              center: 'title,today',
              right: 'next'
              },
              eventClick: function(calEvent, jsEvent, view){  
                $(this).css('border-color', 'red');
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
                 }

               };

        $ionicModal.fromTemplateUrl('event-modal.html', function(modal) {
        $scope.eventsModal = modal;
        },{
        scope: $scope,
        animation: 'slide-in-left'
        });  

 $scope.eventModal=function(selectedDate,eventTitle,description){
 //alert(eventTitle);
 $scope.modalData = { "selectedDate" : selectedDate,
                      "eventTitle" : eventTitle,
                      "description" : description
                    };
                    $scope.modalDat="<center style='color:red'>AJIT/Swati</center>"
                     $scope.deliberatelyTrustDangerousSnippet = function() {
               var k= $sce.trustAsHtml($scope.modalData);
               alert(k);
               return k;
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
  $scope.snippet =
               '<p style="color:blue">an html\n' +
               '<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
               'snippet</p>';
             $scope.deliberatelyTrustDangerousSnippet = function() {
               return $sce.trustAsHtml($scope.snippet);
             };
}); 


