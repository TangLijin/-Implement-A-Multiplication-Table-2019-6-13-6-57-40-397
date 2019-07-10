const main = require('../main');


/*it ('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
});*/



const ifStartLessEnd = main.ifStartLessEnd;
it('should return true given 2,5 when call ifStartLessEnd',() => {
	expect(ifStartLessEnd(2, 5)).toBe(true);
});

it('should return false given 5,3 when call ifStartLessEnd',() => {
	expect(ifStartLessEnd(5, 3)).toBe(false);
});

it('should return true given 5,5 when call ifStartLessEnd',() => {
	expect(ifStartLessEnd(5, 5)).toBe(true);
});




const ifOutRange = main.ifOutRange;


it('should return true given 2,3 when call ifOutRange',() => {
	expect(ifOutRange(2, 3)).toBe(true);
});

it('should return false given -1,3 when call ifOutRange',() => {
	expect(ifOutRange(-1, 3)).toBe(false);
});

it('should return false given 1,1024 when call ifOutRange',() => {
	expect(ifOutRange(1, 1024)).toBe(false);
});

it('should return true given 3,3 when call ifOutRange',() => {
	expect(ifOutRange(3, 3)).toBe(true);
});



const createMultiplyTable = main.createMultiplyTable;


it('should return MultiplyTable given 3,5 when call createMultiplyTable',() => {
	expect(createMultiplyTable(3, 5)).toBe("3*3=9\t\n4*3=12\t4*4=16\t\n5*3=15\t5*4=20\t5*5=25\t");
});




const getMultiplyTableByNum = main.getMultiplyTableByNum;

it('should return MultiplyTable given 3, when call getMultiplyTableByNum',() => {
	expect(getMultiplyTableByNum(3, 3)).toBe("3*3=9\t");
});

