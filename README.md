## - ¿Qué elementos del App Shell se mantienen siempre?

 R= Bueno lo elementos que se mantienen siempre son la estructura fija de la aplicación, un ejemplo de esto es el encabezado "Mi universidad" y tambien el menu que son inicio, materias, horarios y perfil esto seria un ejemplo.

## - ¿Qué elementos cambian dinámicamente

R= Los elementos que cambian dinamicamente son el contenido principal por ejemplo los datos de la materias, horarios, perfil que son los que se cargan en el json.

## Funcionamiento del Service Worker

El Service Worker (configurado con Vite PWA):
- Cachea automáticamente el App Shell (HTML, CSS, JS)
- Guarda el archivo materias.json para acceso offline
- Permite que la app funcione sin conexión
- Se actualiza automáticamente cuando hay cambios