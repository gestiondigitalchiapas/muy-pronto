// ============================================
// CONFIGURACIÓN DE GOOGLE ANALYTICS
// ============================================
//
// INSTRUCCIONES:
// 1. Reemplaza 'G-XXXXXXXXXX' con tu ID real de Google Analytics
// 2. Guarda este archivo
// 3. ¡Nunca más lo toques! Todas las actualizaciones de index.html
//    funcionarán automáticamente con esta configuración.
//
// Ejemplo: const GA_ID = 'G-ABC123XYZ';
// ============================================

const GA_ID = "G-VHTS4Y8GQ8"; // ← CONFIGURA AQUÍ TU ID DE GOOGLE ANALYTICS

// ============================================
// NO EDITES NADA DEBAJO DE ESTA LÍNEA
// ============================================

// Cargar script de Google Analytics dinámicamente
(function () {
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
})();

// Configurar Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", GA_ID);
