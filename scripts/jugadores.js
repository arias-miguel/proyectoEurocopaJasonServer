let btnGuardar = document.getElementById("btnGuardar");
let btnCorreo = document.getElementById("btnCorreo");
let btnEditar = document.getElementById("btnEditar");
let btnEliminar = document.getElementById("btnEliminar");

let formulario = document.getElementById("formulario");
const url = "http://localhost:4000/barcelona/";
const urlLi = "http://localhost:4000/liverpool/";

//------------Guardar----------------/
formulario.addEventListener("submit", async (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let paiso = document.getElementById("pais").value;
  let edad = document.getElementById("edad").value;
  let link = document.getElementById("imgBandera").value;
  let img = document.getElementById("imgJugador").value;
  let equipo = document.getElementById("equipo");
  let posicionC = document.getElementById("posicion").value;
  let camiseta = document.getElementById("id").value;
  let team = "barcelona";
  console.log(team, equipo.value);
  if (equipo.value === team) {
    let resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        id: camiseta,
        nombre: name,
        pais: paiso,
        años: edad,
        banderaPais: link,
        imagen: img,
        posicion: posicionC,
      }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    let data = await resp.json();
    console.log(data);
  } else {
    let respt = await fetch(urlLi, {
      method: "POST",
      body: JSON.stringify({
        id: camiseta,
        nombre: name,
        pais: paiso,
        años: edad,
        banderaPais: link,
        imagen: img,
        posicion: posicionC,
      }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    let data = await respt.json();
    console.log(data);
  }
});

//------------Buscar----------------/
let btnBuscar = document.getElementById("btnBuscar");

btnBuscar.addEventListener("click", async () => {
  let equipo = document.getElementById("equipo").value;
  let contenedor = document.getElementById('contenedorFotojugador')
  let containerBandera =document.getElementById("containerBandera")
  let name = document.getElementById("name").value;
 

  if (equipo == "liverpool") {
   
    let resp = await fetch("http://localhost:4000/liverpool/");
    let data = await resp.json();
    console.log(data);
    let buscarNombre = data.find((user) => user.nombre === name);

    const { pais, años,imagen ,banderaPais, posicion, id } = buscarNombre;
    document.getElementById("pais").value = pais
    document.getElementById("edad").value = años
    document.getElementById("posicion").value = posicion
    document.getElementById("id").value = id
    document.getElementById("imgBandera").value=banderaPais
    document.getElementById("imgJugador").value = imagen
    //bandera
    contenedor.innerHTML=" "
    const bandera = document.createElement("img")
    bandera.setAttribute("src", banderaPais)
    bandera.classList.add("bandera")
    containerBandera.appendChild(bandera)
    //foto del jugador
    contenedor.innerHTML=" "
    const foto = document.createElement("img")
    foto.setAttribute("src", imagen)
    foto.classList.add("foto")
    contenedor.appendChild(foto)
    
    
  }else if(equipo == "barcelona"){
    
   

    let resp = await fetch("http://localhost:4000/barcelona/");
    let data = await resp.json();
    console.log(data);
    let buscarNombre = data.find((user) => user.nombre === name);

    const { años,imagen ,banderaPais, posicion, id } = buscarNombre;
    document.getElementById("pais").value = buscarNombre.pais
    document.getElementById("edad").value = años
    document.getElementById("posicion").value = posicion
    document.getElementById("id").value = id
    document.getElementById("imgBandera").value=banderaPais
    document.getElementById("imgJugador").value = imagen
    //bandera
    contenedor.innerHTML=" "
    const bandera = document.createElement("img")
    bandera.setAttribute("src", banderaPais)
    bandera.classList.add("bandera")
    containerBandera.appendChild(bandera)
    //foto del jugador
    contenedor.innerHTML=" "
    const foto = document.createElement("img")
    foto.setAttribute("src", imagen)
    foto.classList.add("foto")
    contenedor.appendChild(foto)
  }
});

//-------------Editar---------------/
btnEditar.addEventListener("click", async (e) => {
 
  let equipo = document.getElementById("equipo").value
 // let name = document.getElementById("name").value;
 // let lastNameM = document.getElementById("lastName").value;
 // let emailM = document.getElementById("email").value;
 // let idM = document.getElementById("id").value;
 //{ años,imagen ,banderaPais, posicion, id }
 let name = document.getElementById("name").value;
 let pais = document.getElementById("pais").value 
 let edad =document.getElementById("edad").value 
 let posicion =document.getElementById("posicion").value 
 let camiseta =document.getElementById("id").value 
 let bandera =document.getElementById("imgBandera").value
 let imgjugador =document.getElementById("imgJugador").value 

 
if(equipo=="barcelona"){
  let resp = await fetch(url + camiseta, {
    method: "PUT",
    body: JSON.stringify({
      nombre:name ,
      pais:pais,
      años:edad,
      posicion:posicion,
      id:camiseta,
      banderaPais:bandera,
      imagen:imgjugador
    }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  let data = await resp.json();
  console.log(data)
}else if(equipo=="liverpool"){
  let resp = await fetch(urlLi + camiseta, {
    method: "PUT",
    body: JSON.stringify({
      nombre:name ,
      pais:pais,
      años:edad,
      posicion:posicion,
      id:camiseta,
      banderaPais:bandera,
      imagen:imgjugador
    }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  let data = await resp.json();

}
 
});

//------------Eliminar----------------/

btnEliminar.addEventListener("click", async () => {
  let equipo = document.getElementById("equipo");
  let team = "barcelona";
  if (equipo.value == team) {
    let idEliminar = document.getElementById("id").value;

    let resp = await fetch(url + idEliminar, {
      method: "DELETE",
    });
    let data = await resp.json();
    console.log(data);
  } else {
    let idEliminar = document.getElementById("id").value;

    let respt = await fetch(urlLi + idEliminar, {
      method: "DELETE",
    });
    let data = await respt.json();
    console.log(data);
  }
});
