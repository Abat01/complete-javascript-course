/*let js ='amazing';
if (js =='amazing') alert('Javascript is FUN!!');

      
40+8+23-10
console.log(40+8+23-10);

console.log("Jane");
console.log(23);
let firstName = "Abat";
console.log(firstName);
console.log(firstName);
console.log(firstName); 

// Variable Name Conventions*/

/*let myFirtJob = "Coder";
let myCurrentJob = "Engineer";
console.log(myCurrentJob);

true;
let JavascriptIsFun= true;
console.log(JavascriptIsFun); //here boolean but under the code output w/out LET that will be STRING

console.log(typeof true); //output BOOLEAN
console.log(typeof 'Abat Einstein'); //string
console.log(typeof 23);//integer
console.log(typeof JavascriptIsFun);

JavascriptIsFun='YES!'; //we dont use again LET variable ..Dynamic type
console.log(typeof JavascriptIsFun);

let year;
console.log(year); //undefined it will be on output it is EMPTY meaning
console.log(typeof year);

year=1991;
console.log(typeof year); //dynamic code and it will be NUMBER 

console.log(typeof null); //return object */ 

/*let age =25;
age=26;

const birthYear =1998;
 birthYear=1997; // it cannot change this is empty just age change 

 const ageAbat = 2576- 1998;
 const ageSarah =2037-2018;
 console.log(ageAbat *3, ageSarah/2, 2**3)
 //2**3 MEANS 2 TO THE POWER OF 3=2*2*2

 const firstName = 'Jonas';
 const lastName = 'Abat';
 console.log(firstName+lastName); //they added the both of them 
 console.log(firstName+ ' '+lastName); // on the console gives us just sperately like the putting SPACE

 let x= 10+5;
 x+=10; //x = x+10 it means that
 x *=4;//x=x*4 =100
 x++;//x=x+1 = 101
 x--; //x=x-1=99 
 console.log(x);  

 //comparison operators

 console.log (ageSarah> ageAbat); */


 //-------------------------------------Coding Challenge #1-------------------------


/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Aabat weights 78 kg and is 1.72 m tall. Einstein weights 92 kg and is 1.95 m tall.
TEST DATA 2: Aabat weights 65 kg and is 1.88 m tall. Einstein weights 85 kg and is 1.76 m tall.
*/
//--------------------------------problemSolving--------------------------------------
//const massAabat= 78;
//const heightAabat=1.72;
//const massEinstein=92;
//const heightEinstein=1.95;
/*const massAabat= 65;
const heightAabat=1.88;
const massEinstein=85;
const heightEinstein=1.76;

const BMIAabat= massAabat/heightAabat ** 2;
const BMIEinstein= massEinstein/(heightEinstein*heightAabat);
const markHigherBMI =BMIAabat> BMIEinstein ;
console.log(BMIAabat,BMIEinstein, markHigherBMI);*/


//------------------stringp1---------------

/* 
const firstName =' Abat';
const job = 'Engineer';
const birthYear= 1998;

const year = 2037;

const abat= "Im "+ firstName +', a ' + (year-birthYear) + ' years old ' + job + '!!';
console.log(abat);
 */

const age =20;
const isOldEnough= age>= 18;
if(age>=23){
      console.log('Abat can start driving license 🥹🥹');  //true 

}else{
      const yearsLeft = 20 -age;
      console.log('Abat too young. Wait another $ { yearsLeft} years :)');

}
// --------------------------The switch Statement--------------------
const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

////////////////////////////////////
// Statements and Expressions
5 + 9
1991
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);


// ----------------------------Coding Challenge #4-----------------------------------------

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 
*/
const bill =275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log('The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip }'); //less greater or equal 
/*const bill = 430; //
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);*/


//--------------------STRICT MODE/ GITHUB REPOSITORY AND FUNCTIONS, ARRAY--------------------



