import {Toast} from './NativeSimpleToast/dist/index.js';

class Counter {
    constructor() {
        this.local_key = 'eff-counter-20220806';
        this.count = 0;
    }

    getLocalCount(){
        const localCount = localStorage.getItem(this.local_key);
        if(localCount !== null){
            this.count = localCount;
            new Toast({message:'カウント情報を復元しました。',icon:'info',duration: 5000});
        } 
    }

    countAnd(){
        this.count ++;
        localStorage.setItem(this.local_key,this.count);
    }

    counterReset(){
        if(!confirm('リセットしますか？')) return;
        this.count = 0;
        localStorage.removeItem(this.local_key);
        new Toast({message:'カウント情報をリセットしました。',icon:'warn',duration:5000});
    }
}

const counter = new Counter();
counter.getLocalCount();

let main = null;
let reset = null;

window.addEventListener('load',() => {
    main = document.getElementById('value-and-count');
    reset = document.getElementById('reset');

    main.innerText = counter.count;
    main.onclick = () => {
        counter.countAnd();
        main.innerText = counter.count;
    }

    reset.onclick = ()=>{
        counter.counterReset();
        main.innerText = counter.count;
    }
})

window.addEventListener('keydown',e => {
    if(e.key === '+'){
        counter.countAnd();
        main.innerText = counter.count;
    }
})