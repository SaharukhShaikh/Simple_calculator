(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.getElementById('equal');
   

    buttons.forEach(function(button){
        button.addEventListener('click',function(){
            let value = e.target.dataset.num;
            screen.value+=value;
            
    })
});
    equal.addEventListener('click',function(){
        if(screen.value === ''){
            screen.value = "Please Enter";
        }else{
            screen.value= eval(screen.value)
            
        }
    })

    clear.addEventListener('click',function(){
        screen.value="";
    })

})();