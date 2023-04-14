const form = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const apellidos = document.getElementById('apellidos');
const edad = document.getElementById('edad');
const sexo = document.getElementById('sexo');
const fechaNac = document.getElementById('fechaNac');
const via = document.getElementById('via');
const nombreVia = document.getElementById('nombreVia');
const portal = document.getElementById('portal');
const planta = document.getElementById('planta');
const puerta = document.getElementById('puerta');
const codigoPostal = document.getElementById('codigoPostal');
const localidad = document.getElementById('localidad');
const provincia = document.getElementById('provincia');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const fotografia = document.getElementById('fotografia');

function validateForm(event) {
  // Validación del campo nombre
  if (nombre.value === '') {
    nombre.style.border = '1px solid red';
    event.preventDefault();
  } else {
    nombre.style.border = '';
  }
  // Validación del campo apellidos
  if (apellidos.value === '') {
    apellidos.style.border = '1px solid red';
    event.preventDefault();
  } else {
    apellidos.style.border = '';
  }
  // Validación del campo edad
  if (edad.value === '') {
    edad.style.border = '1px solid red';
    event.preventDefault();
  } else {
    edad.style.border = '';
  }
  // Validación del campo sexo
  if (sexo.value === '') {
    sexo.style.border = '1px solid red';
    event.preventDefault();
  } else {
    sexo.style.border = '';
  }
  // Validación del campo fechaNac
  if (fechaNac.value === '') {
    fechaNac.style.border = '1px solid red';
    event.preventDefault();
  } else {
    fechaNac.style.border = '';
  }
  // Validación del campo via
  if (via.value === '') {
    via.style.border = '1px solid red';
    event.preventDefault();
  } else {
    via.style.border = '';
  }
  // Validación del campo nombreVia
  if (nombreVia.value === '') {
    nombreVia.style.border = '1px solid red';
    event.preventDefault();
  } else {
    nombreVia.style.border = '';
  }
  // Validación del campo portal
  if (portal.value === '') {
    portal.style.border = '1px solid red';
    event.preventDefault();
  } else {
    portal.style.border = '';
  }
  // Validación del campo planta
  if (planta.value === '') {
    planta.style.border = '1px solid red';
    event.preventDefault();
  } else {
    planta.style.border = '';
  }
  // Validación del campo puerta
  if (puerta.value === '') {
    puerta.style.border = '1px solid red';
    event.preventDefault();
  } else {
    puerta.style.border = '';
  }

  // Verificar si la provincia es "Sevilla" y la localidad es "Dos Hermanas"
  if (
    provincia.value.toLowerCase() === 'sevilla' &&
    localidad.value.toLowerCase() === 'dos hermanas'
  ) {
    // Verificar si el código postal es válido
    if (
      codigoPostal.value === '1000' ||
      codigoPostal.value === '1001' ||
      codigoPostal.value === '1002' ||
      codigoPostal.value === '1003'
    ) {
      console.log('El código postal es válido');
    } else {
      alert('El código postal no es válido');
      localidad.style.border = '1px solid red';
    }
  }

  // Validación del campo localidad
  if (localidad.value === '') {
    localidad.style.border = '1px solid red';
    event.preventDefault();
  } else {
    localidad.style.border = '';
  }
  // Validación del campo provincia
  if (provincia.value === '') {
    provincia.style.border = '1px solid red';
    event.preventDefault();
  } else {
    provincia.style.border = '';
  }

  // Validación del campo email
  if (email.value === '') {
    email.style.border = '1px solid red';
    event.preventDefault();
  } else if (!email.checkValidity()) {
    email.style.border = '1px solid red';
    event.preventDefault();
  } else {
    email.style.border = '';
  }
  // Validación del campo telefono
  if (telefono.value === '') {
    telefono.style.border = '1px solid red';
    event.preventDefault();
  } else {
    telefono.style.border = '';
  }
  // Validación del campo fotografia
  if (fotografia.value === '') {
    fotografia.style.border = '1px solid red';
    event.preventDefault();
  } else {
    fotografia.style.border = '';
  }
}

form.addEventListener('submit', validateForm);
