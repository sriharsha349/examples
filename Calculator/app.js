var app = angular.module("calculatorApp",[]);
app.controller("calculatorCtrl",calculatorCtrl);
function calculatorCtrl(){
	this.buttonClick = function(button){
		this.resultValue = 0;
		this.selectedOperation = button;
	}

	this.computeResult = function(){
	 	var number1 = parseFloat(this.input1);
	 	var number2 = parseFloat(this.input2);
	 	if(this.selectedOperation === '+'){
	 		this.resultValue = number1 + number2;
	 	}
	 	else if (this.selectedOperation === '-'){
	 		this.resultValue = number1 - number2;

	 	}
	 	else if (this.selectedOperation === '*'){
	 		this.resultValue = number1 * number2;
	 	}
	 	else if (this.selectedOperation === '*'){
	 		this.resultValue = number1 * number2;
	 	}
	 	else if (this.selectedOperation === '/'){
	 		this.resultValue = number1 / number2;
	 	}

	}

}
