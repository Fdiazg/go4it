// const menu = document.querySelector('#menu-icon');
// const navbar = document.querySelector('.navB');

// menu.onclick = () => {
//     menu.classList.toggle('bi-chevron-double-up');
//     navbar.classList.toggle('open')
// }

//NAV RESPONSIVE
function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}

//API PAISES

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
            //   console.log(pais.ccn3)
            output += `<option value="${pais.name}"> ${pais.name} </option>`;
        });
        // console.log(output)
        seleccionPaises.innerHTML = output;
    })
    .catch(err => {
        console.log(err);
    })

});