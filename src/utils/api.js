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

export const getCommentsByArticleId = async (article_id) => {
  const response = await api.get(`/articles/${article_id}/comments`);
  return response.data.comments;
};

export const patchArticleVotes = async (article_id, inc_votes) => {
  const response = await api.patch(`/articles/${article_id}`, { inc_votes });
  return response.data.article;
};

export const postCommentByArticleId = async (article_id, commentData) => {
  const response = await api.post(
    `/articles/${article_id}/comments`,
    commentData
  );
  return response.data.comment;
};

export const deleteCommentById = async (comment_id) => {
  await api.delete(`/comments/${comment_id}`);
};

export const getTopics = async () => {
  const response = await api.get("/topics");
  return response.data.topics;
};

export const getArticlesByTopic = async (topic) => {
  const response = await api.get(`/articles?topic=${topic}`);
  return response.data.articles;
};

export default api;
