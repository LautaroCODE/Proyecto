# <img  src="https://i.ibb.co/XVQnRVV/ecommerce.png"  width="48px"  height="48px"  alt="logo"  />ELECTRICS

## PROYECTO FINAL DE [REACTJS] - [CODERHOUSE]. :muscle:

Desarrollo el front end de una tienda con carrito de compras,

utilizando componentes de [React] y [Firebase] como servidor en la nube. Tambien utilizo [React Router] para el manejo de rutas, [React Hook Form] para validar el formulario y [Font Awesome] para algunos iconos.

### COMENZANDO :rocket:

El proyecto esta creado mediante [Créate React App]

### TECNOLOGIAS UTILIZADAS

[![htmlico]](https://es.wikipedia.org/wiki/HTML) [![cssico]](https://es.wikipedia.org/wiki/CSS) [![jsico]](https://es.wikipedia.org/wiki/JavaScript) [![firebasee]](https://firebase.google.com/?hl=es-419&gclid=Cj0KCQjw4PKTBhD8ARIsAHChzRLWIosyPDP7QsTRQvzxeUDwT5-bl1RI3l8ZZf1a39VK85fas4xrBq0aAu-JEALw_wcB&gclsrc=aw.ds) [![reactico]](https://es.reactjs.org/) [![gitico]](https://git-scm.com/)

### DEPENDENCIAS UTILIZADAS

:small_blue_diamond: @testing-library/user-event - ^13.5.0

:small_blue_diamond: @testing-library/jest-dom - ^5.16.2

:small_blue_diamond: @testing-library/react - ^12.1.4

:small_blue_diamond: react-router-dom - ^6.3.0

:small_blue_diamond:react-hook-form - ^7.31.1

:small_blue_diamond: fontawesome - ^6.1.1

:small_blue_diamond: react-scripts - 5.0.0

:small_blue_diamond: react-dom - ^17.0.2

:small_blue_diamond: web-vitals - ^2.1.4

:small_blue_diamond: firebase - ^9.6.11

:small_blue_diamond: react - ^17.0.2

### VERSIONADO :computer:

Usamos [Git] para el sistema de versionado, puedes seguir el proyecto y sus actualizaciones en [GitHub].

### INICIALIZA TU PROYECTO :snail:

:one: Podes descargar la carpeta del proyecto o clonar desde la terminal.

:two: Instalar NPM usando el comando **`npm i`** en la ruta donde se encuentra "package.json" desde la terminal.

:three: Una vez finalizado la instalación de npm ejecutas el comando **`npm start`** desde la terminal.

:four: Si el proyecto no inicia podrás verlo en el siguiente enlace: http://localhost:3000/

### COMO REALIZAR UNA COMPRA :gift:

A continuación podrás ver un breve ejemplo antes de saber como funciona:

![gift proyecto][gifproyecto]

:one: Podes seleccionar un producto pulsando el botón "**VER DETALLE**" o elegir una categoría de la barra de navegación **CELULAR - NOTEBOOK - TABLET**, para volver a elegir otro producto simplemente pulsas el logo ubicado en el margen superior izquierda o nuevamente en las categorías.

:two: Luego si el producto cuenta con stock podrás elegir la cantidad pulsando **"+"** o **"-"**, luego pulsas el botón **"AGREGAR AL CARRITO"**.

:three: Luego veras en la parte superior derecha se habilita el carrito con la cantidad de productos elegidos, tenes dos opciones pulsar el carrito o pulsar el botón **"TERMINAR MI COMPRA"** ambos te llevaran al siguiente paso.

:four: Veras un detalle de cada producto por separado con su nombre, cantidad, precio por unidad mas un subtotal y además un precio total final que es la sumatoria de todos los productos.

Además en la parte derecha de cada detalle visualizaras un botón con una **"X"** donde podrás pulsarlo para eliminar dicho producto veras que el subtotal de dicho producto eliminado se restara del total, si todo es correcto puedes pulsar el botón **"GENERAR ORDEN DE COMPRA"**.

Si eliminas todos los productos aparecerá un botón **"SEGUIR COMPRANDO"** para regresar al inicio donde podrás ver mas productos.

:five: En esta parte te va a pedir ingresar tus datos y verificarlos presionando el boton **''VERIFICAR"** donde si todo es correcto se habilita el botón **''COMPRAR"** y al presionarlo podrás visualizar el numero de orden correspondiente a tu compra. Además aparecerá un botón donde podrás seguir viendo mas productos al pulsarlo y el carrito quedara vacío.

### MODIFICACION Y DESPLIEGE :wrench:

:one: Verificar si las modificaciones son correctas con el comando **`git status`** desde la terminal.

:two: Agregar dichas modificación con el comando **`git add`** desde la terminal .

:three: Luego utiliza **`git commit -m "update del proyecto"`** para subirlo a tu repositorio local.

:four: Finalmente utiliza **`git push origin master`** para subirlo a nuestro repositorio de [github].

:five: Si tu intención una vez finalizado es subirlo a un servidor podes ejecutar el comando **`npm run build`** desde la terminal y subir los archivos de la carpeta build que se genera luego de la ejecución de dicho comando.

### COMPONENTES UTILIZADOS :mag:

:small_blue_diamond: **Cart**

Visualiza los productos seleccionados y el precio total de los mismos así también un botón para generar la orden de compra.

:small_blue_diamond: **CartWidget**

Visualiza la cantidad de productos en el carrito si este es menor o igual a cero no se visualizara.

:small_blue_diamond: **Form**

Al ingresar los datos es necesario ingresar nombre, numero de teléfono y correo electrónico validos, también verifica si los correos electrónicos coinciden de lo contrario no se habilitara el botón para finalizar la compra.

:small_blue_diamond: **Item**

Visualiza el producto con sus respectivos detalles con un botón para acceder a detalles específicos y poder seleccionar cantidad del mismo.

:small_blue_diamond: **ItemCard**

Muestra un detalle de los productos seleccionados en el cart por separado mas una botón por cada uno para poder eliminarlos.

:small_blue_diamond: **ItemCount**

Permite seleccionar la cantidad del producto.

:small_blue_diamond: **ItemDetail**

Contiene un detalle mas especifico del producto seleccionado como el stock, permite seleccionar la cantidad del producto mediante un contador.

:small_blue_diamond: **ItemDetailContainer**

Contiene el ItemDetail del producto seleccionado.

:small_blue_diamond: **ItemList**

Mapea los productos necesarios.

:small_blue_diamond: **ItemListContainer**

Contiene los productos y filtra por categoría.

:small_blue_diamond: **NavBar**

Contiene el logo, las categorías y el cart.

### CONTEXT

Contiene la lógica que utilizan varios de los componentes.

##### FUNCIONES

:small_blue_diamond: **addItem** - Agrega productos en el carrito.

```

const addItem = (productToAdd) => {

setCart([...cart, productToAdd]);

};

```

:small_blue_diamond: **getQuantity** - Visualiza la cantidad de los productos al agregarlos al carrito.

```

const getQuantity = () => {

let count = 0;

cart.forEach((prod) => {

count += prod.quantity;

});



return count;

};

```

:small_blue_diamond: **total** - Calcula el precio total de los productos seleccionados.

```

const total = () => {

let total = 0;

cart.forEach((prod) => {

const subtotal = prod.price * prod.quantity;

total += subtotal;

});



return total;

};

```

:small_blue_diamond: **isInCart** - Verifica si los productos ya se encuentra en el carrito.

```

const isInCart = (id) => {

return cart.some((prod) => prod.id === id);

};

```

:small_blue_diamond: **clearCart** - Vacía / limpia los productos en el carrito.

```

const clearCart = () => {

setCart([]);

};

```

:small_blue_diamond: **removeItem** - Elimina el producto seleccionado del carrito.

```

const removeItem = (id) => {

const products = cart.filter((prod) => prod.id !== id);

setCart(products);

};

```

:small_blue_diamond: **getQuantityProd** - Guarda la cantidad seleccionada del producto.

```

const getQuantityProd = (id) => {

return cart.find((prod) => prod.id === id)?.quantity;

};

```

### SERVICES

Contiene la configuración de Firebase del proyecto.

### FIREBASE :fire:

En [Firebase] vamos a tener en un principio 2 colecciones products y categories ambas van a tener un campo, tipo y valor.

- **products**

Vamos a encontrarnos con cuatro productos diferentes con un ID generado automáticamente cada uno con su category, description, img, name, price y stock por ejemplo

```sql <!-- REALMENTE ES FIREBASE -->

category:"celular"

description: "Description de Samsung s21"

img: "https://www.cetrogar.com.ar/media/catalog/product/t/e/te2687-1.jpg?width=500&height=500&canvas=500:500&quality=80&bg-color=255,255,255&fit=boundshttps://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG"

name: "Samsung S21"

price: 44000

stock: 23

```

- **categories**

Vamos a encontrarnos con tres categorías pero esta vez en vez de que tengan un ID generado automáticamente van a llevar sus respectivos nombres cada una con su descripción.

- celular
- notebook
- tablet

```sql <!-- REALMENTE ES FIREBASE -->

description: "Celular"

```

y finalmente otra colección llamada orders que va a ser la que nosotros generamos automáticamente para finalizar la compra, esta misma va a contener los datos ingresados y un detalle de la compra realizada

```sql <!-- REALMENTE ES FIREBASE -->

buyer

correo:"dionelalvarez@gmail.com"

correoConfirm:"dionelalvarez@gmail.com"

nombre: "dionel"

telefono:"3256888569"

date: 4 de mayo de 2022, 22:28:49 UTC-3

proOrder

0

id:"mGHPjV7iFKoj4FLoho3S"

name:"Lenovo Tab K10"

priceUni: 40000

quantity: 2

total: 80000



```

### MAS INFO :cd:

Para aprender mas sobre HTML, consulte la [documentación de HTML].

Para aprender mas sobre CSS, consulte la [documentación de CSS].

Para aprender mas sobre JavaScript, consulte la [documentación de JavaScript].

Para aprender mas sobre React, consulte la [documentación de React].

Para aprender mas sobre React Router , consulte la [documentación de React Router].

Para aprender mas sobre react hook form, consulte la [documentación de react hook form].

Para aprender mas sobre Firebase, consulte la [documentación de Firebase].

Para aprender mas sobre Font Awesome, consulte la [documentación de Font Awesome].

Para aprender mas sobre Git , consulte la [documentación de Git].

### AUTORES :boy:

- [Lautaro Vaz] - Proyecto

- [Lautaro Vaz] - Documentación

### :heart: MUCHISIMAS GRACIAS :heart:

Este proyecto no se habría podido realizar sin al colaboración de muchas personas que me han brindado su ayuda, sus conocimientos y su apoyo. Quiero agradecerles a todos ellos cuanto han hecho por mi, para que este trabajo saliera adelante de la mejor manera posible.

Totalmente agradecido con mi profesor [Sebastián Zuviria], mi tutor [Rodrigo Fernández madrid] que me han ayudado y apoyado en todo momento. Han corregido minuciosamente este trabajo y me han dado la posibilidad de mejorarlo. Agradezco sus sugerencias y las correcciones con las que he podido elaborar un adecuado proyecto a lo largo de esta cursada y también me gustaría agradecer a todos los compañeros de la camada **#31145** unos genios totales.

<!-- ENLACES -->

[coderhouse]: https://www.coderhouse.com
[reactjs]: https://es.reactjs.org/
[documentación de react]: https://es.reactjs.org/docs/getting-started.html
[react]: https://es.reactjs.org/
[firebase]: https://firebase.google.com/
[documentación de firebase]: https://firebase.google.com/docs?hl=es-419
[react hook form]: https://react-hook-form.com/
[documentación de react hook form]: https://react-hook-form.com/get-started
[documentación de font awesome]: https://fontawesome.com/docs
[documentación de react router]: https://reactrouter.com/docs/en/v6
[documentación de git]: https://git-scm.com/doc
[documentación de html]: https://es.wikipedia.org/wiki/HTML5
[documentación de css]: https://es.wikipedia.org/wiki/CSS
[documentación de javascript]: https://es.wikipedia.org/wiki/JavaScript
[font awesome]: https://fontawesome.com/
[react router]: https://reactrouter.com/
[git]: https://git-scm.com/
[github]: https://github.com/LautaroCODE/ecommerce31145
[créate react app]: https://es.reactjs.org/docs/create-a-new-react-app.html
[sebastián zuviria]: https://github.com/szuviria
[rodrigo fernández madrid]: https://www.youtube.com/watch?v=mCdA4bJAGGk
[lautaro vaz]: https://github.com/LautaroCODE
[css]: https://es.wikipedia.org/wiki/CSS
[html]: https://es.wikipedia.org/wiki/HTML5
[javascript]: https://es.wikipedia.org/wiki/JavaScript

<!--IMAGENES-->

[gifproyecto]: https://i.postimg.cc/XJynkcxC/Animation1a.gif
[htmlico]: https://img.icons8.com/color/48/000000/html-5--v1.png
[cssico]: https://img.icons8.com/color/48/000000/css3.png
[jsico]: https://img.icons8.com/color/50/000000/javascript.png
[reactico]: https://img.icons8.com/color/48/000000/react-native.png
[gitico]: https://img.icons8.com/color/48/000000/git.png
[firebasee]: https://img.icons8.com/color/48/000000/firebase.png
