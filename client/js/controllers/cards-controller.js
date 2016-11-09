function cardsController($scope){
    $scope.cardsCount=10;
    $scope.cards = [
        {user_name: "Sally"},
        {user_name: "Bradley"}
    ]
    $scope.createCard = function(){
        $scope.cards.push(
            {user_name: $scope.userName},
            {card_number: $scope.cardNumber},
            {card_balance: $scope.cardBalance="0"}
        );
    }
    $scope.chargeCard = function(){
        // match user to card
        // set balance to balance-charge
    }
}



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
