function add(a,b){
	return parseFloat(a) + parseFloat(b);
}

function subtract(a,b){
	return parseFloat(a) - parseFloat(b);
}

function tax(subtotal, tax){
	var total = parseFloat(subtotal.replace("$",""));
	var parsedTax = parseFloat(tax.replace("%", ""));

	var newTotal = total*(parsedTax/100)+total;
	return "$"+newTotal.toFixed(2);
}

function stringLength(theString){
	if(theString.length < 5){
		return "short string";
	} else if(theString.length >= 5 && theString.length <= 10 ){
		return "medium string";
	} else{
		return "long string";
	}

}

function startsWith(theString){
	switch(theString.charAt(0).toLowerCase()){
		case "a": return "starts with A";
		break;
		case "b": return "starts with B";
		break;
		case "c": return "starts with C";
		break;
		case "d": return "starts with D";
		break;
		case "e": return "starts with E";
		break;
		default: return "starts with something else";
		break;
	}
}

function stringRepeat(theString, integer){
	var stringsArray = [];
	while(integer > 0){
		stringsArray.push(theString);
		integer--;
	}
	return stringsArray.join(" ");
}

function nSum(integer){
	var total = 0;
	for(var i = 1; i <= integer; i++){
		total+=i;
	}
	return total;
}

function join(values,separator){

	return values.join(separator);
}

function countLetters(a){
    var word1 = a.split("");
    var counter = 0;
    var myObject = {};
    var myString = [];
    for(var i = 0; i < word1.length; i++){
        
        for(var j = 0; j < word1.length; j++){
            if(word1[i] === word1[j]){
                counter++;
            }
        }
        myObject[word1[i]] = counter;
        counter = 0;
    }

    for(var letter in myObject){
    	myString.push(letter+": "+myObject[letter]);
    }
    return myString.join(", ");
}

function maze(){
	var ultimateMaze = [[true,true,"start",false,false,false,true,true,true],
						[true,true,false,true,true,false,true,true,true],
						[true,true,false,true,true,false,true,true,true],
						[true,true,false,false,false,false,false,false,false],
						[true,true,true,true,true,false,true,true,false],
						[false,false,false,false,false,false,true,true,false],
						[false,true,true,true,true,true,true,false,false],
						[false,true,true,true,true,true,true,false,true],
						[false,false, "end" ,true,true,true,false,false,true]];
	return ultimateMaze;
}
function table(myArrayOfObject, year, make, model, color){
	
	var obj = [];
	var filterArray = [];

	if(year !== ""){
		filterArray.push(year);	
	}
	if(make !== ""){
		filterArray.push(make);	
	}
	if(model !== ""){
		filterArray.push(model);	
	}
	if(color !== ""){
		filterArray.push(color);	
	}

	for(var i = 0; i < myArrayOfObject.length; i++){
		var counter = 0;
		for(var props in myArrayOfObject[i]){
			for(var j = 0; j < filterArray.length; j++){
				if(myArrayOfObject[i][props].toString().toLowerCase() == filterArray[j].toLowerCase()){
					counter++;
				}
			}
		}
		if(counter === filterArray.length){
			obj.push(myArrayOfObject[i]);
		}
	}
	
	return obj;

}