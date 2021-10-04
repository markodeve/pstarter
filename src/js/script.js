const dorador = document.getElementById("count_el"),
      btnn = document.getElementById("btnn"),
      savebtn = document.getElementById("save"),
      entrie = document.getElementById('entries');

let totalCount = 0;


function incrementCount() {
    totalCount += 1;
}

btnn.addEventListener('click', () => {
    incrementCount();
    dorador.innerText = totalCount;
});

function save() {
   let dor = totalCount + " - ";
   entrie.textContent += ' ';
   entrie.textContent += dor;
   dorador.textContent = 0;
   totalCount = 0;
   
}

savebtn.addEventListener('click', () => {
    save();
});






