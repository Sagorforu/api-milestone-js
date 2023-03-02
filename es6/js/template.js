const person = 'Adam Sand';
const person2 = "Ben White";
const person3 = `Donald Trump`;

// Normal template
const multiLine = 'First Line text \n' +
'Second Line text \n' +
'Third Line text \n' +
'Fourth Line text \n';
// console.log(multiLine);

// Using template string (backtick or caret)
const newMultiLine = `First Line object
Second Line array
Third Line string
Fourth Line code
Five Line text`
// console.log(newMultiLine);

// normal template
const a = 20;
const b = 30;
const summary = 'sum of: ' + a + ' and ' + b + ' is: ' + (a+b);
// console.log(summary);

// Using template string (backtick or caret)
const newSummary = `sum of: ${a} and ${b} is: ${a+b}`;
console.log(newSummary);