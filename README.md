##Quick AngularJS Start!

1. Clone Repository

2. Inside app directory run `npm install http-server` to set up a quick node server

3. run `http-server` to start the server on `localhost:8080`

####index.html

1. rename your app if you wish LINE 28 `ng-app"myApp"`
  - remember to change this mame in thwe module and controller.

2. Bootstrap Navbar included, edit as desired.

3. Angular, ui-router, jquery and Bootsrap CDN's included if you wish to install/download them google is your bestie!

3. create a directory `js` and inside touch two files `app.js` and `MainController.js`
  - or simply create your own directories and js files.

####Create a `templates` directory to hold your views/states
- from the sample app here I have links to `home.html`, `about.html` & `more.html`


####Adding your angular module and routes with `$stateProvider`

the following code can be added inside your **`app.js`**:

```
(function() {
  'use strict';

  angular.module('myApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('/home', {
          url: '/home',
          templateUrl: 'templates/home.html'
        })

      .state('/about', {
        url: '/about',
        templateUrl: 'templates/about.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'

      })

      .state('/more', {
        url: '/more',
        templateUrl: 'templates/more.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'

      });

      $urlRouterProvider.otherwise('/home');

    }]);

})();//IIFE END

``` 

####MainController.js Set up:

```
(function() {
  'use strict';

  angular.module('myApp')
    .controller('MainCtrl',
      function() {
        // console.log("Main Controller On");

      }); //.controller close
})(); //IIFE END

```

This should have you up an running with the most basic set up for UI-Router and AngularJs


