var fullName = prompt("What is your full name ");
var typeId = prompt("What is your document type ");
var numId = prompt("What is your Id NUmber ");
var gender = prompt("What is your Biological gender ");
var height = prompt("What is your height ");
var live = prompt("Is it true that you live in Cartago? (F=False / T = True");
console.log("Hello, my name is " + fullName);
console.log("My Id Type is " + typeId);
console.log("number is " + numId);
console.log("Biological gender:" + gender);
console.log("My height is: " + height + " Mts");
if (live == "F" || live == "f")
{
  console.log("You live in Carthage ... " + " False");
}
if (live == "T" || live == "t")
{
  console.log("You live in Carthage ... " + " true");
}

