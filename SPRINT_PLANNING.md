# Sprint Planning - Sistema Los Robles

## Objetivo

Crear una página web para que los vecinos puedan consultar avisos, conocer servicios y enviar reportes.

## Sprint 1. Planeación y diseño

Duración: 5 días
Horas: 32
Puntos: 10

- HU-01: Planeación. Terminada.
- HU-02: Diseño. En proceso.

Avance: Se organizaron las secciones Inicio, Avisos, Servicios, Contacto e Historial. Se conserva el diseño original de la página.

## Sprint 2. Desarrollo

Duración: 5 días
Horas: 84
Puntos: 16

- HU-03: Frontend con React. En proceso.
- HU-04: Backend. Pendiente.

Avance de la segunda fase:
Se agregó un historial que permite guardar y consultar varios reportes. También se muestra la fecha y el total de reportes.

Avance de la tercera fase:
Se agregó un botón para eliminar todos los reportes guardados. Antes de borrarlos, el sistema solicita una confirmación. El botón solamente aparece cuando existen reportes.

El Backend continúa pendiente porque los datos se guardan en el navegador mediante localStorage.

## Sprint 3. Pruebas y publicación

Duración: 5 días
Horas: 88
Puntos: 12

- HU-05: Pruebas. En proceso.
- HU-06: Publicación. Pendiente.
- HU-07: Mantenimiento. Pendiente.

Avance: Se realizaron pruebas del historial y de la función para eliminar reportes.

Se comprobó que al confirmar la eliminación, los registros desaparecen, el contador cambia a cero y aparece el mensaje "Todavía no hay reportes registrados".

Todavía faltan las pruebas completas y la publicación del sistema.

## Product Backlog actualizado

| Historia | Actividad | Puntos | Sprint | Estado |
|---|---|---|---|---|
| HU-01 | Planeación | 5 | 1 | Terminada |
| HU-02 | Diseño | 5 | 1 | En proceso |
| HU-03 | Frontend con React | 8 | 2 | En proceso; botón para eliminar reportes agregado |
| HU-04 | Backend | 8 | 2 | Pendiente |
| HU-05 | Pruebas | 5 | 3 | En proceso; prueba de eliminación realizada |
| HU-06 | Publicación | 5 | 3 | Pendiente |
| HU-07 | Mantenimiento | 2 | 3 | Pendiente |

## Sprint Schedule actualizado

| Sprint | Días | Horas | Seguimiento |
|---|---|---|---|
| 1 | 1 al 5 | 32 | Planeación terminada y diseño en proceso |
| 2 | 6 al 10 | 84 | Historial y función para eliminar reportes agregados |
| 3 | 11 al 15 | 88 | Pruebas iniciales y eliminación de reportes comprobada |

## Ajustes realizados en la tercera fase

1. Se agregó un botOn para eliminar todos los reportes.
   Motivo: Permitir limpiar el historial cuando sea necesario.

2. Se agregó una confirmación antes de eliminar los reportes.
   Motivo: Evitar que los registros se borren por accidente.

3. El botón se oculta cuando no existen reportes.
   Motivo: Mostrar solamente las opciones que se pueden utilizar.

4. Se comprobó que el contador se actualiza después de eliminar los registros.
   Motivo: Mantener correcta la información del historial.

5. Se actualizó el Product Backlog y el Sprint Schedule.
   Motivo: Documentar los avances de la tercera fase.

## Revisión de la tercera fase

Se probó la función para eliminar reportes y se comprobó que funciona correctamente.

Después de confirmar la eliminación, el historial quedó vacío y el contador mostró cero reportes.

La página conserva las funciones anteriores y los reportes continúan almacenándose de forma local.

El Backend, las pruebas completas y la publicación siguen pendientes.

## Repositorio de GitHub

https://github.com/aryamzaa27-hub/Sistema_Los_Robles_React_Completo