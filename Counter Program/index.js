 const db = document.getElementById("decbtn");
 const ib = document.getElementById("incbtn");
 const rb = document.getElementById("rstbtn");
 const cntlbl = document.getElementById("cntlbl");

let ctr = 0;
db.onpointerenter= function(){
    ctr--;
    cntlbl.textContent = ctr;
    
}

ib.onclick = function(){
    ctr++;
    cntlbl.textContent = ctr;
    
}

rb.onclick = function(){
    ctr = 0;
    cntlbl.textContent = ctr;
}