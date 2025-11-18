function mostrarResultado(tipo, id, mensaje) {
  const cont = document.getElementById(id);
  cont.className = "alert alert-" + tipo;
  cont.textContent = mensaje;
  cont.classList.remove("d-none");
}

function calculoEdad() {
  const Nedad = parseInt(document.getElementById("NumEdad").value);

  if (isNaN(Nedad)) {
    mostrarResultado('warning', "resultadoEdad", "Ingrese un número válido.");
    return;
  }

  if (Nedad >= 1 && Nedad < 4) {
    mostrarResultado('success', "resultadoEdad", "Esa persona entra GRATIS");
  } 
  else if (Nedad >= 4 && Nedad <= 8) {
    mostrarResultado('success', "resultadoEdad", "Esa persona paga $2");
  } 
  else if (Nedad >= 9 && Nedad <= 16) {
    mostrarResultado('success', "resultadoEdad", "Esa persona paga $5");
  } 
  else if (Nedad >= 17 && Nedad <= 35) {
    mostrarResultado('success', "resultadoEdad", "Esa persona paga $7");
  } 
  else if (Nedad > 35) {
    mostrarResultado('success', "resultadoEdad", "Esa persona paga $10");
  }
}

function clasificarEmpleado() {
  const codigo = parseInt(document.getElementById("codigoEmpleado").value);

  if (codigo.length !== 3 || isNaN(codigo)) {
    mostrarResultado('danger', 'resultadoCodigo', "Ingrese un código válido de 3 dígitos.");
    return;
  }

  let pares = 0;
  for (let digito of codigo) {
    if (parseInt(digito) % 2 === 0) { 
      pares++;
    }
  }
  let categoria = "";
  switch (pares) {
    case 3: categoria = "Director General"; break;
    case 2: categoria = "Directivo"; break;
    case 1: categoria = "Staff"; break;
    case 0: categoria = "Seguridad"; break;
  }

  mostrarResultado('success', 'resultadoCodigo', "Categoría: " + categoria);
}

function calcularPendiente() {
  const x1 = parseFloat(document.getElementById("x1").value);
  const x2 = parseFloat(document.getElementById("x2").value);
  const y1 = parseFloat(document.getElementById("y1").value);
  const y2 = parseFloat(document.getElementById("y2").value);

  // Validación correcta
  if (isNaN(x1) || isNaN(x2) || isNaN(y1) || isNaN(y2)) {
    mostrarResultado('danger', 'resultadoPendiente', "Por favor, complete todos los campos con números.");
    return;
  }

  // División entre cero
  if (x2 - x1 === 0) {
    mostrarResultado('danger', 'resultadoPendiente', "La pendiente es indefinida (división entre cero).");
    return;
  }

  const m = (y2 - y1) / (x2 - x1);

  mostrarResultado('success', 'resultadoPendiente', "La pendiente es: " + m.toFixed(2));
}
function calcularClima() {
  const temp = parseFloat(document.getElementById("temperatura").value);
  const hum = parseFloat(document.getElementById("humedad").value);

  if (isNaN(temp) || isNaN(hum)) {
    mostrarResultado('danger', 'resultadoClima', "Por favor ingrese valores válidos.");
    return;
  }

  let mensaje = "";

  if (temp < 10) {
    mensaje = "Clima frío";
  }
  else if (temp >= 10 && temp <= 25) {
    if (hum < 60) mensaje = "Clima templado y seco";
    else mensaje = "Clima templado y húmedo";
  }
  else if (temp >= 26 && temp <= 35) {
    mensaje = "Clima cálido";
  }
  else if (temp > 35) {
    mensaje = "Clima caluroso extremo, mantente hidratado";
  }
  else {
    mensaje = "Valores fuera de rango, verifica los datos";
  }

  mostrarResultado('success', 'resultadoClima', mensaje);
}
