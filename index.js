var katzDeli = [];

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  if(katzDeliLine[0] === undefined){
    return(`There is nobody waiting to be served!`);
  }
  else {
    var name = katzDeliLine[0];
    katzDeliLine.shift();
    return (`Currently serving ${name}.`)
  }
}
