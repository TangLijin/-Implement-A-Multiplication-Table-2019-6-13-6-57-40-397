const main = require('../main');


/*it ('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
});*/



const ifStartLessEnd = main.ifStartLessEnd;
it('should return true given 2,5 when call ifStartLessEnd',() => {
	expect(ifStartLessEnd(2, 5)).toBe(true);
});

it('hould return false given 5,3 when call ifStartLessEnd',() => {
	expect(ifStartLessEnd(5, 3)).toBe(false);
});

it('hould return false given 5,5 when call ifStartLessEnd',() => {
	expect(ifStartLessEnd(5, 5)).toBe(false);
});




const ifOutRange = main.ifOutRange;


it('should return true given 2,3 when call ifOutRange',() => {
	expect(ifOutRange(2, 3)).toBe(true);
});

it('hould return false given -1,3 when call ifOutRange',() => {
	expect(ifOutRange(-1, 3)).toBe(false);
});

it('hould return false given 1,1024 when call ifOutRange',() => {
	expect(ifOutRange(1, 1024)).toBe(false);
});

it('hould return true given 3,3 when call ifOutRange',() => {
	expect(ifOutRange(3, 3)).toBe(true);
});


const createMultiplyTable = mian.createMultiplyTable;


it('should return MultiplyTable given 3,5 when call createMultiplyTable',() => {
	expect(createMultiplyTable(3, 5)).toBe("3*3=9\t\n3*4=12\t4*4=16\t\n3*5=15\t4*5=20\t5*5=25\t\n");
});



const getMultiplyTableByNum = main.getMultiplyTableByNum;
it('should return MultiplyTable given 3,5 when call getMultiplyTableByNum',() => {
	expect(cgetMultiplyTableByNum(3, 5)).toBe("3*3=9\t\n3*4=12\t4*4=16\t\n3*5=15\t4*5=20\t5*5=25\t\n");
});


