const nombre_propietario = document.querySelector("#name_person");
const nombre_mascota = document.querySelector("#name_pet");
const telefono_propietario = document.querySelector("#telefono_propietario");
const dia_cita = document.querySelector("#date_cite");
const hora_cita = document.querySelector("#time_cite");
const sintomas = document.querySelector("#description");
const panel_cita = document.querySelectorAll("#cite_panel span");

const datos = {
    nom_prop: "",
    nom_masc: "",
    tel_prop: "",
    dia: "",
    hora: "",
    sinto: ""
}

document.querySelector("#btn_eliminar").addEventListener("click", () => {
    document.querySelector("#btn_submit").textContent = "Enviar"
})

document.querySelector("#btn_submit").addEventListener("click", (event) => {
  event.preventDefault()
  datos.dia = dia_cita.value
  datos.hora = hora_cita.value
  datos.nom_masc = nombre_mascota.value
  datos.nom_prop = nombre_propietario.value
  datos.tel_prop = telefono_propietario.value
  datos.sinto = sintomas.value

  localStorage.setItem("datos", JSON.stringify(datos))
  
  document.querySelector("#name_owner_cite").textContent = nombre_propietario.value;
  document.querySelector("#name_pet_cite").textContent = nombre_mascota.value;
  document.querySelector("#num_pet_cite").textContent = telefono_propietario.value;
  document.querySelector("#time_date").textContent = hora_cita.value;
  document.querySelector("#cite_date").textContent = dia_cita.value;
  document.querySelector("#symptoms").textContent = sintomas.value;
  
  nombre_mascota.textContent = ""
  nombre_propietario.textContent = ""
  dia_cita.textContent = ""
  hora_cita.textContent = ""
  sintomas.textContent = ""
  telefono_propietario.textContent = ""

  panel_cita.forEach((panel) => { panel.style.opacity = 1 });
  
  if (event) {
    cambiar_nom_btn()
  
  }
  
})

function cambiar_nom_btn() {
  document.querySelector("#btn_submit").textContent = "Editar"
}

document.querySelector("#btn_eliminar").addEventListener("click", function () {
  panel_cita.forEach((panel) => { panel.textContent = "informacion"; panel.style.opacity = 0; })
})

