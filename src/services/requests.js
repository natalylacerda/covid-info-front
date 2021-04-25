import api from "./api";

export const getStates = () => api.get("/states");

export const showState = (id) => api.get(`/states/${id}`);
