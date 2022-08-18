//Object Literal
var Person = {firstName: "Karim", lastName: "Elagamy", Age: 22, Location: "Washington", Employed: true};
console.log(Person);

//function Constructor
function Guy(first = "default", last = "default", Age = 11, Location = "default"){
    this.firstName = first;
    this.lastName = last;
    this.Age = Age;
    this.Location = Location;
}

const Employee = new Guy("frstName", "lastName", 22);
console.log(Employee);

//Object.Create
const newEmployee = Object.create(Employee);
console.log(newEmployee);
newEmployee.firstName = "New First Name";
newEmployee.lastName = "New Last Name";
newEmployee.Age = 30;
newEmployee.Location = "DC";

//Classes
class Car {
    constructor(Make, Model){
        this.Make = Make;
        this.Model = Model;
    }
    carHorn(){
        console.log("BEEEEEP");
    }
}

const myCar = new Car("Ford", "Bronco");
console.log(myCar);
myCar.carHorn();

//Inheritance
class BMW extends Car {
    constructor(Make, Model, Engine, TurnSignals){
        super(Make, Model);
        this.Engine = Engine;
        this.TurnSignals = TurnSignals;
    }
}

const specificCar = new BMW("BMW", "5 Series", "V6", "None");
console.log(specificCar);
specificCar.carHorn();

//Document Object Model (DOM) this is a programming interface for web documents. It represents the page so that programmers
//can change the document structure, style, and contents using their JavaScript. The DOM represents the document as nodes and
//objects, that way programming languages can interact with the page. 
//DOM Functionality Demo
const BGbtn = document.getElementById("changeBG");
const resetForm = document.getElementById("resetButton");

BGbtn.addEventListener('click', () => {
    document.body.style.backgroundColor = "white";
});

resetForm.addEventListener('click', () => {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
});

function validateForm(){
    let x = document.forms["myForm"]["email"].value;
    let y = document.forms["myForm"]["password"].value;

    if (x == ""){
        alert("Email field must be filled out to continue");
        return false;
    }
    if (y == ""){
        alert("Password field must be filled out to continue");
        return false;
    }
    return true;
}

//Array Operations
const salariesArray = [100,200,300,400,500];

console.log(salariesArray);

salariesArray[2] = 250;

console.log(salariesArray);

salariesArray.push(600);

console.log(salariesArray);

salariesArray.pop();

console.log(salariesArray);

salariesArray.shift();

console.log(salariesArray);

salariesArray.push(600, 700, 800, 900, 1000);

console.log(salariesArray);

salariesArray.splice(2,1);

console.log(salariesArray);

salariesArray.splice(3,4);

console.log(salariesArray);

//Remove item from Array by Value
function spliceArrayByValue(val){
    for (var i = 0; i < salariesArray.length; i++){
        if (salariesArray[i] == val){
            salariesArray.splice(i, 1);
        };
    };
}

//Payload = The amount of data you have to send to your client to load a page or part of your website
//Local Storage
//Pros: Store data with no expiration date, storage limit is about 5 MB, data is never transferred to the server
//Cons: data is stored in plaintext so not secure by design, limited to string data, so data needs to be serialized, can
//only be read on client side.

localStorage.setItem('firstItem', 'Strawberry Pancake');
console.log("First Local Storage Item: " + localStorage.getItem('firstItem'));
localStorage.setItem('secondItem', 'Strawberry Waffle');
console.log("Second Local Storage Item: " + localStorage.getItem('secondItem'));
localStorage.removeItem('firstItem');
console.log("First Local Storage Item: " + localStorage.getItem('firstItem'));
localStorage.setItem('firstItem', 'Strawberry Pancake');
localStorage.clear();

//Session Storage
//Session storage is very smiliar to local storage it just saves data for the duration of the session (while that tab is open)
//once you close the tab or the browser, the session storage is cleared. Opening multiple tabs or windows with the same URL
//or on the same website will simply create a separate sessionStorage for each tab or window. 
//Storage limit on session storage is 5-10MB, data is never transferred to the server, and data can only be read on the client side. 

sessionStorage.setItem('firstItem', 'Strawberry Pancake');
console.log(sessionStorage.getItem('firstItem'));
sessionStorage.setItem('secondItem', 'Chocolate Chip Pancake');
console.log(sessionStorage.getItem('secondItem'));
sessionStorage.removeItem('firstItem');
console.log(sessionStorage.getItem('firstItem'));
sessionStorage.clear();
console.log(sessionStorage.getItem('firstItem'));
console.log(sessionStorage.getItem('secondItem'));

//Cookies
//Cookies store data that has to be sent back to the server with subsequent XHR requests. They have expiration dates and times
//and their expiration can vary depending on the type of expiration method that is used and the duration that is provided. 
//Cookies are primarily for server-side reading, unlike local storage and session storage where data is never sent to the server.
//They can also be read on the client side, but you can avoid that and make your cookie secure by setting the httpOnly flag to
//true. This will prevent client side access to your cookie. The size limit for the data in each cookie is 4 KB. 

document.cookie = "new_Sample_cookie=This_is_our_sample_Cookie; expires: Mon, 22 Aug 2022 12:00:00 UTC; path=/";
console.log(document.cookie);
document.cookie = "no_flag_cookie=This_is_our_no_flag_cookie";
console.log(document.cookie);

//no path = cookie is in folder http://localhost:5500/Cookie here
//path = /tracking/; cookie is in folder http://localhost:5500/tracking/Cookie here

//Get Current Date and Time
var currentDate = new Date();
console.log(currentDate);
//To add days to the current day and time
currentDate.setDate(currentDate.getDate() + 7);
console.log(currentDate);
//Once you have added the desired number of days, you can simply set a cookie using this variable by doing expires: " + dateVariable + "
//Simply just concatenate the date variable you have created into the string that is setting the new cookie
