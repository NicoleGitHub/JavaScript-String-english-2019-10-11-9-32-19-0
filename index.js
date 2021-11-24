// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
name.toUpperCase()

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
for(let i = 0; i < sentence.length; i++){
if (sentence.charAt(i) === " "){	
sentence = sentence.slice(0,i+1)+sentence.charAt(i+1).toUpperCase()+sentence.slice(i+2,sentence.length);
}
}

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
money.replace("￥","")