// ES6 promise =  https://www.npmjs.com/package/es6-promise
// Babel ES6 Promise = https://www.npmjs.com/package/babel-plugin-es6-promise
// forEach polyfill = https://www.npmjs.com/package/nodelist-foreach-polyfill
// FormData polyfill = https://www.npmjs.com/package/formdata-polyfill


// Поифил для forEach, который не работает корректно в некоторых браузерах
// if ('NodeList' in window && !NodeList.prototype.forEach) {
//     console.info('polyfill for IE11');
//     NodeList.prototype.forEach = function (callback, thisArg) {
//         thisArg = thisArg || window;
//         for (var i = 0; i < this.length; i++) {
//             callback.call(thisArg, this[i], i, this);
//         }
//     };
// }