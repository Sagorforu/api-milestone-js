class Instructor{
    name;
    designation = 'web course Instructor'
    team = 'web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`);
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`);
    }
}
class Developer{
    name;
    designation = 'web course Developer'
    team = 'web team'
    tech;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
        this.tech = tech;
    }
    developFeature(feature){
        console.log(`please develop the ${feature}`);
    }
    release(version){
        console.log(`please release the version ${version}`);
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`);
    }
}
class JobPlacement{
    name;
    designation = 'Job placement commandos'
    team = 'Job Placement'
    tech;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
        this.tech = tech;
    }
    provideResume(feature){
        console.log(`please develop the ${feature}`);
    }
    prepareStudent(version){
        console.log(`please release the version ${version}`);
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`);
    }
}