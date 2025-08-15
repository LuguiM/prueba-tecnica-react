# 🎬 Cine Archivo

Aplicación web que permite a los usuarios visualizar y administrar información relacionada con películas y series.  
Desarrollada con **React** y **Vite**, desplegada en **Vercel**.

---

## 🚀 API Utilizada

**Nombre:** [The Movie Database (TMDb)](https://www.themoviedb.org/)  
**Documentación oficial:** [https://developer.themoviedb.org/](https://developer.themoviedb.org/)

### 🔑 Cómo obtener el API Key
1. Crear una cuenta en [TMDb](https://www.themoviedb.org/signup).
2. Iniciar sesión y dirigirse a la sección **API suscription** desde el perfil.
3. Solicitar un **API Key**.
4. Guardar la clave en un archivo `.env` en la raíz del proyecto con la siguiente estructura:

```env
VITE_API_URL=https://api.themoviedb.org/3
VITE_API_KEY=tu_api_key_aqui
```

## 🖥️ Instrucciones para correr la app localmente

### 1️⃣ Clonar el repositorio
```
git clone https://github.com/LuguiM/prueba-tecnica-react.git
cd prueba-tecnica-react
```

### 2️⃣ Instalar dependencias
```
npm install
```

### 3️⃣ Configurar variables de entorno
Crear un archivo **.env** en la raíz del proyecto con el siguiente contenido:
```
VITE_API_URL=https://api.themoviedb.org/3
VITE_API_KEY=tu_api_key_aqui
```

### 4️⃣ Ejecutar el proyecto
```
npm run dev
```
La aplicacion se ejecutará en: http://localhost:573

## 🌐 Demo en línea
La aplicación está desplegada en **Vercel** y disponible en el siguiente enlace:

🔗 https://prueba-tecnica-react-snowy.vercel.app/

## 📷 Capturas de pantalla

### Página principal
![Página principal](./screenshots/home.png)

### Detalle de película
![Detalle de película](./screenshots/detail.png)

### Búsqueda de películas y series
![Búsqueda](./screenshots/search.png)


## 📦 Justificación de librerías externas

- **React Router** → Navegación entre páginas sin recargar el sitio.
- **Redux Toolkit** → Manejo centralizado y eficiente del estado global.
- **Material UI** → Componentes preconstruidos con diseño moderno y responsive.
- **Tailwind CSS** → Utilidades para un diseño rápido, flexible y personalizable.

Estas librerías fueron seleccionadas para optimizar el tiempo de desarrollo, mantener un código modular y ofrecer una interfaz atractiva y fluida al usuario.
