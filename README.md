# Proyecto final: portafolio

Crear un portafolio demostrando las tecnologías aprendidas en clase.

## Instalación

Usar el manejador de paquetes [npm](https://www.npmjs.com/) para instalar el proyecto. Ejecutar desde la carpeta raiz:

```bash
npm install
```

## Uso

- Produccion

Para producción modificar el archivo webpack.config.js y cambiar el modo a producción 

```bash
5:    mode: 'production',
```

luego ejecutar en la consola el comando:

```bash
npm run build
```

Copiar los archivos de la carpeta [/dist] en la ruta de la pagina en el servidor

- Desarrollo

Para desarrollo modificar el archivo webpack.config.js y cambiar el modo a development

```bash
5:    mode: 'development',
```

luego ejecutar en la consola el comando:

```bash
npm run dev
```

La aplicación estara disponible en [localhost:8080]


## License
[MIT](https://choosealicense.com/licenses/mit/)
