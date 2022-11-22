// creo l'array contenente gli oggetti immagini
const msImgSlider = [ 
    { 
        image: 'img/01.webp', 
        title: 'Marvel\'s Spiderman Miles Morale', 
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.' 
    },

    { 
        image: 'img/02.webp', 
        title: 'Ratchet & Clank: Rift Apart', 
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.'
    }, 

    { 
        image: 'img/03.webp', 
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos." 
    }, 
    
    { 
        image: 'img/04.webp', 
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city' 
    }, 
    
    { 
        image: 'img/05.webp', 
        title: "Marvel's Avengers", 
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.' 
    }];
console.log(msImgSlider);

// richiamo il container in cui inserire gli oggetti
const msImgContainer = document.getElementById("imgContainer");

// creo il ciclo forEach per inserire gli oggeti immagine nello slider
msImgSlider.forEach((elem, index) => 
    {
        let msImg = index == 0? createElementTwoClass("div", "ms_img", "ms_active") : createElement("div", "ms_img");
    
        let imgSld = createElement("img", "image_slider");
        imgSld.src = elem.image;
        msImg.appendChild(imgSld);

        let ctnTitleDesc = createElement ("div", "ctn_title_desc");

        let titleImg = createElement("h2", "ms_title_img");
        titleImg.innerHTML = elem.title;
        ctnTitleDesc.appendChild(titleImg);

        let descImg = createElement("p", "ms_desc_img");
        descImg.innerHTML = elem.text;
        ctnTitleDesc.appendChild(descImg);

        msImg.appendChild(ctnTitleDesc);

        msImgContainer.appendChild(msImg);

});


// creo la costante per richimare le immagini dello slider
const imgSlider = document.getElementsByClassName("ms_img");
console.log(imgSlider);

// creo la costante che mi permetterà di switchare tra le varie immagini la classe ms_active
// do alla costante un valore iniziale di 0 poichè al caricamento della pagina si trova all'elemento 0
let msActive = 0;

// creo la costante e le condizioni per il next
let msNext = document.querySelector(".ms_next");
msNext.addEventListener('click',

    function() {

        if (msActive < imgSlider.length -1){
            // togli la classe ms_active all'immagine iniziale
            imgSlider[msActive].classList.remove('ms_active');
            // poi faccio incrementare msActive
            msActive++;
            // così posso aggiungere la classe ms_active all'immagine successiva
            imgSlider[msActive].classList.add('ms_active');

        } else {
            imgSlider[msActive].classList.remove('ms_active');
            msActive = 0;
            imgSlider[msActive].classList.add('ms_active');
        }
    }
);

// creo la costante e le condizioni per il prev
let msPrev = document.querySelector(".ms_prev");

msPrev.addEventListener('click',

    function() {

        if (msActive > 0) {
            // togli la classe ms_active all'immagine attuale
            imgSlider[msActive].classList.remove('ms_active');
            // poi faccio decrementare msActive
            msActive--;
            // così posso aggiungere la classe ms_active all'immagine precedente
            imgSlider[msActive].classList.add('ms_active');

        } else {
            imgSlider[msActive].classList.remove('ms_active');
            msActive = imgSlider.length -1;
            imgSlider[msActive].classList.add('ms_active');
        }
    }
);


// FUNZIONI
// Creo la funzione per generare vari elementi con una classe
function createElement (typeElement, classElement1) {
    // creo l'elemento
    const element = document.createElement(typeElement);
    element.classList.add(classElement1);

    // ritorno l'elemento
    return element;
} 

// Creo la funzione per generare vari elementi con due classi
function createElementTwoClass (typeElement, classElement1, classElement2) {
    // creo l'elemento
    const element = document.createElement(typeElement);
    element.classList.add(classElement1);
    element.classList.add(classElement2);

    // ritorno l'elemento
    return element;
} 