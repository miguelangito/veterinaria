
const nombre_propietario = document.querySelector("#name_person");
const nombre_mascota = document.querySelector("#name_pet");
const telefono_propietario = document.querySelector("#telefono_propietario");
const dia_cita = document.querySelector("#date_cite");
const hora_cita = document.querySelector("#time_cite");
const sintomas = document.querySelector("#description");
const panel_cita = document.querySelectorAll("#cite_panel span");

const datos = {
  nom_prop: nombre_propietario.value,
  nom_masc: nombre_mascota.value,
  tel_prop: telefono_propietario.value,
  dia: dia_cita.value,
  hora: hora_cita.value,
  sinto: sintomas.value
}

document.querySelector("#btn_submit").addEventListener("click", (event) => {
  event.preventDefault()
  document.querySelector("#name_owner_cite").textContent = nombre_propietario.value;
  document.querySelector("#name_pet_cite").textContent = nombre_mascota.value;
  document.querySelector("#num_pet_cite").textContent = telefono_propietario.value;
  document.querySelector("#cite_date").textContent = dia_cita.value;
  document.querySelector("#time_date").textContent = hora_cita.value;
  document.querySelector("#symptoms").textContent = sintomas.value;
  
  panel_cita.forEach((panel) => { panel.style.opacity = 1 });
  
})

document.querySelector("#btn_eliminar").addEventListener("click", function () {
  panel_cita.forEach((panel) => { panel.textContent = "informacion"; panel.style.opacity = 0; })
})

localStorage.setItem("datos", JSON.stringify(datos))
