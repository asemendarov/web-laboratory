"use strict"

export default class HistoryChanges {
  constructor(maxLength) {
    // Validation
    if ((maxLength ^ 0) !== maxLength) {
      throw `(HistoryChanges) maxLength is not integer`;
    }

    if (maxLength < 3) {
      throw `(HistoryChanges) maxLength < 3`;
    } 

    // Public
    this.state = [];

    // Private
    this._index = null;
    this._maxLength = maxLength;
  }

  set index(value) {
    console.log('index', 'old', this.index, 'new', value);
    this._index = value;
  }

  get index() {
    return this._index;
  }

  get isEmpty() {
    return !this.state.length
  }

  get isBegin() {
    return this.isEmpty ? true : !this.index;
  }

  get isEnd() {
    return this.isEmpty ? true : !(this.state.length - 1 - this.index);
  }

  // текущее состояние
  get current() {
    return JSON.parse(this.state[this.index]);
  }

  // переместиться назад по истории
  back() {
    if (this.isEmpty) {
      throw '(HistoryChanges) state is null';
    }
    
    return JSON.parse(this.state[this.isBegin ? 0 : --this.index]);
  }

  // переместиться вперед по истории
  forward() {
    if (this.isEmpty) {
      throw '(HistoryChanges) state is null';
    }

    return JSON.parse(this.state[this.isEnd ? this.index : ++this.index]);
  }

  // добавляет новое состояние затирая всю впереди стоящую историю
  pushState(state) {
    if (this.state.length - 1 - this.index) {
      this.state.splice(this.index + 1);
    }

    if (this.state.length == this._maxLength) {
      this.state.shift();
      this.index = this.index ? this.index - 1 : 0;
    }
    
    this.index = this.state.push(JSON.stringify(state)) - 1

    return this.state[this.index];
  }
}