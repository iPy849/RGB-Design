document.addEventListener("DOMContentLoaded", () => {
    var burgerButton = document.querySelector(".burger-icon");

    // Hambureguesa de navegacion responsiva
    burgerButton.addEventListener("click", function(){
        let state = this.dataset.state;

        if(state === "on"){
            this.dataset.state = "off"
            document.querySelector(".burger-icon > i").setAttribute('class', "icon-menu");
            document.querySelector(".burger > ul").setAttribute('style', "height: 0;"); 
        }
        else{
            this.dataset.state = "on"
            document.querySelector(".burger-icon > i").setAttribute('class', "icon-close"); 
            document.querySelector(".burger > ul").setAttribute('style', "height: 100%;"); 
        }
    });
});