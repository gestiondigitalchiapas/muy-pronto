// ============================================
// TRACKING AVANZADO DE UBICACIÓN (OPCIONAL)
// ============================================
//
// Este archivo es OPCIONAL. Google Analytics ya rastrea
// ubicación básica (país, ciudad) automáticamente.
//
// USA ESTE ARCHIVO si quieres:
// - Coordenadas GPS exactas
// - Precisión de ubicación mejorada
// - Datos personalizados de ubicación
//
// INSTRUCCIONES:
// 1. Descomenta el código a continuación
// 2. Agrega <script src="location-tracking.js"></script> en index.html
// 3. El navegador pedirá permiso al usuario para acceder a su ubicación
// ============================================

// Solicitar ubicación precisa del usuario (requiere permiso)
if (navigator.geolocation && typeof gtag !== "undefined") {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // Ubicación obtenida con éxito
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const accuracy = position.coords.accuracy;

      // Enviar a Google Analytics como evento personalizado
      gtag("event", "user_location", {
        event_category: "location",
        latitude: lat.toFixed(6),
        longitude: lon.toFixed(6),
        accuracy_meters: Math.round(accuracy),
        location_string: `${lat.toFixed(6)},${lon.toFixed(6)}`,
      });

      console.log(
        `📍 Ubicación enviada a Analytics: ${lat.toFixed(4)}, ${lon.toFixed(4)}`,
      );
    },
    function (error) {
      // El usuario rechazó o hubo un error
      let errorMsg = "unknown";
      switch (error.code) {
        case error.PERMISSION_DENIED:
          errorMsg = "permission_denied";
          break;
        case error.POSITION_UNAVAILABLE:
          errorMsg = "position_unavailable";
          break;
        case error.TIMEOUT:
          errorMsg = "timeout";
          break;
      }

      gtag("event", "location_error", {
        event_category: "location",
        error_type: errorMsg,
      });

      console.log("❌ No se pudo obtener ubicación:", errorMsg);
    },
    {
      enableHighAccuracy: true, // Usar GPS si está disponible
      timeout: 10000, // 10 segundos máximo
      maximumAge: 300000, // Cache por 5 minutos
    },
  );
}

// ============================================
// ALTERNATIVA: Obtener ubicación desde IP (sin permiso)
// ============================================
// Usando un servicio externo gratuito para obtener ubicación aproximada

/*
fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'ip_location', {
                'event_category': 'location',
                'city': data.city,
                'region': data.region,
                'country': data.country_name,
                'postal': data.postal,
                'latitude': data.latitude,
                'longitude': data.longitude,
                'timezone': data.timezone
            });
            
            console.log(`📍 Ubicación por IP: ${data.city}, ${data.region}, ${data.country_name}`);
        }
    })
    .catch(error => {
        console.log('❌ Error obteniendo ubicación por IP:', error);
    });
*/
