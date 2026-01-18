// command $ text
function gethtml(line) {
  function getcommname(line) {
    let commname = line.split('$')[0];
    return commname;
  }
   function gettextfromline(line) {
     let text = line.split('$')[1];
     return text;
   }
   function mmdtohtml(commname, text) {
    let begintag = '<' + commname + '>';
    let endtag = '</' + commname + '>';
    let html = begintag + text + endtag;
    return html;
  }
  function formatted(line) {
    let command = getcommname(line);
    let content = gettextfromline(line);
    let result = mmdtohtml(command, content);
    return result;
    }
    return formatted(line);
 }
