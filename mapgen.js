let mystr = ""
for (let i = 0; i < 20; i++) {
  for (let j = 0; j < 43; j++){
    let id = 1000+43*i+j;
        mystr = mystr + id + `,"Unnamed",${i},${j},"Unexplored","None","rgb(${5*i}, ${3*j}, 102)",""\n`
  }
}
console.log(mystr)