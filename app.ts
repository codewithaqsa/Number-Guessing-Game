console.log("guess a number between 1 to 10");
//now variable create
let a :number=Math.floor(Math.random()*10)
import inquirer from "inquirer";
while(true){
    let input=await inquirer.prompt
    ({name:"guess", type:"number",
        message:"enter your guess number you want:   "})
    

        //provide code
        let ans:number= input.guess
        if (a==ans)
            {console.log("congralutation your guess number absolutely correct")
            break;}
            else{console.log("sorry your guess number is wrong try again")}
            
}
