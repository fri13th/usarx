function UsaRx() {
  var funcs = [];
  return {
    subscribe: function (func) {
      funcs.push(func);
    },
    next: function(state){
      for (var i = 0; i < funcs.length; i++) {
        (function(f, state, i){setTimeout(function(){f(state);}, i)})(funcs[i], state, i);
      }
    }
  }
}
