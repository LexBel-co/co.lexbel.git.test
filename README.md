<p align="center">
  <img src="https://openits.co/wp-content/uploads/2020/07/log-peque.png" alt="Opentecnologia"><br>
  <img src="https://img.shields.io/badge/language-JavaScript-yellow" alt="JavaScript Badge">
  <img src="https://img.shields.io/badge/Tributaria-Opentecnologia-green" alt="JavaScript Badge">
</p>

# CO.OPEN.GIT.TEST ![JavaScript](https://img.shields.io/badge/Retos-Git-blue)

## Repositorio para pruebas con GIT y GitHub

Este repositorio ha sido creado con el propósito de servir como entorno de pruebas y aprendizaje para el manejo de Git y GitHub, dos herramientas fundamentales en el flujo de trabajo de desarrollo moderno. El objetivo principal es facilitar la comprensión de conceptos como control de versiones, manejo de ramas, commits, y colaboración en proyectos mediante plataformas remotas como GitHub. A través de este proyecto, se busca ofrecer un espacio en donde poder experimentar sin riesgos, aprendiendo buenas prácticas y comandos esenciales. Así mismo, se pretende documentar cada paso del proceso para reforzar el aprendizaje práctico.

## ¿Qué es un Changelog?

Un changelog es un archivo que documenta los cambios importantes realizados en un proyecto a lo largo del tiempo, versión por versión.

## ¿Por qué es útil?

- Permite a los usuarios y colaboradores ver qué ha cambiado.
- Ayuda en el control de versiones y despliegues.
- Facilita el debugging y la trazabilidad.

## Keep a Changelog

Es un estándar para escribir changelogs de forma estructurada y clara. Más info: https://keepachangelog.com/en/1.0.0/

<p align="center">Retos GIT</p>

# Reto 1
## Requisitos Previos
1. Tener instalado GIT en el equipo local
2. Tener una cuenta en GitHub
2. En VSCode tener instalada la extensión Git Graph

## Descripción del reto
1. Crear un proyecto vacio llamado co.open.git.test
2. Inicializar un repositorio de GIT en el nuevo proyecto en donde la rama principal se debe llamar 'main'
3. Crear dentro del proyecto un archivo README.md haciendo uso de sintaxis Markdown, este archivo deberá incluir:
    3.1 Logo de Open al inicio del archivo, el logo debe ser cargado desde esta ubicación https://openits.co/wp-content/uploads/2020/07/log-peque.png
    3.2 El título principal debe ser CO.OPEN.GIT.TEST
    3.3 El subtítulo debe ser Repositorio para pruebas con GIT y GitHub
    3.4 Debe tener un texto descriptivo del objetivo del repositorio/proyecto, debe ser al menos un párrafo de mínimo 100 palabras
4. Crear el commit correspondiente al inicio del proyecto
5. Crear y actualizar el repositorio remoto en la cuenta personal de GitHub, el repositorio debe ser público

## Solución
```
mkdir /ruta/al/proyecto/co.open.git.test
cd /ruta/al/proyecto/co.open.git.test
git init -b main
git remote add origin https://github.com/LexBel-co/co.open.git.test.git
touch README.md
git add -A
git commit -m "Commit inicial: Inicialización del proyecto CO.OPEN.GIT.TEST"
git push origin main
```

# Reto 2
En el repo local crear estos archivos:

./index.html
./test.log
./vendor/autoload.php
./node_modules/index.ts

El objetivo es realizar un commit y push al repo remoto evitando que archivos de tipo .log y las carpetas vendor y node_modules sean agregadas al commit y se envíen al repo remoto

## Solución
```
cd /ruta/al/proyecto/co.open.git.test
mkdir vendor node_modules
touch node_modules/index.ts
touch vendor/autoload.php
touch .gitignore
echo -e "*.log\n.DS_Store\n.vscode/\nnode_modules/\nvendor/" > .gitignore
git add .
git commit -m "Agrega gitignore para excluir archivos y carpetas"
git push origin main
```

# Reto 3
El objetivo es inicializar el proyecto de JS con el que vamos a trabajar:

1. Eliminar las carpetas node_modules, vendor y los archivos index.html y test.log, prestar atención al estado del stage en el que quedan estos archivos y carpetas
3. Inicializar un proyecto de Node.js
4. Crear un archivo index.js con el siguiente contenido:
```
console.log("¡Retos de GIT!");
```
5. Actualizar el repo remoto con el cambio

## Solución
```
rm -rf index.html test.log vendor node_modules
npm init -y
touch index.js
echo 'console.log("¡Retos de GIT!");' > index.js
git add package.json index.js
git commit -m "Inicializar proyecto Node.js con archivo principal"
git push origin main
```

# Reto 4
Realizar las siguientes tareas:

1. A partir de la rama main crear una nueva rama llamada development
2. Regresar a la rama main
3. Modificar el archivo index.js agregando:
```
console.log('Modificación Reto 3 rama main');
```
4. Sin perder el cambio de la rama main y sin hacer commit o push de los cambios, cambiar a la rama development y modificar el archivo index.js agregando
```
console.log('Modificación Reto 3 rama development');
```
5. Hacer push a la rama development
6. Regresar a la rama main, recuperar los cambios y hacer push a la rama

Se debe dejar el registro de todos los comandos o acciones realizadas para el cumplimiento del reto

