# 📚 Library CRUD Project  

## 🚀 Overview  
This is a simple **CRUD (Create, Read, Update, Delete)** web application built using:  
- **Express.js** as the backend framework  
- **MongoDB** as the database  
- **Express-Handlebars** as the view engine  

It allows users to manage a collection of books by:  
- Adding a new book  
- Viewing all books  
- Editing an existing book  
- Deleting a book  

---

## 🛠️ Tech Stack  
- **Node.js**  
- **Express.js**  
- **MongoDB**  
- **Express-Handlebars**  
- **Body-Parser**  

---

## ⚙️ Installation  

1. Clone the repository  
   ```bash
   git clone https://github.com/your-username/library-crud-express.git
   cd library-crud-express
   ```

2. Install dependencies  
   ```bash
   npm install
   ```

3. Start MongoDB server locally  
   ```bash
   mongod
   ```

4. Run the app  
   ```bash
   node app.js
   ```

---

## 🌐 Usage  

- Open browser and go to:  
  ```
  http://localhost:3000
  ```  

- You can now:  
  ✅ Add a book (title, author)  
  ✏️ Edit a book  
  🗑️ Delete a book  
  📖 View all books  

---

## 📂 Project Structure  
```
library-crud-express/
│── app.js         # Main server file
│── db.js          # MongoDB connection
│── views/         # Handlebars templates
│   ├── main.hbs   # Layout template
│   └── ...
│── package.json   # Dependencies
```

---

## 📝 Note  
👉 Make sure you have **MongoDB running locally** before starting the server.  
👉 `node_modules` is excluded via `.gitignore`.  
