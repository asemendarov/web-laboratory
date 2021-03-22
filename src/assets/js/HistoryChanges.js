"use strict"

/**
 * Хранит историю состояний объекта в формате JSON
 * @class 
 */
export default class HistoryChanges {
  /**
   * @param {Number} maxLength - максимальный размер хранилища
   * @constructor
   */
  constructor(maxLength) {
    // Validation
    if ((maxLength ^ 0) !== maxLength) {
      throw `(HistoryChanges) maxLength is not integer`;
    }

    if (maxLength < 3) {
      throw `(HistoryChanges) maxLength < 3`;
    } 

    /** @private */
    this._state = [];

    /** @private */
    this._index = null;

    /** @private */
    this._maxLength = maxLength;
  }

  /**
   * @returns возвращает логическое значение, указывающее, является ли хранилище пустым
   * @public
   */
  get isEmpty() {
    return !this._state.length
  }

  /**
   * @returns возвращает логическое значение, указывающее, является ли текущая позиция в хранилище её началом. Если пустой, то также вернет true.
   * @public
   */
  get isBegin() {
    return this.isEmpty ? true : !this._index;
  }

  /**
   * @returns возвращает логическое значение, указывающее, является ли текущая позиция в хранилище её концом. Если пустой, то также вернет true.
   * @public
   */
  get isEnd() {
    return this.isEmpty ? true : !(this._state.length - 1 - this._index);
  }

  /**
   * @returns возвращает объект, хранящийся на текущей позиции хранилища 
   * @public
   */
  get current() {
    return JSON.parse(this._state[this._index]);
  }

  /**
   * Перемещает указатель назад по истории
   * @returns возвращает текущий объект после смещения
   * @throws выдает ошибку в случаи, когда хранилище пустое
   * @public
   */
  back() {
    if (this.isEmpty) {
      throw '(HistoryChanges) state is null';
    }
    
    return JSON.parse(this._state[this.isBegin ? 0 : --this._index]);
  }

  /**
   * Перемещает указатель вперед по истории
   * @returns возвращает текущий объект после смещения
   * @throws выдает ошибку в случаи, когда хранилище пустое
   * @public
   */
  forward() {
    if (this.isEmpty) {
      throw '(HistoryChanges) state is null';
    }

    return JSON.parse(this._state[this.isEnd ? this._index : ++this._index]);
  }

  /**
   * Добавляет новое состояние затирая всю впереди стоящую историю
   * @param {Object} state - помещает полученные объект в хранилище
   * @public
   */
  pushState(state) {
    if (this._state.length - 1 - this._index) {
      this._state.splice(this._index + 1);
    }

    if (this._state.length == this._maxLength) {
      this._state.shift();
      this._index = this._index ? this._index - 1 : 0;
    }
    
    this._state.push(JSON.stringify(state)) - 1
  }
}