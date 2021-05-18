// let num=parseInt(prompt("Enter Number"))
// switch(num){
//     case 1:
//         console.log("num=1")
//         break


//     case 2:
//         console.log("num=2")
//         break


//     case 3:
//         console.log("num=3")
//         break
//       default:
//           console.log("case isnot matched")
// }
let result;
const opt=prompt("Enter Maths Operator. + - * or / ");
const num1= parseFloat(prompt("Enter num1"));
const num2= parseFloat(prompt("Enter num2"));

switch (opt){
    case'+':
    result= num1+num2;
    console.log(result)
    document.write(`${num1}  + ${num2} = ${result}`);
    break

    case'-':
    result= num1-num2;
    console.log(result)
    console.log(`${num1} - ${num2} = ${result}`);
    break

    case'*':
    result= num1*num2;
    console.log(result)
    console.log(`${num1} x ${num2} = ${result}`);
    break

    case'/':
    result= num1/num2;
    console.log(result)
    console.log(`${num1} / ${num2} = ${result}`);
    break
}