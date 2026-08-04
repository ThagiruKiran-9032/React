import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function getUsers() {
  const response = await axios.get(API_URL);
  return response.data;
}

export async function addUser(newUser) {
  const response = await axios.post(API_URL, newUser);
  return response.data;
}

export async function updateUser(id, updatedUser) {
  const response = await axios.put(`${API_URL}/${id}`, updatedUser);
  return response.data;
}

export async function deleteUser(id) {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
}

