class Person {
    constructor(person_attrs){
        this.name = person_attrs.name;
        this.age = person_attrs.age;
        this.location = person_attrs.location;
    }
    speak() { return `Hello, my name is ${this.name}, I am from ${this.location}. `}
}
class Instructor extends Person {
    constructor(i_attrs){
        super(i_attrs);
        this.specialty = i_attrs.specialty;
        this.favLanguage = i_attrs.favLanguage;
        this.catchPhrase = i_attrs.catchPhrase;
    }
    demo(subject){ return `Today we are learning about ${subject}.`}
    grade(student, subject){ return `${student.name} receives a perfect score on ${subject}`}
}
class ProMgr extends Instructor {
    constructor(promgr_attrs){
        super(promgr_attrs);
        this.gradClassName = promgr_attrs.gradClassName;
        this.favInstructor = promgr_attrs.favInstructor;
    }
    standUp(channel){ return `${this.name} announces to ${channel}, @channel standy times!`}
    debugsCode(student, subject){ return `${this.name} debugs ${student.name}'s code on ${subject}` }
}
class Student extends Person {
    constructor(student_attrs){
        super(student_attrs);
        this.previousBackground = student_attrs.previousBackground;
        this.className = student_attrs.className;
        this.favSubjects = student_attrs.favSubjects;
    }
    listSubjects(subject){ return `${this.name}'s favorite subjects are ${this.favSubjects}.` }
    PRAssignment(subject){ return `${this.name} has submitted a PR for ${subject}` }
    sprintChallenge(subject){ return `${this.name} has begun sprint challenge on ${subject}`}
    eats(){ return `${this.name} eats an entire bag of oreos on lecture breaks.`}
}

// CREATE 
const studentBella = new Student({
    name: 'Bella',
    age: '1',
    location: 'San Antonio, Texas',
    previousBackground: 'Dog',
    className: 'Dog Park Etiquette',
    favSubjects: 'cuddling, belly rubs, snack time'
});

const studentIdiot = new Student({
    name: 'Dakotah',
    age: '25',
    location: 'dorklandia, USA',
    previousBackground: 'still idiot',
    className: 'js',
    favSubjects: 'eating, sleeping, eating'
});

const studentOreoEater = new Student({
    name: 'Kevin',
    age: '99',
    location: 'bahston',
    previousBackground: 'nerd',
    className: 'pirate',
    favSubjects: 'specialty oreos'
});


const instructorPhysics = new Instructor({
    name: 'Dan',
    age: '43',
    location: 'NYC',
    previousBackground: 'Mechanic',
    className: 'Physics',
    favSubjects: 'philosophy, astrophysics, pizza',
    specialty: 'teaching',
    favLanguage: 'french',
    catchPhrase: 'eureka',
});

const instructorGenderPolitics = new Instructor({
    name: 'Sam Hyde',
    age: '34',
    location: 'Massachusetts',
    previousBackground: 'galaxy brain genius',
    className: '2070 Paradigm Shift',
    favSubjects: 'bowl cuts',
    specialty: 'stand up comedy',
    favLanguage: 'english',
    catchPhrase: 'we\'re doing a quad stack',
});

const proMgrOne = new ProMgr({
    name: 'Brit',
    age: '29',
    location: 'Canada',
    previousBackground: 'teachers',
    className: 'Full Stack Web Dev',
    favSubjects: 'Ada',
    specialty: 'clapping back in Slack',
    favLanguage: 'Canadian',
    catchPhrase: 'I\'m going to put you guys in breakout rooms',
    gradClassName: 'web23',
    favInstructor: 'Ada',
});

const proMgrTwo = new ProMgr({
    name: 'Christian Ford',
    age: '22',
    location: 'Lumber Yard',
    previousBackground: 'tree chopper',
    className: 'tree chopping',
    favSubjects: 'trees',
    specialty: 'making sure we actually do our work',
    favLanguage: 'javascript',
    catchPhrase: 'do the career form',
    gradClassName: 'web23',
    favInstructor: 'Brit',
});

// TEST


console.log(studentBella.listSubjects());
console.log(studentOreoEater.eats());
console.log(studentIdiot.sprintChallenge('memeology 101'));
console.log(instructorGenderPolitics.grade(studentBella, 'gender politics'));
console.log(instructorPhysics.demo('cinematography'));
console.log(proMgrOne.standUp('#web23'));
console.log(proMgrTwo.debugsCode(studentIdiot, 'javascript'));
