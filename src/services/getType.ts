import api from './api';

export async function getType(typeId: number) {

  const response = await api.get(`/type/${typeId}`);
  return response.data;
}