angular.module("bageriApp", ["ngRoute"])

    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'homeController'
            })
            .when('/vision', {
                templateUrl: 'views/vision.html',
                controller: 'visionController'
            })
            .when('/collection', {
                templateUrl: 'views/collection.html',
                controller: 'collectionController'
            })
    })

    .controller('homeController', function ($scope) {
        $scope.logo = 'img/logo-header.png',
        $scope.title = 'nybakat bröd',
        $scope.text = 'Vi bakar för en hållbar framtid',
        $scope.buttonText = 'sortiment'
    })

    .controller('visionController', function($scope) {
        $scope.title = '100% surdegsbröd gjort på kärlek och respekt för råvaran',
        $scope.text = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut laboreet dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et earebum. Stet clita kasd gubergren.'
        $scope.imgLeft = 'img/wheat.png',
        $scope.imgRight = 'img/sliced_bread.png'
    })

    .controller('collectionController', function($scope) {
        
    })



    .directive('appheader', function () {
        return {
            template: '<nav class="navbar navbar-expand-lg navbar-light bg-light"><div class="container"> <a class="navbar-brand" href="#!"> <img src="img/logo-nav.png" alt=""> </a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button><div class="collapse navbar-collapse" id="navbarNavAltMarkup"><div class="navbar-nav ml-auto"> <a class="nav-item nav-link" href="#!">hem</a> <a class="nav-item nav-link" href="#!vision">vår vision</a> <a class="nav-item nav-link" href="#!collection">sortiment</a></div></div></div> </nav>'
        }
    })

    .directive('appfooter', function () {
        return {
            template: '<footer><div class="container">&copy; 2020 Karins Hembageri</div></footer>'
        }
    })

