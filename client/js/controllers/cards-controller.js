app.controller('cardsController', ['$scope', '$http',
    function($scope, $http){
        $scope.cardsCount=10;
        $scope.cards = [

        ]
        $scope.createCard = function(){

            var req = {
             method: 'POST',
             url: '/api/cards',
             data: { user_name: $scope.userName, card_number: $scope.cardNumber, card_balance: 0, card_limit: $scope.cardLimit }
            }

            $http(req).then(function(){
                console.log("success");
                $scope.cards.push(
                    req.data
                );
            },
            function(){
                console.log("oops, try again");
            });
        }
        $scope.chargeCard = function(){
            var user = $scope.userName;
            var charge = $scope.charge;

            var newCharge = {
                method: 'PATCH',
                url: 'api/cards',
                data: {user_name : user, charge: charge}
            }
            $http(newCharge).then(function(){
                console.log("success");
            },
            function(){
                console.log("oops, try again");
            });
            // set balance to balance-charge
        }
}]);






// app.controller('cardsController', ['$scope', '$resource', function($scope, $resource){
//     var Card = $resource('/api/cards');
//
//     Card.query(function(results){
//         $scope.cards = results;
//     });
//     $scope.cards = [
//         {user_name: 'Sally'},
//         {user_name: 'Bryan'}
//     ]
//
//     $scope.createCard = function(){
//         var card = new Card();
//         card.name = $scope.cardName;
//         card.$save(function(result) {
//             $scope.cards.push(result);
//             $scope.cardName = "";
//         });
//     }
// }]);
