// creo l'array contenente le immagini
const msImgSlider = ["img/01.webp","img/02.webp","img/03.webp","img/04.webp","img/05.webp",];

console.log(msImgSlider);

const msImgContainer = document.getElementById("imgContainer");

// creo il ciclo for per inserire le immagini nello slider
for (let i = 0; i < msImgSlider.length;  i++) {
    // creo il contenitore della singola immagine
    let imgDiv = document.createElement("div");
    // creo le condizioni per insirerire le classi nel contenitore
    if (i == 0) {
        imgDiv.className = "ms_img ms_active";
    } else {
        imgDiv.className = "ms_img";
    }

    // imgDiv.className = i == 0? "ms_img ms_active": "ms_img"; IF INLINE POSSO USARLO? 

    // creo il tag img
    let img = document.createElement("img");

    // inserisco src al tag img
    img.src = msImgSlider[i];

    // compongo l'elemento dello slider
    imgDiv.appendChild(img);

    msImgContainer.appendChild(imgDiv);

}

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

        if (msActive < imgSlider.length -1) {
            // togli la classe ms_active all'immagine iniziale
            imgSlider[msActive].classList.remove('ms_active');

            // poi faccio incrementare msActive
            msActive++

            // così posso aggiungere la classe ms_active all'immagine successiva
            imgSlider[msActive].classList.add('ms_active')
        }

    }

)

// creo la costante e le condizioni per il prev
let msPrev = document.querySelector(".ms_prev");

msPrev.addEventListener('click',

    function() {

        if (msActive > imgSlider.length - imgSlider.length) {
            // togli la classe ms_active all'immagine attuale
            imgSlider[msActive].classList.remove('ms_active');

            // poi faccio decrementare msActive
            msActive--

            // così posso aggiungere la classe ms_active all'immagine precedente
            imgSlider[msActive].classList.add('ms_active')
        }

    }

)