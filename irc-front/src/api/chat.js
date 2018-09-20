// @flow
import type { ChatHeaderType } from 'ducks/stateType';

const roomApi = '/api/room';
const userApi = '/api/user';

const fetchJson = async <T>(
  url: string,
  options: mixed
): Promise<T> => {
  const newOptions = {
    ...options,
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  };

  const res = await fetch(url, newOptions);
  const contentType = res.headers.get('content-type');
  const responseMime = contentType.split(';')[0];
  switch (responseMime) {
    case 'text/plain': {
      return res.text();
    }
    case 'application/json': {
      return res.json();
    }
    default: {
      throw `No parsing scenario for content type: ${contentType}`;
    }
  }
};

const fetchPost = async <T>(
  url: string, body: mixed, options: mixed = {}
): Promise<T> => {
  const newOptions = {
    ...options,
    method: 'POST',
    body: JSON.stringify(body)
  };

  return await fetchJson(url, newOptions);
};

const fetchGet = async <T>(
  url: string,
  options: mixed = {}
): Promise<T> =>
  fetchJson(url, { ...options, method: 'GET' });

export const getRoomMessages = async (
  id: string
): Promise<Array<string>> =>
  fetchGet(`${roomApi}/${id}`);

export const postNewRoom = async (name: string): Promise<string> =>
  fetchPost(`${roomApi}`, { name });

export const getUserRooms = async (
): Promise<Array<ChatHeaderType>> =>
  fetchGet(`${roomApi}/list`);

export const getUserInfo = async (): Promise<string> =>
  fetchGet(`${userApi}`);
