function nestFuncExample(){
    
    function innerNest(){
        var result=10;
        return result;
        
    }
    return innerNest;
}

var resultOut=nestFuncExample();
var finalResult=resultOut();
alert(finalResult);