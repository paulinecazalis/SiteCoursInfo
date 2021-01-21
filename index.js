
function page2(){
    document.getElementById('card').style.display = "none";
    document.getElementById('card2').style.display = "none";
    document.getElementById('back').style.display = "block";
    document.getElementById('back').onclick = function(){menuBack()};

    let sem1 = document.createElement('div');
    sem1.className = "card";
    sem1.id = "cardSem1";
    sem1.onclick = function(){page3()};
    let sem1cnt = document.createElement('div');
    sem1cnt.className = "content";
    let sem1imgBx =  document.createElement('div');
    sem1imgBx.className = "imgBx";
    let sem1img = document.createElement('img');
    sem1img.src ="./src/img/livre.png"
    let sem1cntBx = document.createElement('div');
    sem1cntBx.className = "contentBx";
    let sem1title = document.createElement('h3');
    sem1title.id = "title"
    sem1title.innerHTML = "Semestre 1";

    let sem2 = document.createElement('div');
    sem2.className = "card";
    sem2.id = "cardSem2";
    let sem2cnt = document.createElement('div');
    sem2cnt.className = "content";
    let sem2imgBx =  document.createElement('div');
    sem2imgBx.className = "imgBx";
    let sem2img = document.createElement('img');
    sem2img.src ="./src/img/livre.png"
    let sem2cntBx = document.createElement('div');
    sem2cntBx.className = "contentBx";
    let sem2title = document.createElement('h3');
    sem2title.id = "title"
    sem2title.innerHTML = "Semestre 2";

    sem1cntBx.appendChild(sem1title);
    sem1imgBx.appendChild(sem1img);
    sem1cnt.appendChild(sem1imgBx);
    sem1cnt.appendChild(sem1cntBx);
    sem1.appendChild(sem1cnt);
    document.getElementById("container").appendChild(sem1);

    sem2cntBx.appendChild(sem2title);
    sem2imgBx.appendChild(sem2img);
    sem2cnt.appendChild(sem2imgBx);
    sem2cnt.appendChild(sem2cntBx);
    sem2.appendChild(sem2cnt);
    document.getElementById("container").appendChild(sem2);
}

function page3(){
    for(let i = 0; i < cours.length; i++){
        let cardCours = document.createElement('div');
        cardCours.className = "card";
        cardCours.id = "cardcours";
        cardCours.onclick = function(){
            for(let j = 0; j<cours.length; j++){
                if(cardCourstitle.textContent == cours[j].name){
                    afficheCours();
                }
            }
        };
        let cardCourscnt = document.createElement('div');
        cardCourscnt.className = "content";
        let cardCoursimgBx =  document.createElement('div');
        cardCoursimgBx.className = "imgBx";
        let cardCoursimg = document.createElement('img');
        cardCoursimg.src ="./src/img/livre.png"
        let cardCourscntBx = document.createElement('div');
        cardCourscntBx.className = "contentBx";
        let cardCourstitle = document.createElement('h3');
        cardCourstitle.id = "title"
        cardCourstitle.className = "title-cours";
        cardCourstitle.innerHTML = cours[i].name;

        cardCourscntBx.appendChild(cardCourstitle);
        cardCoursimgBx.appendChild(cardCoursimg);
        cardCourscnt.appendChild(cardCoursimgBx);
        cardCourscnt.appendChild(cardCourscntBx);
        cardCours.appendChild(cardCourscnt);
        document.getElementById("container").appendChild(cardCours);
    }
    //document.getElementById('container').removeChild(document.getElementById("cardSem1"));
    //document.getElementById('container').removeChild(document.getElementById("cardSem2"));
    document.getElementById('back').onclick = function(){
        for(let i = 0; i < cours.length; i++){
            document.getElementById('container').removeChild(document.getElementById("cardcours"));
        }
        page2();
    };
}

function menuBack(){
    document.getElementById('back').style.display = "none";

    document.getElementById('container').removeChild(document.getElementById("cardSem1"));
    document.getElementById('container').removeChild(document.getElementById("cardSem2"));

    document.getElementById('card').style.display = "flex";
    document.getElementById('card2').style.display = "flex";
}

function afficheCours(){
    let cardCourscrs = document.createElement('div');
    cardCourscrs.className = "card";
    cardCourscrs.id = "cardcourscrs";
    
    let cardCourscnt = document.createElement('div');
    cardCourscnt.className = "content";
    let cardCoursimgBx =  document.createElement('div');
    cardCoursimgBx.className = "imgBx";
    let cardCoursimg = document.createElement('img');
    cardCoursimg.src ="./src/img/livre.png"
    let cardCourscntBx = document.createElement('div');
    cardCourscntBx.className = "contentBx";
    let cardCourstitle = document.createElement('h3');
    cardCourstitle.id = "title"
    cardCourstitle.className = "title-cours";
    cardCourstitle.innerHTML = "Cours";

    cardCourscntBx.appendChild(cardCourstitle);
    cardCoursimgBx.appendChild(cardCoursimg);
    cardCourscnt.appendChild(cardCoursimgBx);
    cardCourscnt.appendChild(cardCourscntBx);
    cardCourscrs.appendChild(cardCourscnt);
    document.getElementById("container").appendChild(cardCourscrs);
    
    for(let i = 0; i < cours.length; i++){
        document.getElementById('container').removeChild(document.getElementById("cardcours"));
    }
    document.getElementById('back').onclick = function(){
        document.getElementById('container').removeChild(document.getElementById("cardcourscrs"));
        page3();
        
    };

}
