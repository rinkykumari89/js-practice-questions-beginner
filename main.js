/* 
Exercise 01:
-------------
Write a JavaScript program to check two numbers and return true if one of the number is 100
or if the sum of the two numbers is 100.
*/

const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a + b) === 100 ;

//console.log(isEqualTo100(60, 40));      true
//console.log(isEqualTo100(100, 0));      true
//console.log(isEqualTo100(70, 20));      false


/* 
Exercise 02:
-------------
Write a JavaScript program to get the extension of a filename.
*/

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

//console.log(getFileExtension('background.jpg'));     => .jpg
//console.log(getFileExtension('index.html'));     =>.html


/* 
Exercise 03:
-------------
Write a JavaScript program to replace every character in a given string with 
the character following it int he alphabet.
*/

// Use of 'String.fromCharCode' & 'CharCodeAt'

const moveCharForward = (str) => str
        .split('')
        .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
        .join('');


//console.log(moveCharForward('abcd'));     => bcde
//console.log(moveCharForward('I am'));     => J!bn



/* 
Exercise 04:
-------------
Write a JavaScript program to get the current date.
Expected Output:
mm-dd-yyyy, mm/dd/yyyy, dd-mm-yyyy, dd/mm/yyyy
*/

const currentDate = (date = new Date) => {
    const days = date.getDate() ;
    const months = date.getMonth() + 1;     //As January is 0;
    const years = date.getFullYear();
    return `${days}/${months}/${years}`; 
}


//console.log(currentDate());

/* 
Exercise 05:
-------------
Write a JavaScript program to create a new string adding "New!" in front
of a given string.If the given string begins with "New!" already then
return the original string. 
*/

const addNew = (str) => str.indexOf('New!') === 0 ? str : `New! ${str}`;

//console.log(addNew('Bag'));
//console.log(addNew('New! Offers'));


/* 
Exercise 06:
-------------
Write a JavaScript program to create a new string from a given string taking
the first 3 characters and the last 3 characters of a string and adding them 
together. The string length must be 3 or more, if not, the original string is returned.
*/

const makeNewString = (str) => 
    str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

//console.log(makeNewString('abcj'));       => abcbcj
//console.log(makeNewString('ab'));           => ab
//console.log(makeNewString('Hellobhai'));       => Helhai


/* 
Exercise 07:
-------------
Write a JavaScript program to extract the first half of a string of even length.
*/

const firstHalf = (str) =>  str.slice(0, (str.length / 2));


//console.log(firstHalf('efijkl'));       =>efi
//console.log(firstHalf('fried'));        =>fi

/* 
Exercise 08:
-------------
Write a JavaScript program to concaenate two strings except their first character.
*/

const concatString = (str1, str2) => str1.slice(1) + str2.slice(1);

//console.log(concatString('abcd', 'mnop'));        =>bcdnop


/* 
Exercise 09:
-------------
Given two values, write a JavaScript program to find out which one is nearest to 100.
*/

const nearest100 = (a, b) => (100 - a) < (100 - b) ? a : b;

//console.log(nearest100(45, 98));
//console.log(nearest100(77, 75));

/* 
Exercise 10:
-------------
Given two values, write a JavaScript program to check a given string contains 2 to 4
occurences of a specified character.
*/

const countChars = (str, char) =>
        str.split('').filter(ch => ch === char).length;

const contains2To4 = (str, char) =>
        countChars(str, char) >= 2 && countChars(str, char) <= 4;

//console.log(contains2To4('oooh', 'o'));     => true;
//console.log(contains2To4('oh', 'o'));       => false;


/* 
Exercise 11:
-------------
Write a JavaScript program that prints numbers from 1 to 100.
* But for multiples of 3, print "Fizz" instead of the number
  and for the multiples of 5, print "Buzz".

* For numbers which are multiples of both 3 and 5, print "FizzBuzz".

*/

const FizzBuzz = () => {
        for( let i = 1; i <= 100; i++){
                if(i % 3 === 0 && i % 5 === 0){
                        console.log("FizzBuzz");
                } else if(i % 3 === 0){
                        console.log("Fizz");
                } else if(i % 5 === 0){
                        console.log("Buzz");
                }else{
                        console.log(i);
                }
        }
}

//console.log(FizzBuzz());

/* 
Exercise 12:
-------------
Write a JavaScript program to find the greatest common divisor of two numbers.
 example: 6, 4: 2
 example: 2, 3: 1

*/

const greatestCommonDivisor = (a, b) => {               //incomplete
        
                
        
}

