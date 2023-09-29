let list1 = [1,2,4,5];
let list2 = [1,3,4,5];

function getMergedList(l1,l2){

    for(let i=0; i<l1.length; i++){
        for(let j=0; j<l2.length; j++){
            if(l2[j] >= l1[i]){
                l1.splice(i+1,0,l2[j]);
                i=i+2;
                if(i > l1.length -1){
                    i=l1.length -1;
                }
            }
        }
    }
    return l1;
}

console.log(getMergedList(list1,list2));

