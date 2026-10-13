const words = [
"AI Systems",
"Software",
"Automation Tools",
"Web Applications"
];

let i = 0;
let j = 0;

function type(){

    document.getElementById("typing").textContent =
    words[i].substring(0,j);

    j++;

    if(j > words[i].length){

        setTimeout(()=>{
            j = 0;
            i = (i+1) % words.length;
        },1000);

    }

    setTimeout(type,120);
}

type();
