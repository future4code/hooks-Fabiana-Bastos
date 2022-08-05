/*EXERCÍCIO 2*/
const operation = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

if (!num1 || !num2){
    console.log("Esperava dois números e recebi apenas um")
} else {
    switch (operation){
        case "soma":
            console.log("\u001b[31m O resultado da soma é", num1+num2)
            break;
        case "sub":
            console.log("\u001b[34m O resultado da subtração é", num1-num2)
            break;
        case "mult":
            console.log("\033[1;32m O resultado da multiplicação é", num1*num2)
            break;
        case "div":
            console.log("\033[1;37m O resultado da divisão é", num1/num2)
            break;
    }
}
