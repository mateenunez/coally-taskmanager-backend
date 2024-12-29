
# Task Manager

Task Manager para Coally



## Deployment

Este trabajo se encuentra desplegado en la siguiente URL:

https://coally-taskmanager-frontend-jri9nhtdx-mateo-nuezs-projects.vercel.app/
### Local Deployment

Y el backend se encuentra en la siguiente URL:

https://coally-taskmanager-backend.onrender.com/

Para instalar el proyecto desde el backend necesitas los siguientes paquetes:

```
npm install cors dotenv express express-validator mongoose swagger-jsdoc swagger-ui-express
```

Dependencias de desarrollador (opcional):

```
npm install nodemon
```

Para instalar el proyecto desde el frontend necesitas los siguientes paquetes:

```
npm install @next/env next react react-dom react-icons

```

Dependencias de desarrollador:

```
npm install eslint eslint-config-next @eslint/eslintrc postcss tailwindcss
```


## Environment Variables

Para ejecutar este proyecto, deberá agregar las siguientes variables de entorno a su archivo .env

Backend:

`CONNECTION_STRING` - String de conexion para MongoDb

`PORT`- Puerto donde se ejecutara el backend 

Frontend:

`NEXT_PUBLIC_API_URL` - la ruta de la API de Express




## Run Locally


Una vez instaladas las dependencias y configurados los .env

Para el backend

```bash
  npm run start
```

Para el frontend (si no se construyó la solucion)

```bash
  npm run dev
```


## API Reference

#### Obtener todas las tareas

```http
  GET /api/tasks/
```

#### Obtener una tarea

```http
  GET /api/tasks/${_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `string` | **Requerido**. Id de la tarea a buscar |


#### Crear tarea

```http
  POST /api/tasks/
```

###### Body Requerido

```json
{"title":"",
"description":""}
```

#### Actualizar tarea

```http
  PUT /api/tasks/${_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `string` | **Requerido**. Id de la tarea a buscar |

###### Body Requerido

```json
{"title":"",
"description":"",
"completed": true}
```

#### Eliminar tarea

```http
  DELETE /api/tasks/${_id}
```


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `string` | **Requerido**. Id de la tarea a buscar |


## Screenshots

![Screenshot_1](https://github.com/user-attachments/assets/ab636c71-babb-4c20-9670-ac827b2cde86)
![Screenshot_2](https://github.com/user-attachments/assets/426ae6a3-9920-4944-9cb7-72afa2c957a8)
