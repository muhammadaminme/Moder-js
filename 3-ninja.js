
let i = 0;

while(i < 5){
    console.log('loop is:', i)
    i++
}



const names=["Me", "you", "our friend", "our family", "others", "qwer"];
let i = 4;
while( i < names.length){
    console.log(names[i]);
    i++
}




let i = 2;

do{ 
    console.log(i)
    i++
}while( i < 5)



const names=["Me", "you", "our friend", "our family", "others", "qwer"];
if(names.length >=7){
    console.log("6 arrays")
}


const pin= "123"
if(pin.length != 3){console.log("More than 3")}
else if(pin.length >= 6){console.log("More than 6")}
else if(pin.length >= 8){console.log("More than 8")}
else{console.log("tatak")}




const scores =["5", "5","5.5", "6","6.5",'7',"7.5","8","8.5","9"]

for(let i = 0; i<scores.length; i++){
    console.log(scores[i]);
    
    if(scores[i] === "8.5"){
        console.log("Our teacher's score is:" )
        break;
    }
}







const scores =["5.5", "6","6.5",'7',"7.5","8","8.5","9"]

for(let i = 0; i<scores.length; i++){
    
    if(scores[i] == "7.5"){
        continue;
    }
    
    console.log(scores[i])
    
    if(scores[i] === "8.5"){
       console.log("Our teacher's score is:" )
        break;
    }
 
}



function grades(param){
    switch(param){
        case "9":
            console.log("You found 38-40")
            break
        case '8':
            console.log("You found 34-35")
            break
        case "7":
            console.log("You found 30-31")
            break
        case '6':
            console.log("You found 26-28")
            break
        case '5':
            console.log("You found 23-25") 
            break 
        default:
            console.log("Enter  Valid Overallscore")
              
    }
}
grades("7")



const a = "7"
    switch(a){
        case "9":
            console.log("You found 38-40")
            break
        case '8':
            console.log("You found 34-35")
            break
        case "7":
            console.log("You found 30-31")
            break
        case '6':
            console.log("You found 26-28")
            break
        case '5':
            console.log("You found 23-25") 
            break 
        default:
            console.log("Enter  Valid Overallscore")
              
}


