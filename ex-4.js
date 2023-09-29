// Exercise #4 Grouping Function with Objects

// Declare ตัว Object ที่ชื่อ calculator
let calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
};

// Declare ตัว Variable ที่มีชื่อว่า resultAdd
let resultAdd;

//Assign ค่าของ resultAdd เป็นผลลัพธ์จากการ Execute ตัว Function add ที่อยู่ใน Object calculator โดยมี Parameter a เป็น 10 และ b เป็น 20
resultAdd = calculator.add(10, 20);

//แสดงผลค่าของ resultAdd ออกมาทางหน้าจอด้วย console.log()
console.log(resultAdd);

//Declare ตัว Variable ที่มีชื่อว่า resultDivide
let resultDivide;

//ค่าของ resultDivide เป็นผลลัพธ์จากการ Execute ตัว Function divide ที่อยู่ใน Object calculator โดยมี Parameter a เป็น 3000 และ b เป็น 10
resultDivide = calculator.divide(3000, 10);

//แสดงผลค่าของ resultDivide ออกมาทางหน้าจอด้วย console.log()
console.log(resultDivide);