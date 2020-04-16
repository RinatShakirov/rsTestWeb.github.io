window.addEventListener('load', ()=>{
    let form = document.querySelector('form');
    let input = document.querySelectorAll('input');
    let textarea = document.querySelector('textarea');
    
    form.onsubmit = function(e){
        let error = false;
        for(let i = 0; i < input.length; i++){
            if(input[i].value === '' || textarea.value === ''){
                input[i].classList.add('input-error');
                textarea.classList.add('input-error');
                error = true;
            }
            else{
                input[i].classList.remove('input-error');
                textarea.classList.remove('input-error');
            }
        }
        if(error){
            e.preventDefault();
        }
    }
});