window.onload = function() {
    let btn = document.getElementById("btn");
    // let values = document.getElementsByTagName("input");
    let val = document.getElementById("val");
    // let sum = 0;

    btn.onmouseover = function() {
        // sum = 0;
        // for(let i=0; i < values.length; i++){
        //     sum += values[i].valueAsNumber;
        // }
        // val.innerHTML = sum;
        val.innerHTML = "Some Value";
    }
    btn.onmouseleave = function() {
        val.innerHTML = "-";
    }
}