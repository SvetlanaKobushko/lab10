//Step 1. Data collection

let lab1 = [5, 5, 0, 5, 5, 10, 10];
let lab2 = [5, 5, 5, 5, 5, 5, 10];
let lab3 = [5, 9, 10, 15];
let lab4 = [10, 5, 5, 5, 5, 5, 5];
let lab5 = [10, 10, 10, 10];
let lab6 = [5, 5, 10, 5, 5, 10];
let lab8 = [5, 10, 10, 10, 5];
let quiz1 = 36;

//Step 2. Calculating the sums of each lab scores using loops

function sum(array) {
	let S = 0;
	for (let i = 0; i<array.length; i++){
		S=S+array[i];
	}
	return S;
}

let S1 = sum(lab1);
let S2 = sum(lab2);
let S3 = sum(lab3);
let S4 = sum(lab4);
let S5 = sum(lab5);
let S6 = sum(lab6);
let S8 = sum(lab8);

console.log(S1, S2, S3, S4, S5, S6, S8);


let labs_array = [S1, S2, S3, S4, S5, S6, S8]; //creating an array to use inside the function


//Step 3. Calculating the sum of the sums of lab scores
var labs_sums = function (labs_array){
	var sums = 0;
	for (var i=0; i < labs_array.length; i++) {
		sums += labs_array[i];
	}
	return sums;
}

var labs_sums_var = labs_sums(labs_array); //creating a variable for further steps
console.log(labs_sums_var);//checking

let total_score = 0.6*(labs_sums_var/280) + 0.4*(quiz1/40);//calculating the total score

//Step4. returning the object with all information through function

function main(){
	var obj = {
		lab1 : [5, 5, 0, 5, 5, 10, 10],
        lab2 : [5, 5, 5, 5, 5, 5, 10],
        lab3 : [5, 9, 10, 15],
        lab4 : [10, 5, 5, 5, 5, 5, 5],
        lab5 : [10, 10, 10, 10],
        lab6 : [5, 5, 10, 5, 5, 10],
        lab8 : [5, 10, 10, 10, 5],
        quiz1 : 36,
        labs_sums: labs_sums_var,
        total_score: total_score,
	};

	return obj;
}


var results = main(); //creating a variable for convenience
console.log(results); //output