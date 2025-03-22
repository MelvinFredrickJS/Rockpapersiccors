 const options=['Rock','Paper','Scissors'];
 const UI=document.getElementById("yourinput");
 const O=document.getElementById("oppinp");
 const res=document.getElementById("result");

 function Game(opt){
    const pc =options[Math.floor(Math.random()*3)];
    let val='';
    if(opt===pc){
        val="It Is a Tie"
    }
    else{
        switch(opt){
            case'Rock':
            val=(pc==='Scissors') ? "You Win!":"You Lose!";
            break;
            case'Scissors':
            val=(pc==='Paper') ? "You Win!":"You Lose!";
            break;
            case'Paper':
            val=(pc=='Rock')? "You Win!":"You Lose!";

        }
    }
    UI.textContent=`Input: ${opt}`;
    O.textContent=`Pc Input: ${pc}`;
    res.textContent=val;


 }