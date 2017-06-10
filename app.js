/**
 * Created by markuslyconhold on 23/05/17.
 */
/**
 * Classes are the same from java, object oriented programming.
 * Using public on arguments to the constructor is a shorthand that
 * allows us to automaticlly create properties with that name.
 */
var submitButton = document.getElementById("SubmitButton");
submitButton.onclick = function () {
    var theLink = document.getElementsByName("LinkTextArea")[0];
    console.log(theLink);
};
var Student = (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
/**
 * Here we have a function that takes in a variable name
 * person and connects it to the object Person
 * @param person
 */
function greeter(person) {
    return "Hi, " + person.firstName + " " + person.lastName;
}
var classUser = new Student("Murre", "muk");
var majorDiv = document.getElementById("majorDiv");
majorDiv.innerHTML = greeter(classUser);
//# sourceMappingURL=app.js.map