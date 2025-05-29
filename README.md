# Task Management Web Application

## 📋 Project Overview

This is a full-stack Task Management Web Application that allows users to **create**, **view**, **update**, and **delete** tasks. The system is built using a client-server architecture with ReactJS on the frontend, ASP.NET Core Web API on the backend, and SQL Server for the database.

---

## 🖥️ Frontend

**Tech Stack:**
- ReactJS
- CSS
- Axios

**Folder Structure Highlights:**
```
src/
├── components/
│   ├── TaskForm.jsx
│   └── TaskList.jsx
├── App.js
├── index.js
└── services/
    └── api.js
```

**Core Features:**
- **Task List Display:** Fetches and renders all tasks using Axios.
- **Add Task:** TaskForm component posts new task data to the backend.
- **Update/Delete Tasks:** Tasks can be modified or removed via UI interactions and Axios calls.
- **Axios Service (`api.js`):** Reusable Axios instance with base URL for simplified HTTP requests.

---

## 🛠️ Backend

**Tech Stack:**
- ASP.NET Core
- Entity Framework Core
- SQL Server

**Folder Structure Highlights:**
```
Controllers/
├── TaskController.cs
Models/
├── TaskItem.cs
Data/
├── ApplicationDbContext.cs
Program.cs
appsettings.json
```

**Core Features:**
- **RESTful API Endpoints:**
  - `GET /api/tasks` – Retrieve all tasks
  - `POST /api/tasks` – Create a new task
  - `PUT /api/tasks/{id}` – Update a task
  - `DELETE /api/tasks/{id}` – Delete a task
- **Data Model:**
```csharp
public class TaskItem {
    public int Id { get; set; }
    public string Title { get; set; }
    public bool IsCompleted { get; set; }
}
```
- **Database Context:** Configured with `DbSet<TaskItem>` and connected via `appsettings.json`.
- **Migrations:** Managed using EF Core CLI:
  - `dotnet ef migrations add InitialCreate`
  - `dotnet ef database update`

---

## 🔗 Integration

- Frontend communicates with backend using Axios.
- CORS enabled in backend to support cross-origin API requests.

---

## 🚀 Deployment (Optional)

**Deployment Options:**
- Frontend: Build using `npm run build` and host on a static server or CDN (e.g., Netlify).
- Backend: Host using IIS or Azure App Service.
- Ensure consistent API endpoint configuration across both services.

---

## ✅ Conclusion

This Task Management Web Application is a modular, scalable solution demonstrating full-stack web development with modern technologies. It emphasizes clean architecture and separation of concerns, making it a strong foundation for real-world projects.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