## Solución
```
git checkout -b development
git checkout main
echo -e '\nconsole.log("Modificación Reto 3 rama main");' >> index.js
git stash -u -m "2025-04-25 Modifica index.js en rama main"
git stash show -p stash@{0}
git stash list
git checkout development
echo -e '\nconsole.log("Modificación Reto 3 rama development");' >> index.js
git add -A
git commit -m "Modificación al archivo index.js rama development"
git push origin development
git checkout main
git stash pop stash@{0}
git add -A
git commit -m "Modificación al archivo index.js rama main"
git push origin main
```

# Reto 5
Realizar las siguientes tareas:

1. Ubicarse en la rama main
2. Crear un archivo llamado operaciones.ts agregando una función que permita sumar dos números y retornar el resultado
3. Sin perder el cambio de la rama main y sin hacer commit o push de los cambios, cambiar a la rama development, recuperar las modificaciones hechas en el punto 2 asegurandose que los cambios permanezcan disponibles para ser usados en cualquier otra rama
4. Hacer push a la rama development
5. Regresar a la rama main, recuperar los cambios. NO se debe hacer commit ni push a la rama main
6. Eliminar el archivo package.json del proyecto
7. Recuperar el archivo package.json

Se debe dejar el registro de todos los comandos o acciones realizadas para el cumplimiento del reto

## Solución
```
git checkout main
touch operaciones.ts
```

Función creada en index.js para sumar dos números y retornar el resultado
```
function suma(a: number, b: number): number {
    return a+b;
}

git stash -u -m "2025-04-30 Crea operaciones.ts en rama main"
git stash list
git checkout development
git stash list
git stash apply stash@{0}
git add -A && git commit -m "Obtiene cambios del stash y se aplican a la rama development, sin eliminarse del stash"
git push origin development
git checkout main
git stash list
git stash pop stash@{0}
rm package.json
git status
git restore package.json
```

# Reto 6
Realizar las siguientes tareas:

1. Ubicarse en la rama main
2. Actualizar el repo remoto en la rama main con los cambios pendientes del reto anterior
3. Cambiar a la rama development
4. Modificar el archivo operaciones.ts para:
    4.1. Agrega en la primera línea del archivo: console.log('Operaciones Matamáticas');
    4.2. Cambia el nombre del método suma por opAdd
    4.3. Agregar un tercer parámetro al método opAdd y que sea tenido en cuenta en la operación
    4.4. Agregar un nuevo método llamado opLess, que reciba dos parámetros y retorne el valor de la operación de restar los dos parámetros
5. Actualizar la rama development en el repo remoto
6. Cambiar a la rama main y modificar el archivo operaciones.ts agregando una operación de división, luego actualizar la rama main con el cambio en el repo remoto 
7. Fusionar los cambios de la rama remota development en la rama local main
8. Actualizar la rama main en el repo remoto

Se debe dejar el registro de todos los comandos o acciones realizadas para el cumplimiento del reto, incluyendo la resolución de conflictos y justificación del comando usado para la fusión de cambios

## Solución
```
git checkout main
git add -A && git commit -m "Actualización de cambios del reto 5"
git push origin main
git checkout development
```

Ajustes al archivo operaciones.ts:

```
console.log('Operaciones Matemáticas');

function opAdd(a: number, b: number, c: number): number {
    return a+b+c;
}

function opLess(a: number, b: number): number {
    return a-b;
}
```

Actualizar la rama development en el repo remoto
```
git add -A && git commit -m "Modificaciones a operaciones.ts"
git push origin development
```

Cambio a main y ajustes
```
git checkout main
```

Modificaciones a operaciones.ts
```
function suma(a: number, b: number): number {
    return a+b;
}

function dividir(a: number, b: number) {
    try {
        return a+b;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}
```

Actualización remota de rama main:
```
git add -A && git commit -m "Modificaciones a operaciones.ts"
git push origin main
```

Fusión de cambios remotos de development a rama main y actualización remota de la rama main
```
git fetch
git merge origin/development // git merge --no-ff origin/development
// TODO: solución de conflictos
git add :/
git add -A && git commit -m "Mezcla cambios desde rama remota development y resolución de conflictos"
git push origin main
```

# Reto 7
Rama main: El objetivo es recuperar el estado y contenido del archivo operaciones.ts en donde solo tenía el método suma()

## Solución 1
```
git reset --soft 869dafb13e5a874d8d2f491940826c747d83cb6d # Recupera el estado del archivo
git restore --staged operaciones.ts # Devuelve cambios en el stage
git restore operaciones.ts # Deja el archivo en el estado inicial antes del commit

# Comando adicional para volver al estado inicial, antes del inicio del reto, todos los archivos
git reset --hard 83e5ac1a304f3628d531a43390b52845e9c2844b
```

## Solución 2
```
# Comando adicional para volver al estado inicial, antes del inicio del reto, todos los archivos
git reset --hard 869dafb13e5a874d8d2f491940826c747d83cb6d
```


Cual de las dos es la solución recomendada? eso depende, si estoy seguro de devolver todos los cambios la solución 2 es mejor, pero si debo ir con cuidado para revisar algo en el camino, la solución recomendada es la 1 que es útil cuando hay muchos archivos/cambios en el histórico

Otra diferencia va a ser la conservación del histórico de cambios de GIT, la solución 1 conserva todo el histórico, la solución 2 no

# Reto 8
Agrega el siguiente método en el archivo de operaciones en la rama main:

```
function multiplicar(a, b) {
    return a*b;
}
```

Actualiza el cambio en repo remoto (commit y push)

Supongamos que el PO del proyecto nos indicó que el método no debía ser ese sino que debía ser el siguiente por lo que debes reemplazar el método multiplicar():
```
function porcentaje(a, b) {
    return (a*b)/100;
}
```

