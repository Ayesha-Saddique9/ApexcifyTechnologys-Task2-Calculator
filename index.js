const display = document.getElementById('display');
const btns = document.querySelectorAll('button');

let currentInput = '';

btns.forEach((button)=>{
    button.addEventListener('click',()=>{
        const value = button.textContent;

        if (value === 'AC'){
    currentInput = '';
    display.value = '';
    return;
}

        if (value === 'DEL'){
    currentInput = currentInput.slice(0,-1);
    display.value = currentInput;
    return;
}

else if( value === '='){
    try{
        display.value = eval(currentInput);
        currentInput = display.value;
    }
    catch{
        display.value = "Error";
    }
    return;
}

else{
    currentInput += value;
    display.value = currentInput;
}
    })
})

