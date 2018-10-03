class CalcController{

    constructor(){

        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();

    }    

    initialize(){

        this.setDisplayDateTime();

        setInterval(()=>{
         this.setDisplayDateTime();    
        }, 1000);

    }

    initButtonsEvents(){

       let buttons = document.querySelectorAll("#buttons > g, #parts > g");


       buttons.forEach((btn, index)=>{

        btn.addEventListener('click', e=>{

            console.log(btn.className.baseVal.replace("btn-",""));

        });

       })

    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayDate(){

        return this._dateEl.innerHTML;

    }

    set displayDate(displayDate){

        this._dateEl.innerHTML = displayDate;

    }

    get displayTime(){

        return this._timeEl.innerHTML;

    }

    set displayTime(displayTime){

        return this._timeEl.innerHTML = displayTime;

    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML
    }

    set displayCalc(displayCalc){
        this._displayCalcEl.innerHTML = displayCalc;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(currentDate){
        this._displayCalc = currentDate;
    }

}