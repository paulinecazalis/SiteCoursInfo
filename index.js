
function page2(){
    document.getElementById('card').style.display = "none";
    document.getElementById('card2').style.display = "none";
    document.getElementById('back').style.display = "block";
    document.getElementById('back').onclick = function(){menuBack()};

    let sem1 = document.createElement('div');
    sem1.className = "card";
    sem1.id = "cardSem1";
    //sem1.onclick = function(){page3()};
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
    sem2.onclick = function(){page3()};
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
                    document.getElementById('title-cours').style.display = "block";
                    document.getElementById('title-cours').innerHTML = cours[j].name;
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
    if(document.getElementById("cardSem1")){
        document.getElementById('container').removeChild(document.getElementById("cardSem1"));
    }
    if(document.getElementById("cardSem2")){
        document.getElementById('container').removeChild(document.getElementById("cardSem2")); 
    }
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
    cardCourscrs.onclick = function(){
        pageCours();
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
    cardCourstitle.innerHTML = "Cours";

    cardCourscntBx.appendChild(cardCourstitle);
    cardCoursimgBx.appendChild(cardCoursimg);
    cardCourscnt.appendChild(cardCoursimgBx);
    cardCourscnt.appendChild(cardCourscntBx);
    cardCourscrs.appendChild(cardCourscnt);
    document.getElementById("container").appendChild(cardCourscrs);

    let cardTdcrs = document.createElement('div');
    cardTdcrs.className = "card";
    cardTdcrs.id = "cardtdcrs";
    cardTdcrs.onclick = function(){
        console.log(cours.length);
        pageTd(); 
    };
    let cardTdcnt = document.createElement('div');
    cardTdcnt.className = "content";
    let cardTdimgBx =  document.createElement('div');
    cardTdimgBx.className = "imgBx";
    let cardTdimg = document.createElement('img');
    cardTdimg.src ="./src/img/livre.png"
    let cardTdcntBx = document.createElement('div');
    cardTdcntBx.className = "contentBx";
    let cardTdtitle = document.createElement('h3');
    cardTdtitle.id = "title"
    cardTdtitle.className = "title-cours";
    cardTdtitle.innerHTML = "TD";

    cardTdcntBx.appendChild(cardTdtitle);
    cardTdimgBx.appendChild(cardTdimg);
    cardTdcnt.appendChild(cardTdimgBx);
    cardTdcnt.appendChild(cardTdcntBx);
    cardTdcrs.appendChild(cardTdcnt);
    document.getElementById("container").appendChild(cardTdcrs);

    let cardTpcrs = document.createElement('div');
    cardTpcrs.className = "card";
    cardTpcrs.id = "cardtpcrs";
    cardTpcrs.onclick = function(){
        pageTp();
    };
    let cardTpcnt = document.createElement('div');
    cardTpcnt.className = "content";
    let cardTpimgBx =  document.createElement('div');
    cardTpimgBx.className = "imgBx";
    let cardTpimg = document.createElement('img');
    cardTpimg.src ="./src/img/livre.png"
    let cardTpcntBx = document.createElement('div');
    cardTpcntBx.className = "contentBx";
    let cardTptitle = document.createElement('h3');
    cardTptitle.id = "title"
    cardTptitle.className = "title-cours";
    cardTptitle.innerHTML = "TP";

    cardTpcntBx.appendChild(cardTptitle);
    cardTpimgBx.appendChild(cardTpimg);
    cardTpcnt.appendChild(cardTpimgBx);
    cardTpcnt.appendChild(cardTpcntBx);
    cardTpcrs.appendChild(cardTpcnt);
    document.getElementById("container").appendChild(cardTpcrs);

    if(document.getElementById("cardcours")){
        for(let i = 0; i < cours.length; i++){
            document.getElementById('container').removeChild(document.getElementById("cardcours"));
        }
    }
    
    document.getElementById('back').onclick = function(){
        if(document.getElementById("cardcourscrs")){
            document.getElementById('container').removeChild(document.getElementById("cardcourscrs"));
        }

        if(document.getElementById("cardtpcrs")){
            document.getElementById('container').removeChild(document.getElementById("cardtpcrs"));
        }

        if(document.getElementById("cardtdcrs")){
            document.getElementById('container').removeChild(document.getElementById("cardtdcrs"));
        }
        document.getElementById('title-cours').style.display = 'none';
        page3();
    };

}

function pageCours(){
    document.getElementById('content-table').style.display = 'block';
    document.getElementById('container').removeChild(document.getElementById("cardcourscrs"));
    document.getElementById('container').removeChild(document.getElementById("cardtpcrs"));
    document.getElementById('container').removeChild(document.getElementById("cardtdcrs"));
    for(let i = 0; i<cours.length; i++){
       if(document.getElementById('title-cours').textContent == cours[i].name){
           let nmcrs = Object.values(cours[i].Cours);
           if(cours[i].Cours != null){
               for(let j = 0; j< nmcrs.length; j++){
                   let tr = document.createElement('tr');
                   tr.id = "trTable"
                   let td1 = document.createElement('td');
                   td1.id = "numTable";
                   td1.textContent = nmcrs[j].index;
                   let td2 = document.createElement('td');
                   td2.id = "nomTable";
                   td2.textContent = nmcrs[j].Titre;
                   let td3 = document.createElement('td');
                   td3.id = "pdfTable";
                   let td3a = document.createElement('a')
                   td3a.href = nmcrs[j].pdf;
                   td3a.textContent = "Cours";
                   tr.appendChild(td1);
                   tr.appendChild(td2);
                   tr.appendChild(td3);
                   td3.appendChild(td3a);
                   document.getElementById("tbody").appendChild(tr);
                   
                   //pas vide retour
                   document.getElementById('back').onclick = function(){
                       document.getElementById('content-table').style.display = 'none';
                       for(let i = 0; i < document.getElementById("tbody").rows.length; i++){
                           if(document.getElementById("trTable")){
                               document.getElementById("tbody").removeChild(document.getElementById("trTable"));
                            }
                        }
                        afficheCours();
                    }
                }
            }else{
               document.getElementById('back').onclick = function(){
                   document.getElementById('content-table').style.display = 'none';
                   for(let i = 0; i < document.getElementById("tbody").rows.length; i++){
                       if(document.getElementById("trTable")){
                           document.getElementById("tbody").removeChild(document.getElementById("trTable"));
                        }
                    }
                    afficheCours();
                }
            }
       }
    }

}

function pageTd(){
    document.getElementById('content-table').style.display = 'block';
    document.getElementById('container').removeChild(document.getElementById("cardcourscrs"));
    document.getElementById('container').removeChild(document.getElementById("cardtpcrs"));
    document.getElementById('container').removeChild(document.getElementById("cardtdcrs"));
    for(let i = 0; i<cours.length; i++){
       if(document.getElementById('title-cours').textContent == cours[i].name){
           let nmtd = Object.values(cours[i].TD);
           console.log(nmtd);
           if(cours[i].TD != null){
               for(let j = 0; j< nmtd.length; j++){
                   let tr = document.createElement('tr');
                   tr.id = "trTable"
                   let td1 = document.createElement('td');
                   td1.id = "numTable";
                   td1.textContent = nmtd[j].index;
                   let td2 = document.createElement('td');
                   td2.id = "nomTable";
                   td2.textContent = nmtd[j].Titre;
                   let td3 = document.createElement('td');
                   td3.id = "pdfTable";
                   let td3a = document.createElement('a')
                   td3a.href = nmtd[j].pdf;
                   td3a.textContent = "TD";
                   tr.appendChild(td1);
                   tr.appendChild(td2);
                   tr.appendChild(td3);
                   td3.appendChild(td3a);
                   document.getElementById("tbody").appendChild(tr);
                   
                   //pas vide retour
                   document.getElementById('back').onclick = function(){
                       document.getElementById('content-table').style.display = 'none';
                       for(let i = 0; i < document.getElementById("tbody").rows.length; i++){
                           if(document.getElementById("trTable")){
                               document.getElementById("tbody").removeChild(document.getElementById("trTable"));
                            }
                        }
                        afficheCours();
                    }
                }
            }else{
               document.getElementById('back').onclick = function(){
                   document.getElementById('content-table').style.display = 'none';
                   for(let i = 0; i < document.getElementById("tbody").rows.length; i++){
                       if(document.getElementById("trTable")){
                           document.getElementById("tbody").removeChild(document.getElementById("trTable"));
                        }
                    }
                    afficheCours();
                }
                
            }
       }
    }

}

function pageTp(){
    document.getElementById('content-table').style.display = 'block';
    document.getElementById('container').removeChild(document.getElementById("cardcourscrs"));
    document.getElementById('container').removeChild(document.getElementById("cardtpcrs"));
    document.getElementById('container').removeChild(document.getElementById("cardtdcrs"));
    for(let i = 0; i<cours.length; i++){
       if(document.getElementById('title-cours').textContent == cours[i].name){
           let nmtp = Object.values(cours[i].TP);
           if(cours[i].TP != null){
               for(let j = 0; j< nmtp.length; j++){
                   let tr = document.createElement('tr');
                   tr.id = "trTable"
                   let td1 = document.createElement('td');
                   td1.id = "numTable";
                   td1.textContent = nmtp[j].index;
                   let td2 = document.createElement('td');
                   td2.id = "nomTable";
                   td2.textContent = nmtp[j].Titre;
                   let td3 = document.createElement('td');
                   td3.id = "pdfTable";
                   let td3a = document.createElement('a')
                   td3a.href = nmtp[j].pdf;
                   td3a.textContent = "TP";
                   tr.appendChild(td1);
                   tr.appendChild(td2);
                   tr.appendChild(td3);
                   td3.appendChild(td3a);
                   document.getElementById("tbody").appendChild(tr);
                   
                   //pas vide retour
                   document.getElementById('back').onclick = function(){
                       document.getElementById('content-table').style.display = 'none';
                       for(let i = 0; i < document.getElementById("tbody").rows.length; i++){
                           if(document.getElementById("trTable")){
                               document.getElementById("tbody").removeChild(document.getElementById("trTable"));
                            }
                        }
                        afficheCours();
                    }
                }
            }else{
               document.getElementById('back').onclick = function(){
                   document.getElementById('content-table').style.display = 'none';
                   for(let i = 0; i < document.getElementById("tbody").rows.length; i++){
                       if(document.getElementById("trTable")){
                           document.getElementById("tbody").removeChild(document.getElementById("trTable"));
                        }
                    }
                    afficheCours();
                }
            }
       }
    }

}