//console.log(greatestCommonDivisor(6, 4));       incomplete

/* 
Exercise 13:
-------------
Write a JavaScript program to find the number of even digits in an array of integers.

*/

const numberOfEvenDigits = (arr) => 
        arr.filter(num => num % 2 === 0).length;

//console.log(numberOfEvenDigits([0, 3, 4, 5, 8, 12]));    


/* 
Exercise 14:
-------------
Write a JavaScript program to find the number of even values up to a given number.

*/

const numberOfEvenValue = (num) => {
        let temp = 0;
        for(let i = 1; i <= num; i++){
                if(i % 2 === 0){
                        temp++;
                }
        }
        return temp;
}


//console.log(numberOfEvenValue(10));


/* 
Exercise 15:
-------------
Write a JavaScript program to check whether the given array of integers is sorted
in ascending order.

*/

const isAscending = (arr) =>{
        for(let i = 0; i < arr.length; i++){
                if(arr[i + 1] < arr[i]) return false;
        }

        return true;
}

//console.log(isAscending([1, 2, 3, 4, 5, 6]));          => true
//console.log(isAscending([3, 2, 6, 4, 5]));             => false
//console.log(isAscending([1, 2, 3, 5, 6, 6]));          => true

/* 
Exercise 16:
-------------
Write a JavaScript program to get the largest even number from an array of integers.

*/

const largestEven = (arr) =>
        Math.max(...arr.filter(num => num % 2 === 0));          //Use of Spread operator


//console.log(largestEven([1, 6, 4, 8, 3]));


/* 
Exercise 17:
-------------
Write a JavaScript program to replace the first digit in a string
(should contains at least digits) with '$' character.

*/

const replaceFirstDigit = (str) =>
        str.replace(/\d/, '$');           //Use of Regex
                                          //if use '/\d/g' will replace all digit with $

//console.log(replaceFirstDigit('Abgjh35hf1j'));


/* 
Exercise 18:
-------------
Write a JavaScript program to find the given year is a leap year or not.

*/

const isLeapYear = (year) => year % 4 === 0;

//console.log(isLeapYear(2016));        => true
//console.log(isLeapYear(2015));        => false

/* 
Exercise 19:
-------------
Write a JavaScript program to compare two objects to determine if the first one
contains the same properties as the second one (which may also have additional properties).

*/

const objA = { a: 1, b: 2, c: 3};
const objB = { a: 1, b: 2, c: 3};
const objC = { a: 1, b: 3, d: 4};

const isObjectEqual = (a, b) =>
        //console.log(Object.keys(a));          => Array(3) ["a", "b", "c"]
        Object.keys(a).every(key => b[key]);    //Array.every();

//console.log(isObjectEqual(objA, objB));         => true
//console.log(isObjectEqual(objA, objC));         => false
//console.log(isObjectEqual(objB, objC));           => false


/* 
Exercise 20:
-------------
Write a JavaScript program to convert a comma-separated values(CSV)
string to a 2D array. A new line indicates a new row in the array.

example:
---------
abc, def, ghi
jkl, mno, pqr
stu, vwx, yza

*/

const str = `abc, def, ghi
jkl, mno, pqr
stu, vwx, yza`;

const parseCSV = (str) =>str
        .split("\n")            //Array(3) [ "abc, def, ghi", "jkl, mno, pqr", "stu, vwx, yza" ]
        .map(row => row.split(','));


//console.log(parseCSV(str));             =>  [ "abc", " def", " ghi" ]
                                           // [ "jkl", " mno", " pqr" ]
                                           // [ "stu", " vwx", " yza" ]



/* 
Exercise 21:
-------------
Write a JavaScript program to generate a random hexadecimal color code.

*/

const getRandomHexNumber = () =>
        Math.floor(Math.random() * 16).toString(16);       //toString(16) => Base 16 for Hexadecimal


const getRandomHexColor = () =>
        '#' + Array.from({length: 6})                      // #,,,,,
        .map(getRandomHexNumber)                          //#a,5,b,4,d,6
        .join('');                                       //#a5b4d6

//console.log(getRandomHexNumber());
//console.log(getRandomHexColor());


/* 
Exercise 22:
-------------
Write a JavaScript function that returns true if the provided predicate function returns 
ture for all elements in a collection, false otherwise.

*/

console.log([1, 2, 3, 4, 5].every(x => x > 0));         //true
console.log([1, 2, 3, 4, 5].every(x => x > 3));         //false