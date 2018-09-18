// @flow
import type { ChatHeaderType } from 'ducks/stateType';

const API = '/api/room';

const fetchJson = async <T>(url: string, body: mixed, options: mixed): Promise<T> => {
  const newOptions = { ...options, credentials: 'same-origin' };
  const res = await fetch(url, newOptions);
  return res.json();
}

const fetchPost = async <T>(url: string, body: mixed, options: mixed = {}): Promise<T> =>
  fetchJson(url, { ...options, method: 'POST', body: JSON.stringify(body) });

const fetchGet = async <T>(url: string, options: mixed = {}): Promise<T> =>
  fetchJson(url, { ...options, method: 'GET' });

export const getRoomMessages = async (id: string): Promise<Array<string>> =>
  fetchGet(`${API}/${id}`);

export const postNewRoom = async (name: string): Promise<string> =>
  fetchPost(`${API}`, { name });

export const getUserRooms = async (): Promise<Array<ChatHeaderType>> =>
  fetchGet(`${API}/list`);
