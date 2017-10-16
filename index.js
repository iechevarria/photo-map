var data = [
  {
    'x': 0,
    'y': 0,
    'color': '#f00',
    'label': 'ivan 6/17',
    'img': '01.jpg',
  },
  {
    'x': 4,
    'y': 4,
    'color': '#00f',
    'label': 'tabitha 12/1',
    'img': '02.jpg',
  },
  {
    'x': -1,
    'y': 0,
    'color': '#0f0',
    'label': 'eliot 4/4',
    'img': '03.jpg',
  }
]

function go () {
  var minX = null;
  var maxX = null;
  var minY = null;
  var maxY = null;
  for (var key in data) {
    if (data[key].x < minX || minX == null) {
      minX = data[key].x;
    } 
    if (data[key].x > maxX || maxX == null) {
      maxX = data[key].x;
    } 
    if (data[key].y < minY || minY == null) {
      minY = data[key].y;
    } 
    if (data[key].y > maxY || maxY == null) {
      maxY = data[key].y;
    } 
  }

  var div = document.createElement('div');
  div.setAttribute('class', 'container');
  var htmlText = '';
  htmlText += '<table>';
  for (var i = minY; i <= maxY; i++) {
    htmlText += '<tr>';
    for (var j = minX; j <= maxX; j++) {
      isPopulated = false;

      for (var key in data) {
        if (data[key].x === j && data[key].y === i) {
          htmlText += '<td style="background-image:url(img/' + data[key].img + ');">';
          htmlText += data[key].label;
          isPopulated = true;
        }
      }

      if (!isPopulated) {
        htmlText += '<td>';        
      }

      htmlText += '</td>';
    }
    htmlText += '</tr>';
  }
  htmlText += '</table>';
  
  div.innerHTML = htmlText;  
  document.getElementById('content').appendChild(div);

  console.log('minX:' + minX);  
}

go();
