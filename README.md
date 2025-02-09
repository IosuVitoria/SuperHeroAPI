# 🦸‍♂️ Humble Superhero API

## 📌 Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Collaboration](#collaboration)
- [If I Had More Time](#if-i-had-more-time)
- [Author](#author)

---

## 🌟 Introduction
The **Humble Superhero API** is a simple RESTful API that allows users to create and retrieve superheroes based on their **name, superpower, and humility score**. Superheroes are stored in an in-memory database and are listed in descending order based on their humility score.

This project serves as an example of how to build a **NestJS API** with best practices, including validation, error handling, and unit testing using **Jest**.

---

## 🚀 Features
- Add superheroes with **name, superpower, and humility score**.
- Retrieve the list of superheroes, **sorted by humility score** (highest first).
- Input validation to ensure **humility score is between 1 and 10**.
- **Unit and integration tests** using Jest and Supertest.
- Structured following **NestJS best practices**.

---

## 🛠 Technologies Used
- **Node.js** - JavaScript runtime.
- **NestJS** - Progressive Node.js framework.
- **Jest** - Unit testing framework.
- **Supertest** - API testing tool.
- **TypeScript** - Typed JavaScript for scalability.

---

## ⚙️ Installation and Setup
### 1️⃣ Prerequisites
Ensure you have **Node.js** installed (preferably version 16+).

### 2️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/humble-superhero-api.git
cd humble-superhero-api
```

### 3️⃣ Install Dependencies
```bash
npm install
```

### 4️⃣ Run the Application
```bash
npm run start
```

The API should now be running at **http://localhost:3000**.

---

## 📡 API Endpoints

### ➕ Add a New Superhero
**POST** `/superheroes`
#### Request Body (JSON):
```json
{
  "name": "Spider-Man",
  "superpower": "Spider Sense",
  "humilityScore": 9
}
```
#### Response:
```json
{
  "id": 1,
  "name": "Spider-Man",
  "superpower": "Spider Sense",
  "humilityScore": 9
}
```

### 📜 Get List of Superheroes (Sorted by Humility Score)
**GET** `/superheroes`
#### Response:
```json
[
  { "id": 1, "name": "Spider-Man", "superpower": "Spider Sense", "humilityScore": 9 },
  { "id": 2, "name": "Iron Man", "superpower": "Advanced Technology", "humilityScore": 5 }
]
```

---

## 🧪 Testing
### Run Unit & Integration Tests
```bash
npm run test
```
### Run Tests with Coverage Report
```bash
npm run test:cov
```

---

## 🤝 Collaboration
To improve or expand this API, teamwork is essential. The best way to collaborate would be:
1. **Code Reviews**: Implement PR reviews to maintain quality.
2. **Task Distribution**: Split work into backend, frontend, and testing.
3. **Continuous Integration (CI)**: Automate testing and deployments.
4. **Communication**: Regular stand-ups or discussions to share ideas.

---

## ⏳ If I Had More Time
- Implement a **frontend in React** to interact with the API.
- Store superheroes in a **database like PostgreSQL or MongoDB**.
- Add **authentication and authorization**.
- Implement **GraphQL support** for better flexibility.

---

## 👨‍💻 Author
- **Your Name**
- GitHub: [yourusername](https://github.com/yourusername)
- Email: your.email@example.com

---

# 🌎 API de Superhéroes Humildes

## 📌 Índice
- [Introducción](#introducción)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación y Configuración](#instalación-y-configuración)
- [Endpoints de la API](#endpoints-de-la-api)
- [Pruebas](#pruebas)
- [Colaboración](#colaboración)
- [Si Tuviera Más Tiempo](#si-tuviera-más-tiempo)
- [Autor](#autor)

---

## 🌟 Introducción
La **API de Superhéroes Humildes** es una API RESTful que permite a los usuarios **crear y recuperar superhéroes** con su nombre, superpoder y puntuación de humildad. Los héroes se almacenan en una base de datos en memoria y se ordenan por **su puntuación de humildad de mayor a menor**.

Este proyecto sigue las **buenas prácticas de NestJS**, incluyendo validación, manejo de errores y pruebas con **Jest**.

---

## 🚀 Características
- Agregar superhéroes con **nombre, superpoder y puntuación de humildad**.
- Obtener la lista de superhéroes, **ordenada por humildad**.
- Validación de entrada: **puntuación de humildad entre 1 y 10**.
- **Pruebas unitarias e integradas** con Jest y Supertest.
- Código estructurado con **mejores prácticas de NestJS**.

---

## 🛠 Tecnologías Utilizadas
- **Node.js**
- **NestJS**
- **Jest**
- **Supertest**
- **TypeScript**

---

## ⚙️ Instalación y Configuración
### 1️⃣ Clonar el Repositorio
```bash
git clone https://github.com/yourusername/humble-superhero-api.git
cd humble-superhero-api
```

### 2️⃣ Instalar Dependencias
```bash
npm install
```

### 3️⃣ Ejecutar la Aplicación
```bash
npm run start
```

---

## 🧪 Pruebas
Ejecutar pruebas unitarias e integración:
```bash
npm run test
```
Obtener informe de cobertura:
```bash
npm run test:cov
```

---

## 🤝 Colaboración
Para mejorar o expandir esta API, se recomienda:
1. **Revisiones de código**
2. **División de tareas**
3. **Integración continua (CI)**
4. **Comunicación efectiva**

---

## ⏳ Si Tuviera Más Tiempo
- Crear una **interfaz en React**.
- Usar una **base de datos real**.
- Implementar **autenticación**.

---

## 👨‍💻 Autor
- **Tu Nombre**
- GitHub: [yourusername](https://github.com/yourusername)
- Email: your.email@example.com

