function placeholder() {}
function main() {
  const v2 = new Int32Array(65535);
  function v5(v6, v7, v8, v9, a0, a1) {
    for (let v11 = 0; v11 < 4294967296; v11 = v11 + 6) {
      v2[v11] &= 65535;
    }
  }
  noInline(v5);
  // Object.prototype.toString.__proto__ = placeholder;
  // for (let v13 = 1; v13 < 6; v13 = v13 + 2) {
    const v14 = v5({'g': 5}, {'g': 5}, {'g': 5}, {'g': 5}, {'g': 5}, {'g': 5});
  // }
  // gc();
}
// main.__defineGetter__('__proto__', () => {
//   delete main[0];
// }), noDFG(main);
// noFTL(main);
main();