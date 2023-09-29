let lists = [[1,4,5],[1,3,4],[2,6]];

function getMergedSortedList(lists){
    let k = lists.length;
    let newList = [];
    for(let i=0; i<k; i++){
        for(let j=0; j<=(lists[i]).length-1; j++){
            newList.push(lists[i][j]);
        }
    }

    let temp = 0;
    
        for(let a=0; a<newList.length -1; a++){
            for(let b=a+1; b<newList.length; b++){

                if(newList[a] > newList[b]){
                    temp = newList[a];
                    newList[a] = newList[b];
                    newList[b] = temp;
                }
                
        }
        
    }

    return newList;
}

console.log(getMergedSortedList(lists));