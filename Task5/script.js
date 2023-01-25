'use strict';

//----------Task5
let AgreedY=() => { alert("You agreed"); };
let NotAgreed=()=>{ alert("You canceled the execution"); };

const ask = (question, yes, no) => {
    if (confirm(question)) alert(yes);
    else alert(no);
    }

    ask("Do you agree?",AgreedY(),NotAgreed());

    ask("salam", "are", "na")