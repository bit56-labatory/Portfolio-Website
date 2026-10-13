// Loader

window.addEventListener(
'load',
()=>{

setTimeout(()=>{

document
.getElementById('loader')
.style.display='none';

},1800);

});

// Typing

const words=[
'Intelligent Systems',
'AI Products',
'Software Solutions',
'Automation Platforms'
];

let w=0;
let c=0;
let del=false;

const target=
document.getElementById('typing');

function type(){

const current=
words[w];

if(!del){

target.textContent=
current.substring(0,c++);

if(c>current.length){

del=true;

setTimeout(type,1000);

return;

}

}else{

target.textContent=
current.substring(0,c--);

if(c===0){

del=false;

w=(w+1)%words.length;

}

}

setTimeout(
type,
del?50:90
);

}

type();

// Hero Tilt

const hero=
document.querySelector('.hero');

document.addEventListener(
'mousemove',
e=>{

const x=
(e.clientX/window.innerWidth-.5)
*10;

const y=
(e.clientY/window.innerHeight-.5)
*10;

hero.style.transform=
`rotateY(${x}deg)
rotateX(${-y}deg)`;

});

// Spotlight

const spotlight=
document.querySelector('.spotlight');

document.addEventListener(
'mousemove',
e=>{

spotlight.style.left=
e.clientX+'px';

spotlight.style.top=
e.clientY+'px';

});

// Terminal

const output=
document
.getElementById(
'terminal-output'
);

const input=
document
.getElementById(
'terminal-input'
);

const commands={

help:
'about, skills, projects, contact',

about:
'Software Engineer passionate about AI and automation.',

skills:
'Python, JavaScript, SQL, APIs, AI',

projects:
'AI Assistant, Trading Intelligence, Portfolio',

contact:
'mitchbandz172@gmail.com'

};

input.addEventListener(
'keydown',
e=>{

if(e.key==='Enter'){

const cmd=
input.value.toLowerCase();

output.innerHTML+=
`<br>> ${cmd}`;

output.innerHTML+=
`<br>${
commands[cmd]
||
'Unknown command'
}<br>`;

input.value='';

}

});

// Footer Year

document.getElementById(
'year'
).textContent=
new Date().getFullYear();
