/**
 * Created by markuslyconhold on 23/05/17.
 */



/**
 * Classes are the same from java, object oriented programming.
 * Using public on arguments to the constructor is a shorthand that
 * allows us to automaticlly create properties with that name.
 */
    var submitButton = document.getElementById("SubmitButton");

submitButton.onclick = function (){

    var theLink = <HTMLScriptElement>document.getElementsByName("LinkTextArea")[0];
    console.log(theLink);
};
class Student{
    fullName; string;
    constructor(public firstName, public lastName){
        this.fullName = firstName + " " + lastName;
    }
}

/**interfaces are used to address
 * description and fields for objects.
 * In Typescript, two types are ompatible if their
 * internal structure is compatible.
 */
interface Person {
    firstName: string;
    lastName: string;
}

/**
 * Here we have a function that takes in a variable name
 * person and connects it to the object Person
 * @param person
 */
function greeter(person: Person) {
    return "Hi, "+person.firstName + " "+ person.lastName;
}

var classUser = new Student("Murre","muk");

var majorDiv = document.getElementById("majorDiv");
majorDiv.innerHTML = greeter(classUser);