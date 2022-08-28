function displayNumber(num){
    id_result.value += num
}

function evaluteExpression(){
    // let curval = id_result.value
    // let result = eval(curval)
    // id_result.value = result
    id_result.value = eval(id_result.value)
}

function clearBox(){
    id_result.value = ""
}

