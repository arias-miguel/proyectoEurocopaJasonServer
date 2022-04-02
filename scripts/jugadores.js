let btnGuardar = document.getElementById('btnGuardar');
let btnCorreo = document.getElementById('btnCorreo');
let btnEditar = document.getElementById('btnEditar');
let btnEliminar = document.getElementById('btnEliminar');

let formulario = document.getElementById('formulario');
const url= 'http://localhost:4000/barcelona/';
const urlLi= 'http://localhost:4000/liverpool/';

//------------Guardar----------------/
formulario.addEventListener('submit', async (e)=>{
    e.preventDefault();
    let name = document.getElementById('name').value;
    let paiso = document.getElementById('pais').value;
    let edad = document.getElementById('edad').value
    let link = document.getElementById('link').value;
    let img = document.getElementById('img').value;
    let equipo = document.getElementById('equipo');
    let posicionC = document.getElementById('posicion').value;
    let camiseta = document.getElementById('id').value
    let team ='barcelona';
    console.log(team, equipo.value)
    if(equipo.value===team){
        let resp = await fetch(url, { 
            method: 'POST',
            body: JSON.stringify({
                id:camiseta,
                nombre: name,
                pais:paiso,
                años: edad,
                banderaPais: link,
                imagen: img,
                posicion: posicionC
            }),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            } 
        })
        let data = await resp.json()
        console.log(data)
    }else{
        let respt = await fetch(urlLi, { 
            method: 'POST',
            body: JSON.stringify({
                id:camiseta,
                nombre: name,
                pais:paiso,
                años: edad,
                banderaPais: link,
                imagen: img,
                posicion: posicionC
            }),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            } 
        })
        let data = await respt.json()
        console.log(data)
    }
   
})

//------------Buscar----------------/
btnCorreo.addEventListener("click", async () =>{

    let email = document.getElementById('email').value
    
    console.log(email)
    let resp = await fetch(url)
    let data = await resp.json()

   let buscarCorreo= data.find(user => user.correo === email)

    console.log(buscarCorreo)

    const {nombre, apellido, correo, id} = buscarCorreo
    document.getElementById('name').value = nombre
    document.getElementById('lastName').value = apellido
    document.getElementById('email').value = correo
   // document.getElementById('id').style.display='block'
  //  document.getElementById('label-edit').style.display='block'
    document.getElementById('id').value = id


})


//-------------Editar---------------/
btnEditar.addEventListener('click', async ()=>{
    let name = document.getElementById('name').value;
    let lastNameM = document.getElementById('lastName').value;
    let emailM = document.getElementById('email').value
    let idM= document.getElementById('id').value

    console.log(url+idM)
    let resp = await fetch(url+idM, {
        method: 'PUT',
        body: JSON.stringify({
            nombre: name,
            apellido:lastNameM,
            correo: emailM,
            id: idM
        }),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
    let data = await resp.json()
    console.log(data)
    
})


//------------Eliminar----------------/

btnEliminar.addEventListener('click', async() =>{
    let equipo = document.getElementById('equipo');
    let team ='barcelona';
    if(equipo.value==team){
    let idEliminar = document.getElementById('id').value

    let resp = await fetch(url+idEliminar, {
        method: 'DELETE'
    })
    let data = await resp.json()
    console.log(data)
    }else{
        let idEliminar = document.getElementById('id').value

        let respt = await fetch(urlLi+idEliminar, {
        method: 'DELETE'
    })
        let data = await respt.json()
        console.log(data)
    }

})