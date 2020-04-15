window.addEventListener("load", function(){

        //Progress Bar//

    let html = new BoxProgress(btnHtml, 45, '#E44D26', prHtml, prHtml2);
        btnHtml.onclick = () => {html.perMove()};

    let css = new BoxProgress(btnCss, 45, '#264DE4', prCss, prCss2);
        btnCss.onclick = () => {css.perMove()};

    let js = new BoxProgress(btnJS, 20, '#E5A228', prJs, prJs2);
        btnJS.onclick = () => {js.perMove()};

    function BoxProgress(elem, persent, color, typecon, typecon2){

        this.elem = elem;
        this.persent = persent;
        this.typecon = typecon;
        this.typecon2 = typecon2;
        this.color = color;
        
        let a = 0;
        const DASHOFFSET = 440;
        let reversDash = 0;

        this.perMove = function(){
            if((this.persent >= 0) && (this.persent <= 100)){
                reversDash = (DASHOFFSET - (DASHOFFSET * this.persent) / 100);
                }
            else if(this.persent >= 100){
                return false;
            }

            if(this.persent >= 0 && this.persent <= 25){
               this.elem.style.animation = 'dash .4s linear forwards';
            }
            if(this.persent >= 26 && this.persent <= 50){
                this.elem.style.animation = 'dash 1.3s linear forwards';
            }
            if(this.persent >= 51 && this.persent <= 75){
                this.elem.style.animation = 'dash 1.8s linear forwards';
            }
            if(this.persent >= 76 && this.persent <= 100){
                this.elem.style.animation = 'dash 2.5s linear forwards';
            }

            this.elem.style.stroke = this.color;
            this.elem.style.strokeDashoffset = reversDash;
            
            let t = setInterval(function(){
                a++;
                if(a > persent){
                    return clearInterval(t);
                }
                typecon.innerHTML = a;
                typecon2.innerHTML = a;
                typecon2.style.color = color;
            },30);
        }
    }
    /////Progress End////////


    // Modus -start- //
    // btnModul.addEventListener('click', mdAct);
    // closeModul.addEventListener('click', mdAus);

    // function mdAct(){
    //     if(btnModul){
    //         actModul.classList.add('active');
    //         document.body.classList.add('body-aus');
    //     };
    // };

    function mdAus(){
        if(closeModul){
            actModul.classList.remove('active');
            document.body.classList.remove('body-aus');
        };
    };
    //für Gallery//
    btnModulGall.addEventListener('click', gallAct);
    closeModulGall.addEventListener('click', gallAus);

    function gallAct(){
        if(btnModulGall){
            actModulGall.classList.add('active');
            document.body.classList.add('body-aus');
        };
    };

    function gallAus(){
        if(closeModulGall){
            actModulGall.classList.remove('active');
            document.body.classList.remove('body-aus');
        };
    };
    // Modus -end- //

    function sliderTest(element,btnLeft,btnRight,e){
        const slid_obj = document.querySelector(`${element}`);
        const btn_left = document.querySelector(`${btnLeft}`);
        const btn_right = document.querySelector(`${btnRight}`);

        let es   = e;
        let count = 0;

        btn_left.addEventListener('click', ()=>{
            count -= 990;
            if(count < -es){
                count = 0;
            }
            slid_obj.style.transform = `translateX(${count}px)`;
        })
        btn_right.addEventListener('click', ()=>{
            count += 990;
            if(count > 0){
                count = 0;
            }
            slid_obj.style.transform = `translateX(${count}px)`;
        })
    }
    sliderTest(
        '.gallery-slider-wrapper',
        '.prev',
        '.next',
        3960,
    );

    function iterationFor(a,b){
        // let g = '.'||'#'||':';
        let c = document.querySelectorAll(`${a}`);
        let d = document.querySelectorAll(`${b}`);
        let e;
        for(let i = 0;i<c.length;i++){c[i].onclick=()=>{e=c[i].src;
        for(let i = 0;i<d.length;i++){d[i].src = e}}}
    };
    iterationFor('.smallA','.topA');
    iterationFor('.smallB','.topB');
    iterationFor('.smallC','.topC');
    iterationFor('.smallE','.topE');



    ///////////////////////////////
    // let projects = document.querySelector('.btn-pro');
    // let htmlCss = document.querySelector('.btn-css');
    // // let btn = document.querySelector('');
    // let div = document.querySelector('.gallery-slider-wrapper-wrapp');
    // let div2 = document.querySelector('.gallery-slider-wrapper-wrapp-css');

    // projects.onclick = (e) => {
    //     displayProject(function(){
    //         display();
    //     });
    // }

    // htmlCss.onclick = (e) => {
    //     displayCss(function(){
    //         display1();
    //     })
    // }
    // btn.onclick = (e) => {
    //     if(div2.style.display == 'none'){
    //         div.style.transform += `translate(-${450}px,0px)`;
    //     }
    //     if(div.style.display == 'none'){
    //         div2.style.transform += `translate(-${450}px,0px)`;
    //     }
    // }

    // function displayProject(cb){
    //     let f = cb || function(){}

    //     div2.style.height = 0+'px';
    //     div.style.display = 'flex';
    //     div.style.height = 250+'px';

    //     div2.addEventListener('transitionend');
    //     div2.removeEventListener('transitionend');

    //     f();
    // }
    // function displayCss(cb){
    //     let f = cb || function(){}

    //     div.style.height = 0+'px';
    //     div2.style.display = 'flex';
    //     div2.style.height = 250+'px';

    //     div.addEventListener('transitionend');
    //     div.removeEventListener('transitionend');

    //     f();
    // }

    // function display(){
    //     let t = setTimeout(function(){
    //         div2.style.display = 'none';
    //         clearTimeout(t);
    //     },1001);
    // } 
    // function display1(){
    //     let t = setTimeout(function(){
    //         div.style.display = 'none';
    //         clearTimeout(t);
    //     },1001);
    // } 

});