# MarcasTasksApp

Aplicación móvil creada en **React Native + TypeScript** utilizando **Redux** para manejo de estado y pruebas unitarias con **Jest** y **React Native Testing Library**.

## 📱 Funcionalidad

La app cuenta con dos secciones:

### ✅ Tasks
- Lista local de tareas (guardadas en Redux)
- Modal para agregar nuevas tareas
- Validación: no permite agregar tareas vacías
- Persistencia en navegación

### 🌐 Listado Remoto
- Fetch de datos desde: `https://6172cfe5110a740017222e2b.mockapi.io/elements`
- Renderizado de nombre e imagen
- Carga automática al abrir la pantalla
- Indicador de carga (`ActivityIndicator`)

---

## 🧪 Pruebas

Todas las funcionalidades están cubiertas con pruebas unitarias:

- ✅ Reducer Redux (`addTask`)
- ✅ Validación de campos vacíos
- ✅ Agregado de tareas
- ✅ Fetch de lista remota
- ✅ Carga de elementos en pantalla

Ejecutá las pruebas con:

```bash
npm test
