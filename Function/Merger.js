'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境

function merger() {
   let output = {};
   for (let i = 0; i < arguments.length; i++) {
      Object.assign(output, arguments[i])
   }
   return output;
}