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
    this._idx = 0;
    this._maxLength = maxLength;
  }

  get index() {
    return this._idx;
  }

  get isEmpty() {
    return !this.state.length
  }

  get isBegin() {
    return this.isEmpty ? true : !this._idx;
  }

  get isEnd() {
    return this.isEmpty ? true : !(this.state.length - 1 - this._idx);
  }

  // текущее состояние
  get current() {
    return JSON.parse(this.state[this._idx]);
  }

  // переместиться назад по истории
  back() {
    if (this.isEmpty) {
      throw '(HistoryChanges) state is null';
    }

    console.log('forward', this.index);

    return JSON.parse(this.state[this.isBegin ? 0 : --this._idx]);
  }

  // переместиться вперед по истории
  forward() {
    if (this.isEmpty) {
      throw '(HistoryChanges) state is null';
    }

    console.log('forward', this.index);

    return JSON.parse(this.state[this.isEnd ? this._idx : ++this._idx]);
  }

  // добавляет новое состояние затирая всю впереди стоящую историю
  pushState(state) {
    if (this.state.length - 1 - this._idx) {
      this.state.splice(this._idx + 1);
    }

    if (this.state.length == this._maxLength) {
      this.state.shift();
      this._idx = this._idx ? this._idx - 1 : 0;
    }
    
    this._idx = this.state.push(JSON.stringify(state)) - 1

    console.log('forward', this.index);

    return this.state[this._idx];
  }
}