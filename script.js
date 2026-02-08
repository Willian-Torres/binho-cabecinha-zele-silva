// Defina a data inicial do cronômetro
const dataInicial = new Date("2026-01-25T11:49:00");

function atualizarCronometro() {
  const agora = new Date();

  let anos = agora.getFullYear() - dataInicial.getFullYear();
  let meses = agora.getMonth() - dataInicial.getMonth();
  let dias = agora.getDate() - dataInicial.getDate();

  let horas = agora.getHours() - dataInicial.getHours();
  let minutos = agora.getMinutes() - dataInicial.getMinutes();
  let segundos = agora.getSeconds() - dataInicial.getSeconds();

  // Ajustes negativos
  if (segundos < 0) {
    segundos += 60;
    minutos--;
  }

  if (minutos < 0) {
    minutos += 60;
    horas--;
  }

  if (horas < 0) {
    horas += 24;
    dias--;
  }

  if (dias < 0) {
    const ultimoDiaMesAnterior = new Date(
      agora.getFullYear(),
      agora.getMonth(),
      0
    ).getDate();
    dias += ultimoDiaMesAnterior;
    meses--;
  }

  if (meses < 0) {
    meses += 12;
    anos--;
  }

  document.getElementById("cronometro").innerHTML =
    `${anos} anos, ${meses} meses, ${dias} dias<br>` +
    `${horas}h ${minutos}m ${segundos}s`;
}

// Atualiza a cada segundo
setInterval(atualizarCronometro, 1000);
atualizarCronometro();