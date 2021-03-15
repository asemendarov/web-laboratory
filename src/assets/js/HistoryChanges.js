export default class HistoryChanges {
  constructor(maxLength) {
    ///////// Validation /////////
    if ((maxLength ^ 0) !== maxLength) {
      throw `(HistoryChanges) maxLength is not integer`;
    }

    if (maxLength < 3) {
      throw `(HistoryChanges) maxLength < 3`;
    } 

    ///////// Public /////////
    this.state = [];

    ///////// Private /////////
    this._idx = 0;
    this._maxLength = maxLength;
  }

  ///////// Setter /////////
  // pass

  ///////// Getter /////////
  get current() {
    return this.state[this._idx];
  }

  ///////// Methods /////////

  // переместиться назад по истории
  back() {
    if (!this.state.length) {
      throw '(HistoryChanges) state is null';
    }

    return this.state[this._idx ? --this._idx : 0];
  }

  // переместиться вперед по истории
  forward() {
    if (!this.state.length) {
      throw '(HistoryChanges) state is null';
    }

    return this.state[this.state.length - 1 - this._idx ? ++this._idx : this._idx];
  }

  // добавляет новое состояние затирая всю впереди стоящую историю
  pushState(state) {
    if (this.state.length - 1 - this._idx) {
      this.state.splice(this._idx + 1)
    }

    if (this.state.length == this._maxLength) {
      this.state.shift();
      this._idx = this._idx ? this._idx - 1 : 0;
    }
    
    this._idx = this.state.push(state) - 1

    return this.state[this._idx]
  }
}