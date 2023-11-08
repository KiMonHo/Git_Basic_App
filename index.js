/*
    index.html에서 사용하는 js파일입니다.
 */
function add(n1,n2, msg){
    if(msg !== undefined){
        var result = n1 + n2;
        return msg + result;
    }
    
    return n1 + n2;
}
    
    
function add(n1,n2, n3){
    if(n3 !== undefined){
        return n1 + n2 + n3;
    }
    else {
        return n1+n2;        
    }
    
}

function minus(n1,n2) {
    if(n1>n2){
        return n1 - n2;
    }
    else {
        return n2 - n1;
    }

}