import jsdom from 'jsdom';
import chai from 'chai';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

/**
 * We need to put 'document' and 'window' objects on the global object, so that
 * they will be discovered by React when it accesses them.
 */
global.document = doc;
global.window = win;

/**
 * We need to take all the properties that the jsdom 'window' object contains,
 * such as 'navigator', and hoist them on to the Node.js 'global' object.
 * This is done so that properties provided by 'window' can be used without
 * the 'window.' prefix, which is what would happen in a browser environment.
 */
Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});
