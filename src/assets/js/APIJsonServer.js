
import { isObject } from './utilities.js'

export default class APIJsonServer{
  constructor(urlServer) {
    this.urlServer = urlServer;
  }

  async get(path) {
    const response = await fetch(`${this.urlServer}${path}`);

    if (!response.ok) {
      throw `(${this.$options.name}) Error > Fetch contact list. Status: ${response.status}`;
    }

    const obj = await response.json();

    return obj; 
  }

  // Создает данные на сервере
  async create(path, data) {
    if (!isObject(data)) {
      throw `(API JsonServer) data is not [object Object]`;
    }

    delete data.id;

    const response = await fetch(`${this.urlServer}${path}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      throw `(API JsonServer) Error > Creating resource on server. Status: ${response.status}`;
    }

    const obj = await response.json();

    return obj;
  }  

  // Обновляет данные на сервере
  async update(path, data) {
    if (!isObject(data)) {
      throw `(API JsonServer) data is not [object Object]`;
    }

    if (!data.id || !/^[1-9]\d*$/.test(data.id)) {
      throw "(API JsonServer) Error > incorrect id";
    }

    const response = await fetch(`${this.urlServer}${path}/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      throw `(API JsonServer) Error > Updating resource on server. Status: ${response.status}`;
    }

    const obj = await response.json();

    return obj;
  }

  // Удаляет данные на сервере
  async delete(path, data) {
    if (!isObject(data)) {
      throw "(ContactInfoPage) data is not [object Object]";
    }

    if (!data.id || !/^[1-9]\d*$/.test(data.id)) {
      throw "(API JsonServer) Error > incorrect id";
    }

    const response = await fetch(`${this.urlServer}${path}/${data.id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw `(API JsonServer) Error > Deleting resource on server. Status: ${response.status}`;
    }
  }
}