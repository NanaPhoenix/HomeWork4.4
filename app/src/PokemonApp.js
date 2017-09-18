var pokemonApp = angular.module('PokemonApp', ['ngRoute', 'ngResource']);

angular.
module('PokemonApp')

.config(['$routeProvider',
    function config($routeProvider) {

        $routeProvider.
        when('/pokemons', {
            templateUrl: 'src/PokemonList/PokemonList.html',
            controller: 'PokemonListCtrl'
        }).
        when('/pokemons/:pokemonId', {
            templateUrl: 'src/PokemonDetail/PokemonDetail.html',
            controller: 'PokemonDetailCtrl'
        }).
        when('/edit/:pokemonId', {
            templateUrl: 'src/EditPokemon/EditPokemon.html',
            controller: 'EditPokemonCtrl'
        }).
        when('/create', {
            templateUrl: 'src/CreatePokemon/CreatePokemon.html',
            controller: 'CreatePokemonCtrl'
        }).
        when('/berries', {
            templateUrl: 'src/BerriesList/BerriesList.html',
            controller: 'BerriesListCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
])

.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.common = {
        "application-id": "213950DC-CFE4-A30C-FF9D-259534CD0600",
        "secret-key": "DDC704DD-4EF4-6E0E-FF8E-AF0E6462C300"
    };

}]);
