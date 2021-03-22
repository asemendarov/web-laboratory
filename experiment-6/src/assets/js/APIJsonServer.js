
import { isObject } from './utilities.js'

/**
 * Интерфейс для взаимодействия с JSON сервером
 * @class 
 */
export default class APIJsonServer{
  /**
   * @param {String} urlServer - URL сервера 
   * @constructor
   */
  constructor(urlServer) {
    this.urlServer = urlServer;
  }

  /**
   * Отправляет aсинхронный GET запрос для загрузки данных с сервера
   * @param {String} path - относительный путь ресурса
   * @throws Вызывает ошибку, если статус ответа не находится в диапазоне от 200 до 299 включительно
   * @returns {Promise} Promise объект возвращающий данные, которые были запрошены с сервера
   * @public
   */
  async get(path) {
    const response = await fetch(`${this.urlServer}${path ?? ''}`);

    if (!response.ok) {
      throw `(API JsonServer) Error > Fetch contact list. Status: ${response.status}`;
    }

    const obj = await response.json();

    return obj; 
  }

  /**
   * Отправляет aсинхронный POST запрос для создания данных на сервере
   * @param {String} path - относительный путь ресурса
   * @param {Object} data - данные, которые необходимо поместить на сервер
   * @throws 1. Вызывает ошибку, если входной параметр data не является объектом
   * @throws 2. Вызывает ошибку, если статус ответа не находится в диапазоне от 200 до 299 включительно
   * @returns {Promise} Promise объект возвращающий данные, которые были созданы на серере
   * @public
   */
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

  /**
   * Отправляет aсинхронный PUT запрос на обновление данных на сервере
   * @param {String} path - относительный путь ресурса
   * @param {Object} data - данные, которые необходимо обновить на сервере
   * @throws 1. Вызывает ошибку, если входной параметр data не является объектом
   * @throws 2. Вызывает ошибку, если входной параметр data не имеет id
   * @throws 3. Вызывает ошибку, если статус ответа не находится в диапазоне от 200 до 299 включительно
   * @returns {Promise} Promise объект возвращающий данные, которые были обновлены и получены с сервера
   * @public
   */
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

  /**
   * Отправляет aсинхронный DELETE запрос на удаление данных с сервере
   * @param {String} path - относительный путь ресурса
   * @param {Object} data - данные, которые необходимо обновить на сервере
   * @throws 1. Вызывает ошибку, если входной параметр data не является объектом
   * @throws 2. Вызывает ошибку, если входной параметр data не имеет id
   * @throws 3. Вызывает ошибку, если статус ответа не находится в диапазоне от 200 до 299 включительно
   * @returns {Promise} Promise объект
   * @public
   */
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