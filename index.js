var data = [
  {
    'x': 0,
    'y': 0,
    'color': '#f00',
    'label': 'ivan 6/17',
  },
  {
    'x': 4,
    'y': 4,
    'color': '#00f',
    'label': 'tabitha 12/1',
  },
  {
    'x': -1,
    'y': 0,
    'color': '#0f0',
    'label': 'eliot 4/4',
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
  var htmlText = '';
  htmlText += '<div>';  
  htmlText += '<table>';
  for (var i = minY; i <= maxY; i++) {
    htmlText += '<tr>';
    for (var j = minX; j <= maxX; j++) {
      htmlText += '<td>';
      htmlText += '' + j + ', ' + i;
      htmlText += '</td>';
    }
    htmlText += '</tr>';
  }
  htmlText += '</table>';
  htmlText += '</div>';  
  
  div.innerHTML = htmlText;  
  document.getElementById('content').appendChild(div);

  console.log('minX:' + minX);

  for (var key in data) {
    var htmlText = '';  
    htmlText += '<div class="div-conatiner">';
    htmlText += '<p class="p-name"> Label: ' + data[key].label + '</p>';
    htmlText += '</div>';
    var div = document.createElement('div');
    div.className = 'row';
    div.innerHTML = htmlText;
    document.getElementById('content').appendChild(div);  
  }
}

go();
