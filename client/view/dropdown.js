/**
 * Dependencies
 */

var classes = require('classes');
var evnt = require('event');

/**
 * Expose `plugin`
 */

module.exports = function(reactive) {
  reactive.bind('dropdown', function(el, selector) {
    var parent = el.parentNode;
    var list = classes(parent);
    var close = function(e) {
      if (!childOf(e.target, parent)) {
        list.remove('open');
        evnt.unbind(document, 'click', close);
      }
    };

    evnt.bind(el, 'click', function(e) {
      e.stopPropagation();

      if (list.has('open')) {
        list.remove('open');
        evnt.unbind(document, 'click', close);
      } else {
        list.add('open');
        evnt.bind(document, 'click', close);
      }
    });
  });
};

/**
 * Is a node a child of another?
 */

function childOf(c, p) {
  while ((c = c.parentNode) && c !== p);
  return !!c;
}
