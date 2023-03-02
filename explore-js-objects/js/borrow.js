const KodomAli = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        // console.log(this.name, 'is participating in an exam');
        return this.name + ' is participating in an exam';
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatDey: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    } 
}
const result = KodomAli.exam();

const badamAli = {
    name: 'kacha badam',
    money: 8000
}
// const result2 = KodomAli.exam.call(badamAli);
const result3 = KodomAli.treatDey.call(badamAli, 400, 40);
console.log(result3);
const badamMoney = KodomAli.treatDey.apply(badamAli, [1000, 100]);
console.log(badamMoney);

const badamAliTreat = KodomAli.treatDey.bind(badamAli);
const remaining = badamAliTreat(1000, 100);
console.log(remaining);