var app = angular.module("nestedController",[]);
app.controller('ctrl1',ctrl1);
app.controller('ctrl2',ctrl2);


function ctrl1(){
	this.testProp = "From Ctrl 1";

}
function ctrl2($scope){
   
   this.testProp = "from ctrl  2";
}
