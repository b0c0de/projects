//console.log (util.apiKey);
//console.log(content);

//let userMessage = "Hello World!!!";

//console.log("Hello"+"world");
//console.log(userMessage);
//console.log (10 === 10);
function createGreeting(userName, message = "Hello") {
  //console.log(userName);
  //console.log(message);
  return "Hi, I am " + userName + "." + message';
}

const greeting1 = createGreeting ("Max");
console.log(greeting1);

const greeting2 = createGreetng ("Manuel", "Hello, what's up?");
console.log(greeting2);
