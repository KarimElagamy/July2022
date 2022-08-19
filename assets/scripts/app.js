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

//XHR = XMLHttpRequest
//What is an API? An API is an Application Programming Interface - Its a backend application that front end or web applications
//can use to fetch data or interact with a database.
//What is XML? XML is the previous version of data format that APIs used to return, nowadays we use JSON data format.
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
let id = 3;
oReq.open("GET", "https://jsonplaceholder.typicode.com/posts/" + id);
oReq.send();
function reqListener(){
    console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("POST", "https://jsonplaceholder.typicode.com/posts");
oReq.send("title=Example POST Request&body=Antra.com&userId=1");
function reqListener(){
    console.log(this.responseText);
}

//Put request and Patch request will be done the same way as the POST request because they are for updating so you need a 
//request body, which we define in the oReq.send(); But Delete request will be done the same way as the GET request because
//you only need to send the ID, you don't need to send the details of the resource or post. 


//Fetch API
//Getting a Resource
fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((json) => console.log(json));

console.log(fetch("https://jsonplaceholder.typicode.com/posts")); //fetch API is a promise made specifically for getting data from APIs

//Creating a Resource
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
    body: JSON.stringify({
        title: 'Next Example Post Request',
        body: 'Antra.com',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
})
.then((response) => response.json())
.then((json) => console.log(json));

//Updating a Resource
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'Next Example PUT Request',
        body: 'Antra.com',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
})
.then((response) => response.json())
.then((json) => console.log(json));

//Partially Update a Resource
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: 'PATCH',
    body: JSON.stringify({
        title: 'Next Example PATCH Request',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
})
.then((response) => response.json())
.then((json) => console.log(json));

//Deleting a Resource
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: 'DELETE',
});
// .then((response) => response.json())   Don't need to console log as it just returns empty object
// .then((json) => console.log(json));


//Promises: a callback function to initialize this process that takes in two arguments: resolve and reject
//resolve: the resource was loaded successfully/promise was executed successfully 
//reject: means that the resource failed to load/promise failed to execute properly
//both of these (resolve and reject) return something, so the order of resolve or reject matters.
//Callback: is essentially a function that is passed in as a parameter.

//Callbacks and Closures are used frequently in JavaScript. Callbacks are functions that are passed into another function 
//as an argument. Closures are functions that are nested in other functions, and they are often used to avoid clashing
//scopes with other parts of a JavaScript program.

function promiseDemo(){
    let p = new Promise(function(resolve, reject){
        let dept={
            id:1,
            name:"Full Stack"
        }
        resolve(dept);
        reject("The service is currently unavailable");
    })
    p.then(function(d){
        console.log(d);
    }).catch(function(e){
        console.log(e);
    });
}

promiseDemo();

let p2 = new Promise((resolve, reject) => {
    resolve(2);
})
p2.then(function(d){
    console.log(d);
    return d*2;
}).then(function(d1){
    console.log(d1);
    return d1*2;
}).then(function(d2){
    console.log(d2);
    return d2*2;
}).then(function(d3){
    console.log(d3);
});

//Regular Expressions
//Regular Expressions are basically a concept in programming which allows you to validate your data or check the format
//of your data according to a specific pattern. 
function validateEmail(){
    var inputText = document.getElementById("email").value;
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.match(mailFormat)){
        alert("Valid Email Address!");
        document.myForm.email.focus();
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        document.myForm.email.focus();
        return false;
    }
}