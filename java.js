let Names= " \"Allen\" muteteri \v and"
let age =  80;
let all= Names + age ;
console.log("this person is called" + Names +" and her age are " + age);
let num= String(30)
console.log(num,typeof num)

let a= true;
let b=false;
let c=a+b;
console.log(c);

let num1=4
let  powering = num1 **3
console.log(powering)

//condition

let number=30;
if (number%2!=0)
{
    console.log(" it is odd number")
}
else{
    console.log("it is even rwose");
}

//ternary

let ter=3;
let answer = ter%2===0 ?"even":"odd";
console.log(answer);

//switch
let mounth=10;
switch(mounth)
{
    case 1:
    console.log("janualy");
    break;
    
    case 2:
        console.log("Feb");
        break;

        case 3:
        console.log("mrch");
        break;
        case 4:
        console.log("april");
        break;
        case 5:
        console.log("may");
        break;
        case 6:
        console.log("june");
        break;
        case 7:
        console.log("july");
        break;
        case 8:
        console.log("August");
        break;
        case 9:
        console.log("sep");
        break;

        default:
            console.log ("invalid mounth");
}
///Template literal in

let first=3;
let sec=80;
let mult=first*sec;
console.log(`the multiprication of  ${first} and ${sec} is ${mult}` );

//LOOPS= WHILE LOOP, initialization,condtion,post-incrementation

let i=10;
while(i<=20)
{
    console.log("this is jacky");
    i++;
}
//do while loop
let r=10;
do 
{	
console.log("jaja",r)
r--;
}
while (r=0) {
    
}
// for lop
for(let m=10; m>=3;m--)
{
console.log("for",m);
}
//nested for loop
for(let  t =0; t<=5;  t++)
{
console.log("please talk to jacky",t);
for(let j=0; j<5;  j++)
console.log("mutoni jacky",j);
}

for(let b=1; b<=100; b++)
{
    console.log(b)
}
//Objects it is key value pair
let object={
    Name:"mutoni",
    secName:"Jacky",
    Prefer:"JS",
    exprience:8,
}
console.log(object.Name,object.secName); // when we dont want whole object we just use dot. to call the property we want
console.log(object['Prefer'],object['exprience'])// when we dont want whole object we can also use squere [] to call the property we want
console.log(object);

let complexobject= { // this is the complex object where we next object in another object
    names:'papa',
    othernames:'mama',
    location:{
        adress:'karama',
        street:'st 207'
    }

}
delete complexobject.location.adress
console.log(complexobject.location.street);

let me={
    fNames:"mutoni",
    lName:"Jacky",
    Parents:{
        father:"David",
        Mother:"Jovia",
        siblings:6

    }
}
//console.log(me.Parents) when we want all object
for(let key in me['Parents'])
{
  //  console.log(key);keys only
 // console.log(key,me[key]); keys with values
 console.log(key,me.Parents[key]) // For printing object in object with their values but we start from parent object

}

function greatings() // this is how we difine function
{
    console.log("Hello Lovery Jacky");
}
greatings()// this is how we call function but we call it when we are out of it

function oky(names)
{
    return `hello ${names}`
}
let names="mutoto mutoni"
console.log(oky(names)); 


let add = function(num1,num2)// Anonyms function
{
    return num1+num2
}
console.log(add(100,10));

let calcu = function(nu1,nu2)//aninmus function befor
{
    return nu1-nu2
}
console.log (calcu(10,2));

let cali=(nuu1,nuu2)=>nuu1*nuu2 //this is arrow function for minimizing lines of numbers again we dont include{} 
                                 //after creating funct if it is single statement
console.log(cali(2,2));


let siblings={ // methode is simply a function that is associated with an object

    one:"jacky",
    two:"tama",
    three:"murungi",

    namees: function ()
 {
        console.log(siblings.three)
}
}
siblings.namees();
//this helps us talk about the object we're dealing with without needing to repeat its name all the time.
let HP ={ // we are going to look about *this* keyword it represent current object if you want to access any of the property of an object
    ram:20,
    processor:2,
    keybord:"qwerty",

    behaviour: function()
    {
console.log(this.ram)
    }
}

