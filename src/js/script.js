const dorador = document.getElementById("count_el"),
      btnn = document.getElementById("btnn"),
      savebtn = document.getElementById("save");

      let totalCount = 0;


    function incrementCount() {
        totalCount += 1;
}

btnn.addEventListener('click', () => {
    incrementCount();
    dorador.innerText = totalCount;
});

function save() {
   console.log(totalCount);
}

savebtn.addEventListener('click', () => {
    save();
});


let username = "Dor";
let message = "you have threee new dors.";

console.log(username + ", " + message);





