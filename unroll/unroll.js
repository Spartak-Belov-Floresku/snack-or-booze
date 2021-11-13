module.exports = squareArray => {

    let unrollArr = []
    let check = 0;

    while(true){

        switch(check){
            case 0:
                unrollArr = [...unrollArr, ...squareArray[0]];
                squareArray.shift();
                check = 1
                break
            case 1:
                squareArray.forEach((el, i) => unrollArr = [...unrollArr, squareArray[i].pop()]);
                let temp = squareArray.pop();
                unrollArr = [...unrollArr, ...temp.reverse()]
                check = 2
                break
            case 2:
                let leftIdx = squareArray.length-1;
                squareArray.forEach((el, i) => unrollArr = [...unrollArr, squareArray[leftIdx - i].shift()]);
                check = 0
                break
        }

        if(!squareArray.length)
            break 
    }
    
    return unrollArr;

}

