let num = 5;

function printPattern(num){
    

    for(let i=1; i<=num; i++){
        let char = '';
        for(let j=1; j<=i; j++){
            char=char+'$';
        }
        console.log(char);
    }
    
}

printPattern(num);