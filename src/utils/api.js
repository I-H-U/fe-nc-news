import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-k8ee.onrender.com/api/",
});

export const getArticles = async () => {
  const response = await api.get("/articles");
  return response.data.articles;
};

export const getArticleById = async (article_id) => {
  const response = await api.get(`/articles/${article_id}`);
  return response.data.article;
};

export default api;
