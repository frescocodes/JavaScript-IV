// CODE here for your Lambda Classes
​
/*
- We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
* Lambda personnel can be broken down into three different types of people.
    - Instructors - extensions of Person
    - Students - extensions of Person
    - Project Managers - extensions of Instructors
IMPORTANT - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:
*/
​
// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

​class Person {
    constructor(person_attrs){
        this.name = person_attrs.name;
        this.age = person_attrs.age;
        this.location = person_attrs.location;
    }
    speak() { return `Hello, my name is ${this.name}, I am from ${this.location}. `}
}
​
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
​
class Instructor extends Person {
    constructor(​i_attrs){
        super(i_attrs);
        this.specialty = i_attrs.specialty;
        this.favLanguage = i_attrs.favLanguage;
        this.catchPhrase = i_attrs.catchPhrase;
    }
    demo(subject){ return `Today we are learning about {subject}.`}
    grade(){ return `${student.name} receives a perfect score on {subject}`}
}

​
// * ProjectManagers are extensions of Instructors
// * Project Manger has the following unique props:
// * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
​
class ProMgr extends Instructor {
    constructor(promgr_attrs){
        super(promgr_attrs);
        this.gradClassName = promgr_attrs.gradClassName;
        this.favInstructor = promgr_attrs.favInstructor;
    }
    standUp(channel){ return `${this.name} announces to ${channel}, @channel standy times!`}
    debugsCode(student, subject){ return `${this.name} debugs ${student.name}'s code on ${subject}` }
}
​

// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
​
class Student extends Person {
    constructor(student_attrs){
        super(student_attrs);
        this.previousBackground = student_attrs.previousBackground;
        this.className = student_attrs.className;
        this.favSubjects = student_attrs.favSubjects;
    }
    listsSubjects(){ return `${this.name}'s favorite subjects are {this.favSubjects}.` }
    PRAssignment(subject){ return `${this.name} has submitted a PR for ${subject}` }
    sprintChallenge(){ }
}


/*
Stretch Problem
* Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
* Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
* Add a graduate method to a student.
    - This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
    - If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/