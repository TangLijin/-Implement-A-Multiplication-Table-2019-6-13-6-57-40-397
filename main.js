/*function add (left, right) {
    return left + right;
}*/


function ifStartLessEnd(numStart,numEnd){
	if(numStart <= numEnd)
		return true;
	else return false;
}

function ifOutRange(numStart,numEnd){
	if(numStart < 1 || numEnd > 1000)
		return false;
	else return true;
}

function createMultiplyTable(numStart,numEnd){
	var multiplyTable = "";
	for(let i = numStart; i <= numEnd; i++){
		for(let j = numStart; j <= i; j++){
			multiplyTable += i.toString() + "*" + j.toString() + "=" + i*j + '\t';
			if(i == j && j != numEnd)
				multiplyTable += '\n';
		}
	}
	return multiplyTable;
	
}

function getMultiplyTableByNum(numStart,numEnd){
	var output = "";
	if(!ifStartLessEnd){
		return "null";
	}else if(!ifOutRange){
		return "number out of range";
	}
	else return createMultiplyTable(numStart,numEnd);
}

//module.exports = add;
module.exports = {ifStartLessEnd,ifOutRange,createMultiplyTable,getMultiplyTableByNum};