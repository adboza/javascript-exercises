const ftoc = function(faren) {
  let celc = (faren - 32)*(5/9);
  let celci = parseFloat(celc.toFixed( 1 ));
  return celci;

};

const ctof = function(celc) {
  let faren = (celc*9/5)+32;

  let farenh = parseFloat(faren.toFixed( 1 ));
  return farenh;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
