function instructionGenerator() {
 function multiplyBy2 (num){
 return num*2;
 }
 return multiplyBy2;
}
let generatedFunc = instructionGenerator()
let result = generatedFunc(692) 
console.log(result);
