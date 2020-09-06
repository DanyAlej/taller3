# taller3

## Lighthouse

Se realizaron dos nuevos audits, en los cuales se midieron los tiempos relacionados a los llamados del API, en este caso el primero es cuanto tiempo toma desde que la aplicación empieza hasta que se tienen los datos proporcionados por el API (por lo que se uso performance.now) y el segundo que toma el tiempo desde el llamado hasta la obtención de la respuesta, para lo que se restaron los dos tiempos implicados.

![](/imagesReadme/windowElements.png)

Para ambos nuevos audits se comprobo que tomaban un tiempo menor a 3 segundos, el archivo de html se puede encontrar en la carpeta de lighthouse.

![](/imagesReadme/lighthouse.png)

## Cypress

Para encontrar todas las imagenes de el monitoreo de recursos y los tiempos de ejcución refierase a este link:
[Google Drive](https://drive.google.com/drive/folders/1Brxw87X99ayh_kPzzdS3uA37kRhtLAt7?usp=sharing)

### CPU Usage

![](/imagesReadme/cypressCPU.png)

Como se puede observar no existen grandes diferencias en el uso de CPU aunque es mucho más consistente el uso de la manera headful.

### Time

![](/imagesReadme/cypressTime.png)

Los tiempos fueron consistentes a excepción de cuando hubo fallas, en este caso estas fallas se ven explicadas por ancho de banda y faltas de esperar al montarse el DOM,

### RAM Usage

![](/imagesReadme/cypressRam.png)

Como se puede observar la cantidad de memoria RAM usada por el programa Headless es inferior a el programa Headful, las diferencias no son considerables, pero lo pueden ser en el momento de tener varias instancias en paralelo.

## Puppeteer

### CPU Usage

![](/imagesReadme/puppeteerCPU.png)

Como se puede observar no existen grandes diferencias.

### Time

![](/imagesReadme/puppeteerTime.png)

En este caso se puede observar la gran diferencia en tiempos de ejecución, en este caso la manera headless es en 5 veces más veloz en su ejecución.

### RAM Usage

![](/imagesReadme/puppeteerRam.png)

Se puede considerar que las diferencias son insignificantes.

# Preguntas

## ¿Qué tantos recursos se pueden ahorrar ejecutando las pruebas de manera headless?

En el caso de puppeteer y cypress las ejecuciones no presentan grandes diferencias en cuanto a recursos físicos de la computadora, en todo caso las pruebas en modo headless usan menos recursos por tanto en caso de que sea necesario realizar varias instancias de la misma prueba el efecto sería mayor y si presentaría utilidad.
En cuanto a el tiempo este es el recurso que más se ve optimizado llegando incluso a ser 5 veces más rápido lo que representa un turnaround mucho más veloz lo que aceleraría todo el proceso de desarrollo.

## ¿En qué casos cree que valdría la pena ejecutar sus pruebas de esta forma?

Como lo mencionamos en la respuesta anterior en el caso de que muchas pruebas sean ejecutadas de manera simultanea es mejor el uso de las pruebas headless. Consideramos que todas las pruebas una vez funcionales deben ser ejecutadas de modo headless.

# Puntos a tener en cuenta

- Para las mediciones se tomaron los puntos de mayor uso durante las ejecuciones.
- Cypress de la manera headless graba un video, mientras este es decodificado y escrito en disco el uso de la CPU sube a +50%

![](/imagesReadme/video2.png)

