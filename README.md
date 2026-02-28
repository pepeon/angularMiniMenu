# Mini Menu App

Test task for the **Frontend Developer (Angular)** position.

## 📌 Description

This is a small Angular 19+ application consisting of two pages:

1. **Home page**
   - Welcome message
   - Link to the second page

2. **Menu page**
   - Sidebar with section types
   - List of menu items displayed as checkboxes
   - Header displaying:
     - Current selected section
     - Number of selected items
     - Total value of selected items

All menu data is static (JSON-based). No backend is used.

---

## 🚀 Tech Stack

- Angular 19+
- TypeScript
- HTML
- CSS
- Angular Router
- Standalone Components

---

## 🏗 Project Structure

```
src/
 ├── main.ts
 ├── index.html
 ├── styles.css
 └── app/
     ├── app.component.ts
     ├── app.routes.ts
     └── pages/
         ├── home.component.ts
         ├── menu.component.ts
         ├── menu.component.html
         └── menu.component.css
```

---

## 🧠 Features

- Routing between two pages
- Dynamic checkbox selection
- Real-time calculation of:
  - Selected items count
  - Total value
- Reset of selection when switching sections
- State handled locally inside the Menu page (as required)

---

## 📎 Notes

- All data is static.
- No backend required.
- Design is intentionally minimal, based on the provided layout.
- Built using modern Angular standalone architecture.
