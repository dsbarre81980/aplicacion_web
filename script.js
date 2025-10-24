// Mensaje de bienvenida con condicional if/else
window.addEventListener('load', function() {
  var hora = new Date().getHours();
  if (hora >= 6 && hora < 12) {
    alert('¡Buenos días! Bienvenido a la Iglesia Católica Anglicana.');
  } else if (hora >= 12 && hora < 18) {
    alert('¡Buenas tardes! Bienvenido a la Iglesia Católica Anglicana.');
  } else {
    alert('¡Buenas noches! Bienvenido a la Iglesia Católica Anglicana.');
  }
});

// Fecha actual por defecto (zona horaria local)
document.addEventListener('DOMContentLoaded', function() {
  var today = new Date();
  var localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000);
  document.getElementById('fecha').value = localDate.toISOString().split('T')[0];
  
  // Mostrar horarios de misas con bucle for
  mostrarHorariosMisas();
});

// Función para mostrar horarios con bucle
function mostrarHorariosMisas() {
  var horarios = [
    { dia: 'Lunes', hora: '7:00 AM - Oración Matutina' },
    { dia: 'Lunes', hora: '6:00 PM - Oración Vespertina' },
    { dia: 'Miércoles', hora: '5:30 PM - Grupo Juvenil' },
    { dia: 'Domingo', hora: '10:00 AM - Santa Misa' }
  ];
  
  var horariosHTML = '<strong>Horarios generados dinámicamente:</strong><br>';
  
  // Bucle for para recorrer horarios
  for (var i = 0; i < horarios.length; i++) {
    horariosHTML += '• ' + horarios[i].dia + ': ' + horarios[i].hora + '<br>';
  }
  
  // Mostrar en la página web
  var elemento = document.getElementById('horariosLista');
  if (elemento) {
    elemento.innerHTML = horariosHTML;
  }
  
  // También mostrar en consola
  console.log('=== HORARIOS DE ACTIVIDADES ===');
  for (var j = 0; j < horarios.length; j++) {
    console.log(horarios[j].dia + ': ' + horarios[j].hora);
  }
}

// Manejo del formulario con validación de edad
var contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var fechaNacimiento = document.getElementById('fechaNacimiento').value;
    
    if (fechaNacimiento) {
      var edad = calcularEdad(fechaNacimiento);
      
      // Operadores de comparación para validar edad
      if (edad >= 18) {
        document.getElementById('mensajeEnviado').style.display = 'block';
        document.getElementById('mensajeEnviado').className = 'alert alert-success mt-3';
        document.getElementById('mensajeEnviado').textContent = '¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.';
        e.target.reset();
        var today = new Date();
        var localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000);
        document.getElementById('fecha').value = localDate.toISOString().split('T')[0];
      } else {
        document.getElementById('mensajeEnviado').style.display = 'block';
        document.getElementById('mensajeEnviado').className = 'alert alert-danger mt-3';
        document.getElementById('mensajeEnviado').textContent = 'No se pudo enviar el correo. Debes ser mayor de 18 años.';
      }
    }
    
    setTimeout(function() {
      document.getElementById('mensajeEnviado').style.display = 'none';
      document.getElementById('mensajeEnviado').className = 'alert alert-success mt-3';
    }, 5000);
  });
}

// Función para calcular edad con operadores de comparación
function calcularEdad(fechaNacimiento) {
  var hoy = new Date();
  var nacimiento = new Date(fechaNacimiento);
  var edad = hoy.getFullYear() - nacimiento.getFullYear();
  var mes = hoy.getMonth() - nacimiento.getMonth();
  
  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  
  return edad;
}
