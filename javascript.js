
function ask(question, yes, no) {
    if (confirm(question)) yes()
        else no();
}

function showOk() {
    alert("You Agreed.");
}

function showCancel() {
    alert("You canceled the execution.");
}

alert(showCancel);
alert(showOk);

ask("Do you agree?", showOk, showCancel);
// Functions can be values if not explicitly coded ot be called.
// 
// 
// 
// 
