/*
Truthy: 
1. true
2. Any number(+ve, -ve) will be truthy other than 0
3. any string will be truthy without empty string
4. '0' , 'false' will be truthy
5. {all object} will be the truthy also {} empty object will be truthy
6. [all array] will be the truthy also [] empty array will be truthy


Falsy:
1. false
2. if variable is 0 then if will be the falsy
3. '' (empty string)
4. undefined is the falsy
5. null is the falsy
*/

const x = 4;
if(x){
    console.log('value of x is truthy');
} else {
    console.log('value of x is falsy');
}

// Optional 
// Check falsy
const y = null;
if(!y){
    console.log('value is falsy');
}

// check true
const z = 50;
if(!!z){
    console.log('value of z is truthy');
}