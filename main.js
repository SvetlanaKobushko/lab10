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

let sum1 = 0;
for (let i = 0; i < lab1.length; i++){
	sum1 += lab1[i];
}

let sum2 = 0;
for (let i = 0; i < lab2.length; i++){
	sum2 += lab2[i];
}

let sum3 = 0;
for (let i = 0; i < lab3.length; i++){
	sum3 += lab3[i];
}

let sum4 = 0;
for (let i = 0; i < lab4.length; i++){
	sum4 += lab4[i];
}

let sum5 = 0;
for (let i = 0; i < lab5.length; i++){
	sum5 += lab5[i];
}

let sum6 = 0;
for (let i = 0; i < lab6.length; i++){
	sum6 += lab6[i];
}

let sum8 = 0;
for (let i = 0; i < lab8.length; i++){
	sum8 += lab8[i];
}

console.log(sum1, sum2, sum3, sum4, sum5, sum6, sum8); //checking

let labs_array = [sum1, sum2, sum3, sum4, sum5, sum6, sum8]; //creating an array to use inside the function

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