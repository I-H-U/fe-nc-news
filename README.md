# **NC News - Frontend**

🚀 **Live Demo**: [NC News](https://ncnewslive.netlify.app/)

⚠️ **Note:**  
If this is your **first time visiting**, please wait **a few seconds** while the backend server wakes up. This happens because the backend is hosted on **Render**, which spins down when inactive.

---

# 📂 Part 1 - Introduction

## **📌 Project Overview**

NC News is a full-stack news application where users can explore various articles, view comments, upvote/downvote articles, and engage with content. The frontend is built using **React**, while the backend serves data through a REST API.

## **🌟 Features**

- ✔️ View a list of articles sorted by date, votes, or comment count
- ✔️ Filter articles by topic
- ✔️ View individual articles with detailed information
- ✔️ Upvote and downvote articles
- ✔️ Read and post comments
- ✔️ Delete own comments
- ✔️ Error handling for non-existent routes, topics, and articles

---

## **📂 Back-End Repository**

🔗 [NC News Backend](https://github.com/I-H-U/nc_news/blob/main/README.md)

This project communicates with a REST API hosted separately. The backend is responsible for managing articles, comments, and votes. For more details, check out the backend repository.

---

## **🛠️ Tech Stack**

- **Frontend:** React, React Router
- **Backend:** Node.js, Express.js (Hosted separately)
- **Database:** PostgreSQL
- **Hosting:** Netlify (Frontend), Render (Backend)

---

## **⚙️ Minimum Requirements**

- **Node.js**: `v.20.0.0` (Check your Node version using `node --version`)

---

## **📥 Installation & Running Locally**

To run this project locally, follow these steps:

### 1️⃣ **Clone the repository**

```sh
git clone https://github.com/I-H-U/fe-nc-news.git
cd nc-news-frontend
```

### 2️⃣ **Install dependencies**

```sh
npm install
```

### 3️⃣ **Start the development server**

```sh
npm run dev
```

This will start a local development server, usually accessible at `http://localhost:5173/`.

---

## **🔧 Configuration**

The frontend is configured to fetch data from the hosted backend API. If running the backend locally, update the `baseURL` in `utils/api.js` accordingly.

---

# 📂 Part 2 - Additional Features

- **Sorting & Filtering:** Users can sort articles by date, votes, or comment count, and filter them by topics.
- **Voting System:** Users can upvote/downvote articles dynamically.
- **Comment System:** Users can post and delete their own comments.
- **Error Handling:** Proper handling for invalid routes, missing articles, and failed actions.

---

# 📂 Part 3 - Error Handling

This project includes **robust error handling** for:

- **Invalid Routes:** Displays a 404 page for non-existent paths.
- **Non-Existent Articles:** Shows an error when trying to access a missing article.
- **Non-Existent Topics:** Informs users if they navigate to a topic that does not exist.
- **Invalid Query Parameters:** Users are notified if an invalid sorting/filtering option is selected.
- **Failed Comment Submission:** Displays an error if a comment is missing required fields.

---

## 📝 Contributions

Contributions are welcome! If you'd like to improve the project:

1. **Fork** the repository
2. **Create a new branch**
   ```sh
   git checkout -b feature-branch
   ```
3. **Commit your changes**
   ```sh
   git commit -m "Add new feature"
   ```
4. **Push to your branch**
   ```sh
   git push origin feature-branch
   ```
5. **Open a pull request**

---

## 📜 License

This project is open-source and free to use.

---

## 📌 About This Project

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/).
