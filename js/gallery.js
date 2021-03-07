document.addEventListener("DOMContentLoaded", () => {
    var myTypo = document.querySelectorAll(".myTypo");
    var staffGallerySlides = document.getElementById('staff');
    var gallery = document.getElementById("gallery");

    // Este bloque convierte los textos designados por la clase myTypo y los
    // separa en div con clases para efectos el texto
    myTypo.forEach(function(myTypoElement) {
        myTypoElement.innerHTML += "|||";

        for (const word of myTypoElement.innerHTML.split(' ')){
            const span = document.createElement('span');
            span.setAttribute('class', 'text-span');
            span.innerHTML = word + ' ';
            myTypoElement.appendChild(span);
        }

        myTypoElement.innerHTML = myTypoElement.innerHTML.split("|||")[1];
    })

    //Aquí se controla el efecto de slide images de staff
    for(let i = 0; i < staffGallerySlides.childElementCount; i++){
        const element = staffGallerySlides.children.item(i);
        element.addEventListener('mouseover', () => {
            element.dataset.hover = true;
        });
        element.addEventListener('mouseleave', () => {
            element.dataset.hover = false;
        });
    }

    //Aquí se controla la galería
    function GalleryArrange() {

        for (let item of gallery.children) {
            if(item.innerHTML === "")
                gallery.removeChild(item)
        }

        let gridSize = 0;

        if (window.screen.width < 375)
            gridSize = 1;
        else if (window.screen.width < 568)
            gridSize = 2;
        else if (window.screen.width <= 768)
            gridSize = 3;
        else
            gridSize = 4;

        console.log(gridSize);
        

        if (gallery.childElementCount % gridSize !== 0){
            const leftCells = gallery.childElementCount % gridSize;
            for (let i = 0; i < leftCells; i++) {
                const newElement = document.createElement('a');
                newElement.style.visibility = "hidden";

                gallery.append(newElement);
            }
        }
    }

    GalleryArrange();
    window.addEventListener('resize', GalleryArrange);

});