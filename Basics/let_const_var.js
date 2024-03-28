const num = 10 // can never be changed 
let sum = 0 // can be changed 

for(let i = 0;i<num;i++){
    sum+=i
}

//num = 12 //not allowed

var name = "rishi" // not used due to issue in block & fnctional scoping 
section = "A" // never keep an variable undeclared 
/* to print multiple indexes */

console.table([num,sum,name,section])