Actualiza el cambio en repo remoto (commit y push)

Nuevamente el PO nos indica que debemos devolver el cambio y dejar solo el método múltiplicar, pero además notas que el método multiplicar() tiene un bug, porque generará una excepción si los parámetros a y b no son números, por lo que debes corregirlo

Para corregir el bug deberás tener en cuenta:

1. No puedes usar git checkout <commit>
2. No puedes usar git reset <commit>
3. No puedes simplemente modificar el archivo y hacer un nuevo commit, en este caso sería la solución más sencilla pero no esta permitido
4. Debes buscar otra manera de realizar el cambio, en donde a nivel del histórico de cambios quede registrada (commit) la recuperación del cambio
5. Soluciona el bug del método multiplicar
6. Actualiza los cambios en el repo remoto
7. Mezcla la rama main local en la rama development local y actualiza el repo remoto

## Solución
```
# Creación del método multiplicar() en operaciones.ts
git add operaciones.ts
git commit -m "Crea método multiplicar en operaciones.ts"
git push origin main

# Cambio de multiplar() por porcentaje() en operaciones.ts
git add operaciones.ts
git commit -m "Cambia método multiplicar por porcentaje en operaciones.ts"
git push origin main

# Revertir el cambio dejando la trazabilidad en el histórico
git revert <commit>

# En este punto en la terminal nos sale este mensaje para ser guardado en el histórico de cambios y debe ser guardado
    Revert "Cambia método multiplicar por porcentaje en operaciones.ts"

    This reverts commit 3c2084f66ab1cb7f16eb5424f295e228b2deaa9b.

    # Please enter the commit message for your changes. Lines starting
    # with '#' will be ignored, and an empty message aborts the commit.
    #
    # On branch main
    # Changes to be committed:
    #       modified:   operaciones.ts
    #

# Correciónes al método multiplicar()
git add operaciones.ts
git commit -m "Corrige bug en método multiplicar de operaciones.ts"
git push origin main

# Actualizar la rama development con todos los cambios en main sin tener que resolver conflictos
git checkout development
git merge main
git push origin development
```

# Reto 9 - Etiquetas y versiones
1. Crea una etiqueta de versión beta 1.0.0-beta con el último commit del proyecto
2. Sube la etiqueta al repositorio remoto
3. Genera un pequeño release en GitHub basado en esa etiqueta, y márcalo como pre-release
4. Comenta para qué sirven las etiquetas en un proyecto, que estándar, patrón o semántica se debe tener en cuenta o se sugiere
4. Comenta para qué sirven los release y pre-release

# Solución
```
git tag -a v1.0.0-beta <commit> -m "Prerelease (Beta) de lanzamiento del proyecto"
git push origin v1.0.0-beta
```

En GitHUb:
- En la página principal del proyecto, en la parte derecha, dar click en 'Create a new release'
- Diligenciar el formulario seleccionando la versión 1.0.0-beta y verificar que se marque la casilla 'Set as a pre-release'

Para que sirven las etiquetas:
Principalmente sirven para identificar un punto de desarrollo determinado en un proyecto y son usadas para identificar versiones del desarrollo

Para que sirven los releases:
Permiten identificar una publicación oficial de una versión en la plataforma de administración de repositorios (GitHub, GitLab, etc) y pueden incluir archivos binarios como por ejemplo instaladores, archivos de ayuda o archivos anexos requeridos para el proyecto, y son ideales para compartir versiones de desarrollo entre personas/equipos de desarrollo

Para que sirven los prereleases:
Identifican una publicación aún NO oficial de una versión, por ejemplo versiones alpha, beta o borradores, generalmente los prerelease son usados en ambiente de pruebas (QA), y generalmente incluyen un sufijo indicando el status, por ejemplo -alpha, -beta, -rc1 (rc = release candidate)

| **Elemento**  | **¿Qué marca?**          | **¿Quién lo ve?**      | **¿Para qué sirve?**                |
|---------------|---------------------------|------------------------|-------------------------------------|
| **Tag**       | Punto exacto en Git       | Desarrolladores        | Identificar versiones (ej. `v1.0.0`) |
| **Release**   | Versión oficial en GitHub | Usuarios / Desarrolladores | Publicar cambios y binarios (instaladores, builds, etc.) |
| **Prerelease**| Versión aún no final      | QA / Testers          | Probar antes de lanzar una versión estable (ej. `v1.0.0-beta`, `v2.0.0-rc1`) |

