// Check for Palindrome

// 121 -> 121 Palindrome Number
// 123 -> 321 Not Palindrome Number


function Check_Palindrome(str){

let reversed = str.split('').reverse().join('');
if(str === reversed){
    console.log(`${str} is a Palindreme Number`)
}else{
    console.log(`${str} is not a Palindreme Number`)
}

}

console.log(Check_Palindrome('11a'))