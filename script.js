const morgan=document.querySelector("#deMorganRetrato");
const morganExtra=document.querySelector("#morganExtra");
morgan.addEventListener("click",()=>{
  morgan.classList.add("none")
  morganExtra.classList.remove("none")
})

morganExtra.addEventListener("click",()=>{
  morganExtra.classList.add("none")
  morgan.classList.remove("none")
})


const terceraDiapo=document.querySelector("#terceraDiapo");
const colNota=terceraDiapo.querySelector(".col1");

const maquina=colNota.querySelector("#cuerpoCol1");
const turing=colNota.querySelector("#cuerpoCol12");


colNota.addEventListener("click",()=>{
    subtitulo.textContent="";
    maquina.classList.toggle("none");
    turing.classList.toggle("none");
})