
var plantstate = false; // the plant state

//JQUERY
$(document).ready(function(){
    $('.b1').click(function(){
        $('.plant').css('display','block');
        plantstate = true
    })

    $('.b2').click(function(){
        $('.plant').css('display','none')
        plantstate = false;
    })


});

//angular 
(function(){

    angular.module('game',[])
    .controller('gameplay',game)

    function game($scope){
        $scope.plantcount = 0;
        $scope.message = '';
        $scope.get = function (){
            if (plantstate===false){
                $scope.message = 'plant it first!'
            }
            else if(plantstate===true){
                $scope.message = '';
                $scope.plantcount++;
            }
        }




    }






})()