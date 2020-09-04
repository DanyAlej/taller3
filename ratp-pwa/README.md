# Taller 1 - Dany Benavides
## F1

![F1](/readmeImages/f1.png)

Para traer los datos de la API no es necesario realizar cambios al código, en cuanto la aplicación se encuentre fuera de linea se crea una opción fallback en la cual se busca el mismo request en el cache, esto gracias a la función getScheduleFromCache, a pesar de esto se implementa con workbox una estrategia CacheFirst por lo cuál no se recurrira a el API si la información ya esta en el cache, esto lo hace gracias a que intercepta el request a la red, y si encuentra la misma solicitud en el cache retorna esa información. Todo se realizó con el CNN de workbox.

![F1.1](/readmeImages/f1.2.png)

Igualmente cuando se recarga la pagina bien sea desde el navegador o con el botón implementado en la función update se va predeterminadamente al cache primero.

## F2

A traves del uso de IndexedDB se guardan las preferencias del usuario, que en este caso son las estaciones que ha usado, no importa el número de estaciones cada vez que agrega una nueva esta se añade a la base de datos con un indice que incrementa en uno cada vez.

Ejemplo con 2:

![F2 - Ejemplo con 2](/readmeImages/f2.png)

Ejemplo con 5:

![F2 - Ejemplo con 5](/readmeImages/f2.2.png)

Explicación del código:

![F2](/readmeImages/f2.3.png)

Con esto se inicializa la base de datos y se crea una base de datos llamada preferences, se añade un ObjectStore también llamado preferences y se añade el objeto que siempre se carga por default.

![F2](/readmeImages/f2.4.png)

Cada vez que se oprime el boton de añadir como ultima línea se ejecuta la siguiente función la cual añade la nueva estación según su llave y nombre.

## F3

Con workblox se creo un Service worker el cuál guarda todos los archivos necesarios para dar una experiencia offline. Se uso  preacacheAndRoute para esta funcionalidad la cual proviende del paquete workbox.precaching. Aquí se encuentran ellos.

![F3](/readmeImages/f3.2.png)

Archivos dentro del cache statico de Workbox:

![F3](/readmeImages/f3.png)

## F4

Para guardar los datos que se solicitan a la API se intercepta la solicitud y en el caso que no se encuentren en el cache llamado 'fetch' los guarda, si ya se encuentran los manda directamente desde el cache, esto con el fin de optimizar uso de la red y funcionar en casos offline.

![F4](/readmeImages/f4.png)

La aplicación ofrece funcionalidad completa offline si ya tiene la infromación en el cache como se puede observar en este gif:

![F4](https://media.giphy.com/media/icJCgqSQvPXFxLU1Cu/giphy.gif)

## F5

Se realizo el script install.js que permite la descarga en dispositivos Android y IOS como en Web, agrege una imagen de la aplicación instalada web.

![F5](/readmeImages/f5.png)

Aquí hay una foto de la app funcionando desde mi Iphone

![F5](/readmeImages/f5.2.png)

 
## F6

La aplicación esta disponible en firebase a traves de este link:

https://taller1-paris.web.app/

![F6](/readmeImages/f6.png)
![F6](/readmeImages/f6.2.png)

## Lighthouse

Por último este es un reporte actualizado de lighthouse y sus puntajes de la aplicación.

![Lighthouse](/readmeImages/lighhousefinal.png)

