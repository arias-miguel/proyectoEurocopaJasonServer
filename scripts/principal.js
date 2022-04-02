alert("esta conectada")
let btnCategory1 = document.getElementById("btnCategory1")
let btnCategory2 = document.getElementById("btnCategory2")


 async function printData  (url){

    let container = document.getElementById("listarCard")
    let  datos = await fetch (url)
    let datosJ = await datos.json()
    console.log (datosJ)

    container.innerHTML= " "

    datosJ.forEach(element => {
        container.innerHTML +=`
        <div class="card" style="width: 18rem;">
  <img src="${element.imagen}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.nombre}</h5>
    <p class="card-text">El jugador tiene la posicion de ${element.posicion}, su pais de origen es ${element.pais} y tiene ${element.años} años</p>
    <img src="${element.banderaPais}" width="50px" heigth="50px">
  </div>
</div>
        `
        
    });    
}
btnCategory1.addEventListener("click", ()=>{
    printData("http://localhost:4000/barcelona")
})

btnCategory2.addEventListener("click",()=>{
    printData("http://localhost:4000/liverpool")
})


