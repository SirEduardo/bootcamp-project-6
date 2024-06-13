# API de Gestión de Películas y Personajes

Esta API permite gestionar personajes y películas, proporcionando endpoints para crear, leer, actualizar y eliminar tanto personajes como películas. Está construida con Node.js, Express y MongoDB.

## Instalación


1. Instala las dependencias:
    ```sh
    npm install
    ```

2. Instala las dependencias de desarrollo:
    ```sh
    npm install -D
    ```

3. Inicia el servidor:
    ```sh
    npm run dev
    ```
    
El servidor estará disponible en `http://localhost:3000`.

4. Se conecta a la BBDD

## Endpoints

### Personajes

#### Obtener todos los personajes
- **URL:** `/api/v1/characters`
- **Método:** `GET`
- **Descripción:** Obtiene una lista de todos los personajes en la base de datos.

#### Crear un nuevo personaje
- **URL:** `/api/v1/characters`
- **Método:** `POST`
- **Descripción:** Crea un nuevo personaje en la base de datos.
- **Cuerpo de la solicitud:**
    ```json
    {
        "name": "Nombre del personaje",
        "age": "Edad del personaje",
        "alias": "Alias del personaje",
        "movies": "ID de la película"
    }
    ```

#### Actualizar un personaje
- **URL:** `/api/v1/characters/:id`
- **Método:** `PUT`
- **Descripción:** Actualiza la información de un personaje existente en la base de datos.
- **Parámetros de la URL:**
    - `id`: ID del personaje a actualizar.
- **Cuerpo de la solicitud:**
    ```json
    {
        "name": "Nuevo nombre del personaje",
        "age": "Nueva edad del personaje",
        "alias": "Nuevo alias del personaje",
        "movies": "Nuevo ID de la película"
    }
    ```

#### Eliminar un personaje
- **URL:** `/api/v1/characters/:id`
- **Método:** `DELETE`
- **Descripción:** Elimina un personaje existente de la base de datos.
- **Parámetros de la URL:**
    - `id`: ID del personaje a eliminar.

### Películas

#### Obtener todas las películas
- **URL:** `/api/v1/movies`
- **Método:** `GET`
- **Descripción:** Obtiene una lista de todas las películas en la base de datos.

#### Crear una nueva película
- **URL:** `/api/v1/movies`
- **Método:** `POST`
- **Descripción:** Crea una nueva película en la base de datos.
- **Cuerpo de la solicitud:**
    ```json
    {
        "name": "Título de la película",
        "duration": "Duración de la película",
        "year": "Año de estreno",
        "characters": "ID del personaje"
    }
    ```

#### Actualizar una película
- **URL:** `/api/v1/movies/:id`
- **Método:** `PUT`
- **Descripción:** Actualiza la información de una película existente en la base de datos.
- **Parámetros de la URL:**
    - `id`: ID de la película a actualizar.
- **Cuerpo de la solicitud:**
    ```json
    {
        "name": "Nuevo título de la película",
        "duration": "Nueva duración de la película",
        "year": "Nuevo año de estreno",
        "characters": "Nuevo ID del personaje"
    }
    ```

#### Eliminar una película
- **URL:** `/api/v1/movies/:id`
- **Método:** `DELETE`
- **Descripción:** Elimina una película existente de la base de datos.
- **Parámetros de la URL:**
    - `id`: ID de la película a eliminar.

## Manejo de Errores

- **Ruta no encontrada:**
    - **URL:** `*`
    - **Método:** `ALL`
    - **Descripción:** Cualquier ruta no definida devolverá un error 404 con el mensaje "Route not found".

- **Manejador de errores genérico:**
    Cualquier error inesperado devolverá un error 500 con el mensaje "Unexpected error".
