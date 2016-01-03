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
      'menuContent': {
        templateUrl: 'templates/charitra.html'
      
    }}
    })
         
    .state('menu.tabs.karyakram', {
      url: '/karyakram',
      views: {
      'menuContent': {
        templateUrl: 'templates/karyakram.html',
        controller: 'ProgramCtrl'

      }
    }
    })

   .state('menu.tabs.granthbhandar', {
     url: '/granthbhandar',
     views: {
      'menuContent': {
        templateUrl: 'templates/granthbhandar.html'
      }
    }
    })

   .state('menu.tabs.dengi', {
    url: '/dengi',
    views: {
      'menuContent': {
        templateUrl: 'templates/dengi.html'
      }
    }
    })
   .state('menu.tabs.sampark', {
     url: '/sampark',
     views: {
      'menuContent': {
        templateUrl: 'templates/sampark.html'
      }
    }
    })

    .state('menu.tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
          
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
        'info-tab': {
            templateUrl: 'templates/info.html',
          
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

.controller('CalTabCtrl', function($scope ,$timeout,$ionicLoading,$ionicSideMenuDelegate,$ionicModal, $ionicPopup,$sce) 
{
      $ionicSideMenuDelegate.canDragContent(true);
      
            $scope.calOptions = {
              editable: true,
              lang:'hi',
              height: ($(window).height()) - ($('#calendar').fullCalendar('option', 'height', 1000)),
              header : {
              left: 'prev',
              center: 'title,today',
              right: 'next'
              },
        lazyFetching: true,
            minTime: 8,
             viewRender: function(view,element){
             // alert(view);
                  $("tr").hide();
                  $("tr").fadeIn(1000);
            },
               eventClick: function(calEvent, jsEvent, view){  
                var selectedDate=calEvent.start.format('Do MMMM YYYY,dddd');
                var eventTitle=calEvent.title;
                var description=calEvent.description;
                   $scope.safeApply(function()
                   {
                     $scope.eventModal(selectedDate,eventTitle,description)
                   });
                 },
events: "C:/wamp/www/RDK_Cal/www/js/controller.js",
                 eventRender: function (event, element) {
                                  // $scope.loading();
                 element.find('span.fc-title').html(element.find('span.fc-title').text()); 

        
                 },
loading:function(isLoading, view){
             if(isLoading == true){
              $ionicLoading.show({
              template: ' <ion-spinner icon="android"></ion-spinner>',
              animation: 'fade-in',
              showBackdrop: true,
           //   duration:400,
              maxWidth: 200,
              showDelay: 0
              });
             }
            if(isLoading == false){
             $ionicLoading.hide();
             }
  }
};
        $scope.eventSources = [$scope.eventSource,events];

        $ionicModal.fromTemplateUrl('event-modal.html', function(modal) {
        $scope.eventsModal = modal;
        },{
        scope: $scope,
        animation: 'slide-in-up'
        });  

 $scope.eventModal=function(selectedDate,eventTitle,description){
 $scope.modalData = { "selectedDate" : selectedDate,
                      "eventTitle" : eventTitle,
                      "description" : description
                    };
              // manages the html tags in side events array
               $scope.deliberatelyTrustDangerousSnippet = function(){
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
  if(phase == '$apply' || phase == '$digest'){
    if(fn && (typeof(fn) === 'function')) {
      fn();
    }
  }else{
    this.$apply(fn);
  }
 }; 
})

.controller('GalleryCtrl', function($scope,  $ionicSideMenuDelegate,$ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate) {
  $ionicSideMenuDelegate.canDragContent(false)
  $scope.alandi_saptah = [
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
    $scope.ashadi = [
    {
    src: 'img/gallery/ashadi/Image01.jpg'
  }, {
    src: 'img/gallery/ashadi/Image02.jpg'
  }, {
    src: 'img/gallery/ashadi/Image03.jpg'
  }, {
    src: 'img/gallery/ashadi/Image04.jpg'
  }, {
    src: 'img/gallery/ashadi/Image05.jpg'
  }, {
    src: 'img/gallery/ashadi/Image06.jpg'
  }, {
    src: 'img/gallery/ashadi/Image07.jpg'
  }, {
    src: 'img/gallery/ashadi/Image08.jpg'
  }, {
    src: 'img/gallery/ashadi/Image09.jpg'
  }, {
    src: 'img/gallery/ashadi/Image10.jpg'
  },
  {
    src: 'img/gallery/ashadi/Image11.jpg'
  }, {
    src: 'img/gallery/ashadi/Image12.jpg'
  }, {
    src: 'img/gallery/ashadi/Image13.jpg'
  }, {
    src: 'img/gallery/ashadi/Image14.jpg'
  }, {
    src: 'img/gallery/ashadi/Image15.jpg'
  }, {
    src: 'img/gallery/ashadi/Image16.jpg'
  }, {
    src: 'img/gallery/ashadi/Image17.jpg'
  }, {
    src: 'img/gallery/ashadi/Image18.jpg'
  }, {
    src: 'img/gallery/ashadi/Image19.jpg'
  }, {
    src: 'img/gallery/ashadi/Image20.jpg'
  }, 
  {
   src: 'img/gallery/ashadi/Image21.jpg'
  }, {
    src: 'img/gallery/ashadi/Image22.jpg'
  }, {
    src: 'img/gallery/ashadi/Image23.jpg'
  }, {
    src: 'img/gallery/ashadi/Image24.jpg'
  }, {
    src: 'img/gallery/ashadi/Image25.jpg'
  }, {
    src: 'img/gallery/ashadi/Image27.jpg'
  }, {
    src: 'img/gallery/ashadi/Image28.jpg'
  }
  ];
   $scope.jeur_saptah = [
{
    src: 'img/gallery/jeur_saptah/Image01.jpg'
  }, {
    src: 'img/gallery/jeur_saptah/Image02.jpg'
  }, {
    src: 'img/gallery/jeur_saptah/Image03.jpg'
  }, {
    src: 'img/gallery/jeur_saptah/Image04.jpg'
  }, {
    src: 'img/gallery/jeur_saptah/Image05.jpg'
  }, {
    src: 'img/gallery/jeur_saptah/Image06.jpg'
  }, {
    src: 'img/gallery/jeur_saptah/Image07.jpg'
  }, {
    src: 'img/gallery/jeur_saptah/Image08.jpg'
  }, {
    src: 'img/gallery/jeur_saptah/Image09.jpg'
  }, {
    src: 'img/gallery/jeur_saptah/Image10.jpg'
  }

  ];
   $scope.bhakt_visit = [
              {
    src: 'img/gallery/visitors/Image01.jpg'
  }, {
    src: 'img/gallery/visitors/Image02.jpg'
  }, {
    src: 'img/gallery/visitors/Image03.jpg'
  }, {
    src: 'img/gallery/visitors/Image04.jpg'
  }, {
    src: 'img/gallery/visitors/Image05.jpg'
  }, {
    src: 'img/gallery/visitors/Image06.jpg'
  }, {
    src: 'img/gallery/visitors/Image07.jpg'
  }, {
    src: 'img/gallery/visitors/Image08.jpg'
  }, {
    src: 'img/gallery/visitors/Image09.jpg'
  }, {
    src: 'img/gallery/visitors/Image10.jpg'
  }];

  $scope.zoomMin = 1;

  $scope.alandiSaptah = function(index) {
    $scope.activeSlide = index;
    $scope.showModal('templates/g_alandi_saptah.html');
  };
 $scope.ashadiSaptah = function(index) {
    $scope.activeSlide = index;
    $scope.showModal('templates/g_ashadi.html');
  };
  $scope.jeurSaptah = function(index) {
    $scope.activeSlide = index;
    $scope.showModal('templates/g_jeur.html');
  };

  $scope.bhaktVisit=function(index){
    $scope.activeSlide = index;
    $scope.showModal('templates/g_visitors.html');
  }

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
})

.controller('ProgramCtrl', function($scope,$ionicModal,$ionicPopup) {
   $scope.groups = [{
      title: "* साप्ताह *",
      contents: [
        {
          title: "ठाणे डौलेनगर सप्ताह",
          description :"प्रारंभ ०९/०१/२०१६ - काला १५/०१/२०१६",       
        },
        {
          title: "परकंदी सप्ताह",
          description :"प्रारंभ २३/०२/२०१६ - काला २७/०२/२०१६",         
        },
         {
          title: "वढाव सप्ताह",
          description :"प्रारंभ १९/०३/२०१६ - काला २५/०३/२०१६",         
        },
         {
          title: "हातनूर सप्ताह",
          description :"प्रारंभ ०८/०४/२०१६ - काला १२/०४/२०१६",         
        },
         {
          title: "जेजुरगाव सप्ताह",
          description :"प्रारंभ ०९/०४/२०१६ - काला १५/०४/२०१६",         
        },
         {
          title: "साधना सप्ताह",
          description :"प्रारंभ १३/०४/२०१६ - सांगता १५/०४/२०१६",         
        },
         {
          title: "तोंडले सप्ताह",
          description :"प्रारंभ १५/०४/२०१६ - काला २२/०४/२०१६",         
        },
         {
          title: "मिरगाव सप्ताह",
          description :"प्रारंभ १८/०४/२०१६ - काला २२/०४/२०१६",         
        },
        {
          title: "पाचोगनेवाडी सप्ताह",
          description :"प्रारंभ ३०/०४/२०१६ - काला ०६/०५/२०१६",         
        },
        {
          title: "कोळेवाडी सप्ताह",
          description :"प्रारंभ ०८/०५/२०१६ - काला १२/०५/२०१६",         
        },
         {
          title: "रेवनाळ सप्ताह",
          description :"प्रारंभ ०९/०५/२०१६ - काला १३/०५/२०१६",         
        },
         {
          title: "उकिर्डे  सप्ताह/पाटण दौरा आरंभ",
          description :"प्रारंभ १५/०५/२०१६ - काला २१/०५/२०१६",         
        }, {
          title: "दंडवाडी सप्ताह",
          description :"प्रारंभ २७/०५/२०१६ - काला ०२/०६/२०१६",         
        },
         {
          title: "मिरडे सप्ताह",
          description :"प्रारंभ २२/०८/२०१६ - काला २५/०८/२०१६",         
        },
         {
          title: "कामठेवाडी सप्ताह",
          description :"प्रारंभ २१/१०/२०१६ - काला २४/१०/२०१६",         
        },
         
      ]
    },
   
      {
      title: "* गुरुदेव दादांची शुद्ध शष्टी *",
      contents: [
        {
          title: "१५/०१/२०१६",
          description :"ठिकाण",       
        },
        {
          title: "१५/०१/२०१६",
          description :"ठिकाण",       
        },
         {
          title: "१५/०१/२०१६",
          description :"ठिकाण",       
        },
        {
          title: "१५/०१/२०१६",
          description :"ठिकाण",       
        },
        {
          title: "१५/०१/२०१६",
          description :"ठिकाण",       
        },
        {
          title: "१५/०१/२०१६",
          description :"ठिकाण",       
        },
        {
          title: "१५/०१/२०१६",
          description :"ठिकाण",       
        },
        {
          title: "१५/०१/२०१६",
          description :"ठिकाण",       
        },
        {
          title: "१५/०१/२०१६",
          description :"ठिकाण",       
        },
        {
          title: "१५/०१/२०१६",
          description :"ठिकाण",       
        },
        {
          title: "१५/०१/२०१६",
          description :"ठिकाण",       
        },
        {
          title: "१५/०१/२०१६",
          description :"ठिकाण",       
        },

      ]
    },
       {
      title: "* संकष्ट चतुर्थी *",
      contents: [
        {
          title: "१५/०१/२०१६",
          description :"चंद्रोदय",        
        },
        {
          title: "१५/०१/२०१६",
          description :"चंद्रोदय",        
        },
        {
          title: "१५/०१/२०१६",
          description :"चंद्रोदय",        
        },
        {
          title: "१५/०१/२०१६",
          description :"चंद्रोदय",        
        },
        {
          title: "१५/०१/२०१६",
          description :"चंद्रोदय",        
        },
        {
          title: "१५/०१/२०१६",
          description :"चंद्रोदय",        
        },
        {
          title: "१५/०१/२०१६",
          description :"चंद्रोदय",        
        },
        {
          title: "१५/०१/२०१६",
          description :"चंद्रोदय",        
        },
        {
          title: "१५/०१/२०१६",
          description :"चंद्रोदय",        
        },
        {
          title: "१५/०१/२०१६",
          description :"चंद्रोदय",        
        },
        {
          title: "१५/०१/२०१६",
          description :"चंद्रोदय",        
        },
        {
          title: "१५/०१/२०१६",
          description :"चंद्रोदय",        
        },
      ]
    }
  ];  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

});


