const hora = document.querySelector("#hora")
const minuto = document.querySelector("#minuto")
const segundo = document.querySelector("#segundo")

const relogio = setInterval(function time(){
  const dataHoje = new Date();
  let horas = dataHoje.getHours();
  let minutos = dataHoje.getMinutes();
  let segundos = dataHoje.getSeconds();

  if(horas < 10) horas = "0" + horas;
  if(minutos < 10) minutos = "0" + minutos;
  if(segundos < 10) segundos = "0" + segundos;

  hora.textContent = horas;
  minuto.textContent = minutos;
  segundo.textContent = segundos;

})

