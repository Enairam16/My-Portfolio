const stars = document.getElementById("stars");

for(let i = 0; i < 250; i++){

    const star = document.createElement("span");

    let size = Math.random() * 3;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.background = "white";

    star.style.position = "absolute";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.borderRadius = "50%";

    star.style.opacity = Math.random();

    star.style.animation =

        `twinkle ${2 + Math.random()*5}s infinite`;

    stars.appendChild(star);

}

const style = document.createElement("style");

style.innerHTML = `

@keyframes twinkle{

0%,100%{

opacity:.2;

transform:scale(.8);

}

50%{

opacity:1;

transform:scale(1.4);

}

}

`;

document.head.appendChild(style);

const revealElements = document.querySelectorAll(
".about-card,.timeline-item,.education-card,.skill-card"
);

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.2
});

revealElements.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition=".8s";

observer.observe(item);

});

/*==========================================
Reveal Animation
==========================================*/

document.querySelectorAll(

".project-card,.certificate-card,.resume-card"

).forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

observer.observe(item);

});

/*==========================================
Scroll Progress
==========================================*/

window.addEventListener("scroll",()=>{

const winScroll=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

document.getElementById("progressBar").style.width=(winScroll/height)*100+"%";

});

/*==========================================
Top Button
==========================================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

topBtn.style.display=window.scrollY>500?"block":"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/*==========================================
Cursor Glow
==========================================*/

const glow=document.getElementById("cursorGlow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

function createMeteor() {
    const meteor = document.createElement("div");
    meteor.classList.add("meteor");

    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * (window.innerHeight * 0.3);

    meteor.style.left = startX + "px";
    meteor.style.top = startY + "px";

    const duration = Math.random() * 300 + 300;
    meteor.style.animation = `meteorFlash ${duration}ms linear forwards`;

    document.body.appendChild(meteor);

    setTimeout(() => meteor.remove(), duration);
}

function spawnMeteorRandomly() {
    createMeteor();

    if (Math.random() < 0.4) {
        setTimeout(createMeteor, 120);
    }

    setTimeout(spawnMeteorRandomly, Math.random() * 1000 + 2000);
}

spawnMeteorRandomly();