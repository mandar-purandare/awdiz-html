let array = [2,4,1,3,6,7,8];

function getMissingNumber(array){
    
    let temp = 0;
    
        for(let i=0; i<array.length -1; i++){
            for(let j=i+1; j<array.length; j++){

                if(array[i] > array[j]){
                    temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
                
        }
        
    }
   
    let a=1;
    for(let b=0; b<array.length-1; b++){
        
            if(array[b] !== a){
                return a;
            }
        a++;
    }
    
}

console.log(getMissingNumber(array));