let Dell ={
    ram:40,
    processor:1,
    keybord:"Azerty",

    behaviour: function()
    {
        console.log(this.ram);
    }
}

Dell.behaviour();

// A constructor function is declared like any other function but is intended to be used with
// the new keyword to create new instances of objects.
//it help s to creating multiple similar objects with the same properties and methods.
// it is good to start constructor name with capital letter to differ it from normal function


function Clothes(dress,pants,crops,t_shirts){
    this.dress=dress;
    this.pants=pants;
    this.crops=crops;
    this.t_shirts=t_shirts;
}
let client1 = new Clothes('green dress','yello pants','blue crop','long t-shirt');
let client2 = new Clothes(' orange dress','white pants','blue crop','long t-shirt');
client1.dress='red';
delete client1.pants;
console.log(client1)

// an array is a special type of object that allows you to store multiple values in a single variable.
// These values can be of any data type, including numbers, strings, objects, or even other arrays

let numbers=[1,2,3,4,5]
numbers.push(6);//adding item in array
numbers[5]=1;// another way of adding in array
console.log(numbers);
// mixing datatypes in array
let mixi =["String",1, location={path:"kigali",anotherpath:"c"}, function(){
    console.log("mixed");
}];
mixi[3]();

// Array methodes in java script

//.Push this methode it will add the element at the end(1)
// .pop the last element will be removed()
// .Shift it will remove the first index
// .unshift it will add new value at the beggining
// .splice this is used when you want to remove items in between in this you mention the index 
//it will start with and also tn number of items you want to remove (from index1,5 this means the number of will be removed)
// Also this splice can be used to add other items but in place where it removed the i tems(2,1, 11)

let metho=[1,2,3,4,5,6]

//metho.push(1);
//metho.pop ();
//metho.shift();
//metho.unshift(4);
metho.splice(0,3,11,0,1,2);
console.log(metho);
//array destructuring helps you organize and manage items from an array more efficiently it is to unpack items from array to assign to the variable.
// It's like sorting items into separate bags so that you can easily find and use them later on.

let cola=['red','blue','white','yellow','orange','violate'];
let=[r,b,w,y,...rainbow]=cola; //... means the rest belongs to that valiable
console.log(b,w);

// we can also swap values
let m='mutoni';
let j='jacky';
[m,j]=[j,m];
console.log(m,j);

// in the destructuring we can also make string into array format by using .split
let mynames="my names are Jacky MUTONI".split (" ");
//console.log( mynames);
let [o,v,t,...d]=mynames;
console.log(o,v,t,d)

// forEach Methode in js for this methode will give you one by one value i mean it will give you one value at time 
// forEach methode we include function inside foreach it's function on its own so we will include another function that will hold those items

let foeach =[30,40,50,60,20]
foeach.forEach((item)=>
{
    console.log(item-2);

})
//we also have other js methode which is .filter,.map,.reduce
//.filter it will check condition if it is true it will send that velue a head example even numbers etc
//.map it is used print out the operation ex num*2 
//yes we can immediatelly do it in console but when it is complex operation that is when we will use .map
// also we have another called .reduce this will give you only one value instead list of values like 
//foreach ex we want to add all values in array we will map it and then we reduce it to get single number

let js =[2,3,4,5]
let result=js.filter(i=> i%2===0) 
//.forEach(i =>
.map(i => i*2)
.reduce((x,y) => x+y)
{
console.log(result)
}

// Set is a collection but then all values will be unique and it not use index values So basically set is class we also use constractor

let sets = new Set ()
sets.add(2)
sets.add(2)
sets.add("mutoni")
sets.add("jacky")
sets.add("jaja")
//sets.forEach(sets =>
{
console.log(sets.has("jja"));
}

// Map is you can have values but every value need to have a key it can be string,object basically
// it is key and value pair but when we are adding values we use .set instead of .add

let maps = new Map();
maps.set("tech1","javascript");
maps.set("tech2","java");
maps.set("tech3","python");
//console .log(maps.keys())
//console.log(maps.get("tech1"))
for(let [k,o ]of maps) // we use loop to toget all keys with their values 
{
    console.log(k," : ", o)
}




