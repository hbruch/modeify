var modal = require('modal');

/**
 * Create `Modal`
 */

var Modal = modal({
  closable: true,
  template: require('./template.html')
});

/**
 * Confirm
 */

Modal.prototype.confirm = function(e) {
  e.preventDefault();
  this.model.confirmCallback.apply(this, e);
};

/**
 * Expose `confirm`
 */

module.exports = function(opts) {
  var m = Modal({
    confirmCallback: opts.confirmCallback,
    confirmText: opts.confirmText || 'Ok',
    text: opts.text
  });

  m.show();

  return m;
};
