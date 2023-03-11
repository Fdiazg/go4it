
// TODO API PAISES

document.addEventListener('DOMContentLoaded', () => {

    const seleccionPaises = document.querySelector('#pais');
    // https://restcountries.com/v3.1/all
    fetch('https://restcountries.com/v2/all')

        .then(res => {
            return res.json();
        })
        .then(data => {
            let output = '';
            output = `<option disabled selected> Seleccione su país</option> `
            data.forEach(pais => {
                // console.log(pais)
                output += `<option value="${pais.name}"> ${pais.name} </option>`;
            });
            // console.log(output)
            seleccionPaises.innerHTML = output;
        })
        .catch(err => {
            console.log(err);
        })

});



// TODO borrar FORM
document.addEventListener('DOMContentLoaded', function(){
    let formulario = document.getElementById('form');
    formulario.addEventListener('submit', function(event) {
      setTimeout(function() {
        formulario.reset();
      }, 1500);
    });
  });


  window.addEventListener('load', function() {
    var form = document.getElementById('form');
    form.reset();
  });


// TODO TOGGLE

let menuButton = document.querySelector(".open-menu");

document.addEventListener("DOMContentLoaded", function () {

    menuButton.addEventListener("click", ()=>{
        menuButton.classList.toggle("open-menu--open");
    });




    window.addEventListener("keydown", function (event) {

        if (event.keyCode === 27) {
            menuButton.classList.remove("open-menu--open");
        }

    });

});



document.addEventListener("click", function(event) {
    // Verifica si el clic se realizó dentro del toggle o en el botón que lo abre
    if (!event.target.closest(".open-menu") && !event.target.closest(".open-menu--open")) {
        // Verifica si el clic se realizó en el elemento que deseas excluir
        if (!event.target.closest(".exclude-open")) {
            // Cierra el toggle
            menuButton.classList.remove("open-menu--open");
        }
    }
});





// TODO Despliegue cursos

cursosIngles = document.querySelector("#cursos");
dropCursos = document.querySelector('.dropCursos');

cursosIngles.addEventListener('click', () => {
    dropCursos.classList.toggle('dropCursos')
    
})

irlanda = document.querySelector("#irlanda")

irlanda.addEventListener('click', () =>{
    dropCursos.classList.toggle('dropCursos')
    menuButton.classList.remove("open-menu--open");

} )




//TODO Hace un scrollbar a las otras secciones bien nuestrasEscuelas


const links = document.querySelectorAll('.main-nav__link-activo');

// agrega un evento de clic a cada enlace
links.forEach(link => {
  link.addEventListener('click', (event) => {
    // previene el comportamiento predeterminado del enlace
    event.preventDefault();

    // obtiene la altura de la navbar fija
    const navbarHeight = document.getElementById('navbar-fixed').offsetHeight;
    console.log(navbarHeight)

    // obtiene la sección de destino a partir del data atributo del enlace
    const destino = event.target.dataset.destino;
    console.log(event.target.dataset.destino)

    // obtiene la posición de desplazamiento de la sección de destino
    const offset = document.getElementById(destino).offsetTop;
    console.log(offset)
    // ajusta la posición de desplazamiento para tener en cuenta la altura de la navbar fija
    const scrollPosition = offset - navbarHeight;

    // desplaza la ventana a la posición ajustada
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  });
});