Patrón Versionamiento Semántico (http://semver.org/spec/v2.0.0.html) es el patrón de versionamiento más común

# Reto 10
Asegurate de estar en la rama development:

1. Crea un archivo llamado CHANGELOG.md en la raíz del proyecto.
2. Investiga cual es el estándar que permite mantener un archivo de cambios y estructura tu archivo siguiendo dicho estándar
3. A la fecha en nuestros repositorios ya tenemos varios commits, una versión beta y un pre-release en GitHub, si no lo haz hecho debes hacerlo
4. Crea la versión 1.0.0, crea el release correspondiente en Github, y asegurate de enlazar/agregar esta información al contenido del CHANGELOG
5. Agrega a tu archivo README el significado del archivo changelog, su utilidad y una breve descripción del estándar usado
6. Actualiza todos los cambios en tu repositorio remoto
7. Mezcla los cambios realizados en la rama main y asegurate de que esta rama quede actualizada igualmente en el origen

## Solución
Creación manual del archivo CHANGELOG.md y se agrega el siguiente contenido al CHANGELOG:

```
# CHANGELOG
## Proyecto Retos GIT - Opentecnologia - Equipo Tributaria

Este archivo describe todos los cambios significativos registrados para este proyecto.

El formato/estándar usado, esta basado en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
y este proyecto se adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.0.0] - 2025-05-14
### Added
- Versión 1.0.0 estable de proyecto

### Changed
- Se agregan definiciones importantes relacionadas con GIT, al README del proyecto

## [v1.0.0-beta] - 2025-05-14
### Added
- Versión beta 1.0.0 del proyecto
```

Creación de la v1.0.0
```
git add -A
git commit -m "Creación de CHANGELOG y generación de v1.0.0"
git push origin development
git tag -a v1.0.0 <commit> -m "Versión estable 1.0.0"
git push origin v1.0.0
```

Ajustes al archivo README:
```
## ¿Qué es un Changelog?

Un changelog es un archivo que documenta los cambios importantes realizados en un proyecto a lo largo del tiempo, versión por versión.

## ¿Por qué es útil?

- Permite a los usuarios y colaboradores ver qué ha cambiado.
- Ayuda en el control de versiones y despliegues.
- Facilita el debugging y la trazabilidad.

## Keep a Changelog

Es un estándar para escribir changelogs de forma estructurada y clara. Más info: https://keepachangelog.com/en/1.0.0/
```

Actualización de cambios en origen, cambio a rama main y actualización del origen
```
git add -A
git commit -m "Actualización del archivo README"
git push origin development
git checkout main
git merge development
git push origin main
```

# Reto 11
1. En GitHub ubicar el proyecto co.open.git.test del usuario LexBel-co
2. Hacer un fork del proyecto con el nombre co.open.git.test.colab y asegurarse de traer al equipo local dicho fork
3. Crear una rama dentro del proyecto que tenga las iniciales del nombre - test, por ejemplo ab-test
4. En esa rama crear un archivo llamado mi-nombre.md, por ejemplo alex-beltran.md y dentro de él colocar cualquier texto, puede ser lorem ipsum
5. Hacer un commit y abrir un pull-request (PR) el repo central

## Solución
Para el Fork:
```
En GitHub ir a https://github.com/LexBel-co/co.open.git.test
Ir al botón 'Fork' y seleccionar la opción 'Crear un nuevo fork'
En el formulario que se abre colocar el nombre del nuevo repositorio (co.open.git.test.colab), adicionalmente agregar una descripción y asegurarse de dejar seleccionada la casilla 'Copiar solamente la rama main'
```

En el equipo local:
```
git clone https://github.com/LexBel-co/co.open.git.test.colab
cd co.open.git.test.colab
git checkout -b ab-test
echo -e "# Alex Beltrán\n\nAmet proident ex minim mollit non sit sit consectetur magna." > alex-beltran.md
git add -A
git commit -m "Fork de repositorio, commit y primer PR"
git push origin ab-test
```

Para el PR:
```
Ir al repositorio en GitHub, Pull Request y Nuevo Pull Request
En Comparar Cambios dar click en compare entre forks y seleccione en el lado derecho de la comparación su bifucación/rama
De click en Crear Pull Request
```

# Reto 12
Obtener los tags del repositorio co.open.git.test o el repo del fork del reto anterior

```
Partiendo del hecho de ya tener el fork y haber clonado el repositorio en el local:

# Sincronizar el repositorio con el repo origen
# upstream es el nombre que se le da a un remoto adicional, es un alias, pero podría llamarse por ejemplo repo-original
git remote add upstream https://github.com/crixus12cr/co.open.git.test.git

# Traer los tags
git fetch upstream --tags

# Enviar los tags al fork
git push origin --tags

# Traer todas las ramas
git fetch upstream

# Enviar una rama
git push origin refs/remotes/upstream/development:refs/heads/development
```

# Reto 13
Vamos iniciar el trabajo colaborativo, sin embargo vamos realizar los retos con un entorno más cercano al que trabajamos en Open, para esto vamos a orientar el trabajo mediante la metodología Gitflow la cual deben investigarla y tener un resumen de la misma

Les envié las invitaciones de colaboración a mi repositorio, las cuales deben aceptar

Deben clonar mi repositorio https://github.com/LexBel-co/co.open.git.test en sus equipos locales

Cada uno de ustedes deberá crear las siguientes ramas de acuerdo a lo establecido en Gitflow
JH: sumar-restar
JT: dividir
CP: multiplicar

El objetivo para cada uno de ustedes, es crear en el proyecto la carpeta operaciones y dentro de está los correspondientes archivos .ts de acuerdo al nombre de su rama. Del archivo operaciones.ts deberán copiar el código que corresponda a su rama y colocarlo en el archivo .ts

Finalmente deben hacer push de su ramas al repositorio remoto y hacer los PRs correspondientes

## Solución
GITFLOW
Es una metodología para organizar el trabajo con Git en ramas, diseñada para equipos que desarrollan software con ciclos de versiones estructurados.

Fue propuesta por Vincent Driessen y es ideal para proyectos con versiones regulares, lanzamientos y mantenimiento en paralelo.

Estructura de Ramas:
| Rama        | Propósito                                                           |
| ----------- | ------------------------------------------------------------------- |
| `main`      | Contiene el código de producción (lo que se libera a usuarios)      |
| `develop`   | Contiene el código en desarrollo (base para nuevas funcionalidades) |
| `feature/*` | Se usan para desarrollar nuevas funcionalidades                     |
| `release/*` | Preparar versiones antes de pasarlas a producción                   |
| `hotfix/*`  | Correcciones urgentes sobre `main` (producción)                     |

Desde que rama se pueden crear otras ramas:
| Nueva rama      | Se crea desde... | Se fusiona a...    | ¿Cuándo se usa?                                    |
| --------------- | ---------------- | ------------------ | -------------------------------------------------- |
| `feature/xyz`   | `develop`        | `develop`          | Para nuevas funcionalidades o mejoras              |
| `release/x.y.z` | `develop`        | `main` y `develop` | Para preparar una versión (tests, ajustes finales) |
| `hotfix/x.y.z`  | `main`           | `main` y `develop` | Para corregir bugs críticos en producción          |

Existe una herramienta de línea de comandos que ayuda con esta métodología y que se llama [git-flow](https://formulae.brew.sh/formula/git-flow), disponible para Mac, Windows y Linux, pero nuestro objetivo será trabajar exclusivamente con comandos de GIT y no usar ninguna herramienta adicional

# Reto 14
1. Se van a mezclar, en la rama main, los cambios hechos con los PRs de JT, JH y CP y uds han sido designados para realizar la revisión del nuevo PR, por lo que deben realizarla y aprobar o dejar sus comentarios
2. Teniendo en cuenta la aprobación del PR anterior, preparar un release de versión con todos los cambios en sus repos locales documentando el proceso. Consejo: Verificar estado y contenidos de las ramas main y develop

En nuestra sesión revisaremos los que cada uno hizo y definiremos cual de uds podrá hacer el PR del release

## Solución
1. En Github ir al proyecto y realizar la revisión del PR de mezcla de cambios contra main, para rechar, aceptar o comentar el PR
2. Creación del release de versión, definiendo que archivos de que ramas de seben modificar o eliminar
2.1 Eliminar el archivo operaciones.ts de la ramas development, hacer el commit correspondiente

```
git checkout develop
# Eliminar el archivo operaciones.ts
git checkout -b release/v1.1.0
# Modificar el CHANGELOG.md y README.md para agregar la información del release v1.1.0
git add -A
git commit -m "Elimina archivo operaciones.ts y genera release v1.0.0"
git push origin release/v1.1.0
# Abrir PR hacia main, revisar, mezclar

git checkout main
git tag v1.1.0
git push origin v1.1.0
```

# Reto 15 - Conventional Commits, commits más limpios y atómicos, usar git add -p
Cumplir con las siguiente tareas:

1. Modificar el archivo .ts que cada uno creó en la carpeta operaciones, esta tarea debe hacerce sobre la rama feature que cada uno creó anteriormente:
    - 1.1. Cambiar el nombre de un método existente
    - 1.2. Agregar un nuevo método
    - 1.3. Agregar la documentación a uno o varios de los métodos en el archivo

2. Una vez cumplido lo anterior se debe:
    - 2.1 Hacer uso de la especificación **Conventional Commits** y realizar los **commits atómicos** de lo realizado, documentando el proceso paso a paso para ser revisado
    - 2.2 Hacer push de la rama
    - 2.3 Hacer el PR correspondiente asignado revisiones así: JT asigna a JH, JH asigna a CP, CP asigna a JT

## Conceptos
[Conventional Commits](https://www.conventionalcommits.org/): Especificación para dar significado a los mensajes de los commits haciéndolos legibles para máquinas y humanos

Prefijo <tipos> más comunes en la especificación:
| Prefijo    | Significado                                                                |
| ---------- | -------------------------------------------------------------------------- |
| `feat`     | Nueva funcionalidad (feature) para el usuario                              |
| `fix`      | Corrección de un error que afecta al usuario                               |
| `docs`     | Cambios en la documentación (README, comentarios, etc.)                    |
| `style`    | Cambios que **no afectan la lógica** (espacios, formato, etc.)             |
| `refactor` | Cambios internos en el código que **no agregan ni corrigen** funcionalidad |
| `test`     | Agrega o modifica pruebas                                                  |
| `chore`    | Tareas menores (actualizar dependencias, scripts, configuración)           |
| `perf`     | Mejora de rendimiento                                                      |
| `build`    | Cambios relacionados con el sistema de build o dependencias                |
| `ci`       | Cambios en la configuración de integración continua (GitHub Actions, etc.) |
| `revert`   | Reversión explícita de un commit anterior                                  |

[Commit Atómicos - git add -p](): un Commit Atómico es un commit que contiene una única, completa y coherente unidad de trabajo

El comando `git add -p` mostrará una serie de opciones las cuales significan lo siguiente:

`Stage this hunk [y,n,q,a,d,j,J,g,/,e,?]`

| Opción | Significado                                                               |
| ------ | ------------------------------------------------------------------------- |
| `y`    | **Yes** – Agrega este *hunk* al staging area (lo incluye en el commit)    |
| `n`    | **No** – No agrega este *hunk* (lo deja sin preparar para commit)         |
| `q`    | **Quit** – Sale inmediatamente del modo interactivo                       |
| `a`    | **All** – Agrega este *hunk* y todos los siguientes automáticamente       |
| `d`    | **Deselect all** – Omite este *hunk* y todos los siguientes               |
| `j`    | **Next** – Muestra el siguiente *hunk* (sin decidir aún qué hacer)        |
| `J`    | **Skip remaining** – Salta el resto de los hunks sin seleccionarlos       |
| `g`    | **Go to** – Permite ingresar un número específico de hunk para ir a ese   |
| `/`    | **Search** – Busca dentro del código un texto específico (como en `less`) |
| `e`    | **Edit** – Te permite **editar manualmente el hunk antes de agregarlo**   |
| `?`    | **Help** – Muestra una ayuda resumida en pantalla                         |

### Uso de la opción 'e' (Editar)
Al seleccionar la opción 'e' cuando se ejecutan el comando `git add -p` se abre el editor de texto de la terminal, generalmente es vi/vim, pero se puede configurar cualquier otro editor como `nano`o `VSCode`

Para configurar `nano` como editor solo para el proyecto actual, ejecutar:
```
git config core.editor "nano"
```

Para configurar `VSCode` como editor solo para el proyecto actual, ejecutar:
```
git config core.editor "code --wait" # La bandera --wait le indica a VSCode que debe esperar a cerrar la pestaña de edición antes de que GIT continué con la operación
```

Si se quiere configurar alguno de manera global, para todos los proyectos, se debe agregar al comando la bandera `--global`, por ejemplo:
```
git config --global core.editor "code --wait"
```

Para reversar dicha configuración se debe ejecutar el comando `git config --unset core.editor` o `git config --unset nano.editor`

#### **Paso a paso para el uso de la opción de edición de un hunk:**
| Paso | Acción                                                                       | Descripción                                                                     |
| ---- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 1️⃣  | Ejecuta `git add -p`                                                         | Muestra los cambios divididos en bloques (*hunks*)                              |
| 2️⃣  | Selecciona `e`                                                               | Elige editar manualmente el hunk actual                                         |
| 3️⃣  | Se abre el hunk en el editor (Vim, Nano, o VSCode)                           | El hunk incluye líneas con `+`, `-`, y líneas de contexto                       |
| 4️⃣  | **Elimina** líneas que comienzan con `+` si **no quieres agregarlas**        | Estas líneas son adiciones, puedes quitarlas si no las necesitas en este commit |
| 5️⃣  | **Cambia el `-` por un espacio** si **no quieres eliminar esa línea**        | Esto la convierte en línea de contexto (no se borra del archivo)                |
| 6️⃣  | **NO modifiques** la línea de encabezado (`@@ ... @@`) ni líneas de contexto | Alterarlas hará que falle el parche                                             |
| 7️⃣  | Guarda y cierra el editor                                                    | En Vim: `:wq` • En Nano: `Ctrl+O` luego `Ctrl+X` • En VSCode: Guardar y cerrar  |
| 8️⃣  | Git intentará aplicar el parche                                              | Si es válido, el bloque queda en staging (`git diff --cached`)                  |
| 9️⃣  | Si ves un error ("patch does not apply")                                     | Revisa si alteraste formato o contexto incorrectamente                          |

#### **Reglas claves**
| Elemento                        | Acción permitida                                           |
| ------------------------------- | ---------------------------------------------------------- |
| `+ línea`                       | Bórrala si **no** quieres agregarla                        |
| `- línea`                       | Cámbiala a ` línea` (espacio) si **no** quieres eliminarla |
| `@@ ... @@`                     | **No modificar jamás**                                     |
| Contexto (líneas sin `+` o `-`) | **No modificar ni eliminar**                               |


## Solución
```
git checkout -b feature/xxxxxx

# Luego de hacer todos los cambios en el archivo correspondiente

git add -p
# → Seleccionar el cambio relacionado con el cambio del nombre del método
git commit -m "fix: renombrar método xxx a yyy"

git add -p
# → Seleccionar el cambio del nuevo método
git commit -m "feat: agregar método zzzz()"

git add -p
# → Seleccionar el cambio de la documentación
git commit -m "docs: agrega documentación al método xxx"

git push origin feature/xxxxxx
# Abrir Pull Request hacia development y asignar la persona que debe revisar

```

# Reto 16 - Visualización de cambios en detalle desde el stash
1. Eliminar los archivos ubicados dentro de la carpeta `operaciones` y renombrar la carpeta a `Helpers`
2. Crear dentro de la carpeta `Helpers` el archivo `math_operations.ts` con el siguiente contenido:
```
export class MathOperations {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No puede dividir por cero.");
        }
        return a / b;
    }

    modulo(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No puede dividir por cero");
        }
        return a % b;
    }

    exponentiate(a: number, b: number): number {
        return a ** b;
    }
}
```
3. Crear una carpeta llamada `Modules/Math` y dentro de ella crear el archivo `math.ts` con el siguiente contenido:
```
import { MathOperations } from "../../Helpers/math_operations";

const calculator = new MathOperations();

console.log("Suma:", calculator.add(5, 3));
console.log("Resta:", calculator.subtract(5, 3));
console.log("Multiplicación:", calculator.multiply(5, 3));
console.log("División:", calculator.divide(10, 2));

try {
  calculator.divide(5, 0);
} catch (error: any) {
  console.error("Error:", error.message);
}
```
4. LLeve los cambios al stash, debe usar comentarios del tipo `Conventional Commits`
5. En la terminal use un comando que le permita ver los cambios detallados de lo que se encuentra en el stash creado


## Solución
Luego de realizados los ajustes indicados en los puntos 1 al 3, ejecutar:

```
git stash -u -m "Refactor: Modificaciones a la lógica de operaciones matemáticas"
git stash list # Para obtener el índice del stash creado
git stash show -p -u stash@{0}
# -p - Muestra el contenido del stash en formato de diferencia (diff) línea por línea
# -u - Incluye en la vista del stash también los archivos no rastreados
```

# Reto 17 - Limpieza del historial con git rebase -i y uso de squash
En la rama feature de cada uno, hacer `3 commits atómicos`, por ejemplo:

- Crear un nuevo método en el archivo de operaciones a cargo de cada uno
- Agregar uno o varios comentarios
- Cambiar el nombre de un parámetro o variable, o modificar la lógica interna de algún método

Una vez se cuente con los tres commit atómicos y antes de hacer merge a la rama remota, usar `rebase interactivo` para unir los 3 commits en uno solo, manteniendo un mensaje claro y profesional

## Solución
### Estando en la rama feature
```
git log --oneline  # Verificar los 3 commits recientes
```

### Inicia rebase interactivo para los últimos 3 commits:
```
git rebase -i HEAD~3
```

### Lo anterior abre una lista como esta en el editor:
```
pick e3a1f12 feat: agregar función potencia()
pick 7c123b4 docs: agregar comentario explicativo
pick 4b891aa fix: renombrar variable interna
```

### Reemplaza las líneas así:
```
pick e3a1f12 feat: agregar función potencia()
squash 7c123b4 docs: agregar comentario explicativo
squash 4b891aa fix: renombrar variable interna
```

`squash` se usa para combinar varios commits en uno solo

### Luego se abre otra ventana para editar el mensaje del commit resultante. Se puede dejar como:
```
feat: agregar función potencia()

- Agrega comentarios explicativos
- Renombrada variable interna
```

Guardar y salir del editor.

## Solución Alternativa - De mucho cuidado

```
git checkout development
git merge --squash feature/rama-individual
git commit -m "feat: agrega funcionalidad completa"
```

Cuando es últil usar `squash`?
| Útil cuando…                                        | Ejemplo                                              |
| --------------------------------------------------- | ---------------------------------------------------- |
| Limpias el historial antes de merge                 | Consolidar 10 commits caóticos de una feature        |
| Haces un `PR` en GitHub y prefieres un solo commit  | Usas la opción *“Squash and merge”* al aceptar el PR |
| Trabajas en una sola idea pero hiciste muchos pasos | `feat: agrega lógica de autenticación`               |

# Reto 18 - Corregir mensajes de commit
Busca el hash del quinto commit anterior al más reciente y modifica su mensaje (**solo para ese commit**), investiga sobre las opciones que ofrece el `rebase interactivo`

## Solución
Sin ubicar el hash del commit:
```
git rebase -i HEAD~5
```

Con el hash del commit:
```
git rebase -i <hash>^
```

En el editor de mostrará algo así:
```
pick a1b2c3 Primer commit
pick d4e5f6 Segundo commit
pick 789abc Tercer commit
pick cd4ca1 Cuarto commit
pick 53cf24 Quinto commit
```

Se debe cambiar la palabra `pick` por reword en el commit requerido:
```
pick a1b2c3 Primer commit
pick d4e5f6 Segundo commit
pick 789abc Tercer commit
pick cd4ca1 Cuarto commit
reword 53cf24 Quinto commit
```

Se guarda y al salir del editor se abre una nueva instancia del editor en donde se puede cambiar el mensaje, una vez se guarde, GIT actualizará el histórico

### IMPORTANTE
Si ya habías hecho push, y reescribes la historia, deberás ejecutar `git push --force`

Si otros ya han clonado el repo o trabajan sobre esa rama, se debe coordinar con ellos antes de forzar el cambio, para evitar conflictos.

### Opciones disponible en el rebase interactivo:
| Opción   | ¿Qué hace?                                                               | Cuándo usarla                                                 |
| -------- | ------------------------------------------------------------------------ | --------------------------------------------------------------|
| `pick`   | **Conserva el commit tal como está**                                     | Cuando no necesitas cambiar nada en ese commit                |
| `reword` | Usa el commit tal como está, pero **te permite cambiar el mensaje**      | Cuando quieres corregir o mejorar el mensaje del commit       |
| `edit`   | **Pausa el rebase** en ese commit para que puedas modificar su contenido | Cuando necesitas cambiar los archivos del commit              |
| `squash` | **Combina este commit con el anterior** y permite **editar el mensaje**  | Para unir commits relacionados en uno solo                    |
| `fixup`  | Igual que `squash`, pero **descarta el mensaje** de este commit          | Para limpiar commits intermedios sin conservar mensajes       |
| `drop`   | **Elimina por completo el commit** del historial                         | Cuando el commit fue un error o ya no es necesario            |
| `exec`   | **Ejecutar un comando** después de modificar le commit                   | Ej, ejecutar pruebas unitarias después de modificar el commit |

Ejemplo de uso del exec, se ejecuta:
```
git rebase -i HEAD~3
```

En el editor se muestra:
```
pick a1b2c3 feat: primer commit
pick d4e5f6 fix: segundo commit
pick 789abc chore: tercero
```

Y lo modificamos por:
```
pick a1b2c3 feat: primer commit
exec echo "Verificado primer commit"
pick d4e5f6 fix: segundo commit
exec npm update
pick 789abc chore: tercero
```

Al cerrar y guardar la edición del commit, los comandos establecidos por exec se ejecutarán en el orden en que se incluyeron

## Extra
Cuando se necesita modificar el mensaje del commit más reciente y aún no se ha realizado `push`, se puede usar el comando:

```
git commit --amend -m "Feat: Nuevo mensaje"
```

Se debe tener cuidado en no tener archivos en el `stage` porque se incluiran en el commit

# BONUS 1 - GIT NOTES

## ¿Qué es `git notes`?

`git notes` permite **agregar, editar, eliminar o visualizar notas adjuntas a commits** sin modificar su contenido ni cambiar su hash.  
Esto es útil para dejar información adicional como referencias de tickets, comentarios de revisión o contexto extra sin alterar el historial del repositorio.

Las notas se almacenan en `refs/notes/commits` por defecto (aunque puede configurarse otra ubicación).  
Si esta referencia no existe, Git la crea automáticamente la primera vez que se necesita.

[Documentación de Referencia](https://git-scm.com/docs/git-notes)

## Comandos útiles

### Añadir una nota
```
# Al último commit (HEAD)
git notes add -m ""Este commit resuelve el ticket #1234 y fue probado en staging por QA.""

# A un commit específico (por hash)
git notes add -m ""Este cambio fue solicitado por el cliente ACME para la versión 2.1"" f4e5d6c
```

### Ver una nota
```
git notes show a1b2c3d4e5f67890123456789abcdef12345678
```

### Ver todas las notas en el historial
```
git log --show-notes
```

### Editar una nota existente
```
git notes edit a1b2c3d4e5f67890123456789abcdef12345678
```

### Eliminar una nota
```
git notes remove a1b2c3d4e5f67890123456789abcdef12345678
```

## Compartir notas (con tu equipo o repositorio remoto)
Por defecto, las notas no se suben a GitHub ni GitLab a menos que lo hagas manualmente.

### Subir notas al repositorio remoto
```
git push origin refs/notes/commits
```

### Descargar notas desde el repositorio remoto
```
git fetch origin refs/notes/commits:refs/notes/commits
```

# BONUS 2 - GIT ALIAS
 - Los alias **se usan para crear comandos más cortos que se asignan a comandos más largos**. Dado que obligan a pulsar menos teclas para ejecutar un comando, aumentan la eficiencia de los flujos de trabajo.
 - Los alias se pueden configurar tanto a nivel global como a nivel del proyecto, esto nos permite definir el alcance que tendrá el alias en el proyecto.
 - Es importante revisar los alias configurados, ya que si definimos un alias con una palabra ya existente, git reemplaza el alias con el ya guardado.

## ¿Como usarlo?

`git config --global alias.<nombre_alias> <comando_git>`

- Con `--global` se guarda en `~/.gitconfig`, permite ser reconocido en todo tu sistema. 
- Sin `--global`se guarda en `.git/config`, se reconoce sólo dentro del repositorio actual.

## Algunos ejemplos

`git config --global alias.st 'status'` 
`git config --global alias.cb 'checkout -b'`
`git config --global alias.lg 'log --oneline --graph --all'`
`git config --global alias.ac '!git add . && git commit -m'`

## ¿Cómo visualizar los alias ya configurados?
`git config --global --get-regexp alias`

Para visualizar los alias configurados localmente, debemos ejecutarlo sin `--global`.
Un tip adicional antes de crear un alias, podrías ejecutar un comando que te permite ver los comandos de git más utilizados y ahí definir que alias puedes configurar.

```
history | grep -E '^\s*[0-9]+\s+git ' | awk '{CMD[$3]++} END {for (a in CMD) print CMD[a], a}' | sort -rn | head -10
```

## ¿Cómo eliminar un alias?
Para eliminar un alias ejecutas:
`git config --global --unset alias.<nombre_del_alias>`

Si el alias lo configuraste sin `--global`, deberás omitirlo tambien en el comando. Ejecuta el comando para visualizar los alias para confirmar que se eliminó.

# BONUS 3 - GIT HOOKS
Son scripts personalizados que se ejecutan automáticamente en respuesta a eventos específicos dentro de un repositorio de Git, por ejemplo validaciones al hacer un commit. Permiten automatizar tareas, validar código, aplicar políticas y realizar otras acciones personalizadas en diferentes puntos del flujo de trabajo de Git. 

Los `hooks` se pueden crear a nivel de proyecto o de manera global

## Crear hook a nivel de proyecto
Ir a la carpeta .git/hooks y crear un archivo con un nombre relativo a lo que hace o ejecuta el script, procura no usar extensiones en el nombre del archivo, por ejemplo:

```
commit-msg
```

Luego se debe abrir el archivo en el editor de código para agregar el script shell que se pretende ejecutar con GIT, para el ejemplo tendremos un script que valide si el mensaje de un commit esta de acuerdo con los **Conventional Commits** con este script:

```
#!/bin/sh

# commit-msg
# Valida que el mensaje cumpla el formato Conventional Commits

commit_msg_file=$1
commit_msg=$(head -n1 "$commit_msg_file")

pattern="^(feat|fix|docs|style|refactor|perf|test|chore|build|ci|revert)(\(\w+\))?: .{1,}"

if echo "$commit_msg" | grep -Eq "$pattern"; then
    echo "✅ Commit válido (Conventional Commit)."
    exit 0
else
    echo "❌ El mensaje del commit no sigue el formato Conventional Commits."
    echo "Ejemplo: 'feat: agrega nueva funcionalidad'"
    exit 1
fi
```

Para probar el hook, simplemente se debe hacer un commit que NO cumpla con el estandar para ver como es rechazado por el script, y luego hacerlo de manera correcta para observar como es aceptado por el script y procesado por GIT

## Crear hook de manera global
1. Crear una carpeta de plantillas globales
```
mkdir -p ~/.git-templates/hooks
```

2. Crear el archivo commit-msg dentro de la carpeta
3. Abril el archivo en el editor y agregar el script shell a ejecutar
4. Configurar GIT para usar esa plantilla
```
git config --global init.templateDir ~/.git-templates
```

Los pasos anteriores permiten que al inicializar un nuevo repositorio con `git init`, se incluya dicha plantilla

Para los repositorios existentes se debe copiar el hook manualmente en cada uno
```
cp ~/.git-templates/hooks/commit-msg /ruta/tu-proyecto/.git/hooks/
```

