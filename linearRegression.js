//Linear Regression in Machine Learning

//Independent variable X which stands for the number of weeks
let x = [1,2,3,4,5]; 

//Dependent variable y which stands for the sales 
let y = [1.2, 1.8, 2.6, 3.2, 3.8];

//to calculate mean of X

let totalX = 0;
for(let i = 0; i < x.length; i++){
    totalX += x[i];
}
let mX = totalX / x.length;
console.log(mX);

//to calculate mean of Y

let totalY = 0;
for(let i = 0; i < y.length; i++){
    totalY += y[i];
}
let mY = (totalY / y.length).toFixed(2);
console.log(mY);

//to find deviation of X

let dX = [];
for(let i = 0; i < x.length; i++){
    let deviation = x[i] - mX;
    dX.push(deviation);
}
console.log(dX);

//to find deviation of Y

let dY = [];
for(let i = 0; i < y.length; i++){
    let deviation = (y[i] - mY).toFixed(2);
    dY.push(deviation);
}
console.log(dY);

//to find the sum of product
let p = 0;
for(let i = 0; i < x.length; i++){
    let product = dX[i] * dY[i];
     p += product;
}
console.log(p);

//Sum of sqrt 
let sumSqrt = 0;
for(let i = 0; i < dX.length; i++){
    let sqrt = dX[i] * dX[i];
    sumSqrt += sqrt;
}
console.log(sumSqrt);

// Value of B1 or m
let  m = (p / sumSqrt).toFixed(2);
console.log(m)
//Value of B2 or b 
let b = mY - (m * mX).toFixed(2);
console.log(b);

function expectedVal(x){
let y = ((m * x) + b).toFixed(2);
console.log(y)
}

expectedVal(7);
