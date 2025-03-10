export const dataSort = () => {
  if (typeof Object.defineProperty === 'function') {
    try { Object.defineProperty(Array.prototype, 'sortBy', { value: sb }); } catch (e) { }
  }
  if (!Array.prototype.sortBy) Array.prototype.sortBy = sb;

  function sb(f) {
    for (var i = this.length; i;) {
      var o = this[--i];
      this[i] = [].concat(f.call(o, o, i), o);
    }
    this.sort(function (a, b) {
      for (var i = 0, len = a.length; i < len; ++i) {
        if (a[i] !== b[i]) return a[i] < b[i] ? -1 : 1;
      }
      return 0;
    });
    for (var inx = this.length; inx;) {
      this[--inx] = this[inx][this[inx].length - 1];
    }
    return this;
  }
}