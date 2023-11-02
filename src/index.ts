
for(let i:number = 1; i <= 7; i++){
    questionSelector(i);
}


function question1(){
    console.log("For Version");
    for(let i:number = 1; i <= 100; i++){
        if(i%2==0){
            console.log(i)
        }
    }

    console.log("While Version");
    let j = 1;
    while(j < 100){
        if(j%2==0){
            console.log(j);
        }
        j++;
    }

}

function question2(){
    console.log("Valores de 0 até 9.8, pois, quando chegamos em 10, o while é quebrado\nEntretanto, não retorna nada, então nenhum valor será mostrado até observamos o valor da variável i");
}

function question3(num1:number, num2:number): number{
    return ((num1-num2) >= 0) ? num1 : num2;
}

function question4(num1:number, num2:number): void{

    const powIterative = () => {
        let acc = num1;
        for (let i = 1; i < num2; i++){
            acc *= num1;
        }
        return (num2 > 0)? acc : 1;
    }

    const powRecursive = (expoent:number):number => {
        if (expoent > 0) {
            return num1 * powRecursive(expoent-1);
        }
        return 1;
    }
    

    const showTypes = () => {
        console.log("Iterative version:");
        console.log(powIterative());
        console.log("Recursive version:");
        console.log(powRecursive(num2));
    }

    showTypes();
}

function question5(s:string):string {
    let firstCharacter = s.charAt(0);
    return s.replace(firstCharacter,firstCharacter.toUpperCase());
}

function question6(arrayInt:number[]):number {
    let oldNumber = 0;
    for (let numero of arrayInt){
        if (oldNumber < numero) {
            oldNumber = numero;
        }
    }
    return oldNumber;
}

function question7(arrayInt:number[]) {

    const map1 = new Map();
    arrayInt.forEach((element) => {
        let alreadyHave = map1.get(element);
        if (typeof alreadyHave == "undefined") {
            alreadyHave = 0;
        }

        map1.set(element, alreadyHave + 1);
    })
    
    const map2 = new Map([...map1.entries()].sort((a, b) => b[1] - a[1]));
    map2.forEach( (value, key) => {
        console.log(`Numero: ${key} => ${value} vezes`);
    })
}

function questionSelector(selector:number){
    switch (selector) {
        case 1:
            console.log("Questão 1");
            question1();
            break;
        case 2:
            console.log("Questão 2");
            question2();
            break;
        case 3:
            console.log("Questão 3");
            let x3:number = Math.floor(Math.random() * 100);
            let y3:number = Math.floor(Math.random() * 100);
            console.log(`Numero X = ${x3}\nNumero Y = ${y3}\nO maior é = ${question3(x3,y3)}`);
            break;
        case 4:
            console.log("Questão 4");
            let x4:number = Math.floor(Math.random() * 100);
            let y4:number = Math.floor(Math.random() * 10);
            console.log(`Numero X = ${x4}\nNumero Y = ${y4}\nA resposta é:`);
            question4(x4,y4)
            break;
        case 5:
            console.log("Questão 5");
            let s5:string = "aqui eh minha string 01"
            console.log(`Escrevi => ${s5}\nRetornou => ${question5(s5)}`)
            break;
        case 6:
            console.log("Questão 6");
            let arr6:number[] = [2, 12 ,15 ,16 ,22 ,3 ,8 ,7 ,5]
            console.log(`Array => ${arr6}\nRetornou => ${question6(arr6)}`)
            break;
        case 7:
            console.log("Questão 7");
            let arr7:number[] = [2 , 2 ,8 ,7 ,46 ,12 , 8, 1, 0 , 0 , 0 ,5]
            console.log(`Array => ${arr7}\nRetornou => `);
            question7(arr7)
            break;
        default:
            break;
    }
}

