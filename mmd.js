/*
Before we start, the command must be an html element
Syntax:
Command$ Text
*/
function findcommname(line) {
  let = line.split('$')
  let comm = line[0]
  return comm;
}
