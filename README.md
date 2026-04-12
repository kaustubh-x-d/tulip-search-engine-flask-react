# 🔎 Tulip- Search Engine App

A full-stack search engine web application built using **React** and **Flask** that fetches and displays search results from **DuckDuckGo** using **ScraperAPI** and **BeautifulSoup**.

This project demonstrates **frontend-backend integration**, **API communication**, **web scraping**, and **state management**.

---

## 🚀 Features

* Search functionality with real-time query input
* React frontend with dynamic rendering
* Flask backend API
* DuckDuckGo search result scraping
* Clean JSON response handling
* Clickable result links
* Cross-origin support using CORS
* Secure API key management using `.env`

---

## 🛠 Tech Stack

### Frontend

* React
* JavaScript
* Fetch API
* CSS / basic UI components

### Backend

* Flask
* Python
* Beautiful Soup
* ScraperAPI
* Flask-CORS
* python-dotenv

---

## 📂 Project Structure

```text
search-engine-app/
│
├── backend/
│   ├── app.py
│   ├── .env.example
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/search-engine-app.git
cd search-engine-app
```

---

## 🔐 Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate it:

### Windows

```bash
venv\Scripts\activate
```

### Mac/Linux

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create `.env` file:

```env
SCRAPER_API_KEY=your_scraperapi_key_here
```

Run Flask server:

```bash
python app.py
```

Server runs on:

```text
http://127.0.0.1:5000
```

---

## 💻 Frontend Setup

Navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run React app:

```bash
npm run dev
```

or

```bash
npm start
```

App runs on:

```text
http://localhost:3000
```

---

## 🔄 How It Works

1. User enters a search query
2. React sends GET request to Flask API
3. Flask receives query parameter
4. Backend calls DuckDuckGo through ScraperAPI
5. BeautifulSoup parses HTML response
6. JSON results sent back to frontend
7. React renders clickable links

---

## 🎯 Learning Outcomes

This project helped me strengthen my understanding of:

* Full-stack application architecture
* React state management
* API integration
* Flask routing
* Web scraping
* Environment variable security

---

## 📌 Future Improvements

* Pagination support
* Search loading spinner
* Better UI styling
* Search history
* Debounced input search
* Deployment on Vercel + Render
* Search result snippets

---

## 👨‍💻 Author

Built by **Kaustubh**
