var app = angular.module("nestedController",[]);
app.controller('ctrl1',ctrl1);
app.controller('ctrl2',ctrl2);


function ctrl1($scope){
	$scope.testProp = "From Ctrl 1";

}
function ctrl2($scope){
   
   $scope.testProp = "from ctrl  2";
}
