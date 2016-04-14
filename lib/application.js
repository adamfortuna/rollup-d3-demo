var origin = $('.origin'),
  destination = $('.destination'),
  output = $('#output');

// Origin on left side
var o = getLocation(origin, 6, 100),
  d = getLocation(destination, 5, 100);
var data = [{
  x: o.x,
  y: o.y
}, {
  x: d.x,
  y: d.y
}];

output.append("<p>" + JSON.stringify(data) + "</p>");

var svg = d3.select('.container')
  .append('svg')
  .attr('class', 'arrow');

svg.append("svg:defs").selectAll("marker")
  .data(["end"]) // Different link/path types can be defined here
  .enter().append("svg:marker") // This section adds in the arrows
  .attr("id", String)
  .attr("viewBox", "0 -5 10 10")
  .attr("refX", 15)
  .attr("refY", -1.5)
  .attr("markerWidth", 6)
  .attr("markerHeight", 6)
  .attr("orient", "auto")
  .append("svg:path")
  .attr("d", "M0,-5L10,0L0,5");

var line = d3.svg.line();
line.interpolate('cardinal')
  .x(function(d) {
    return d.x;
  })
  .y(function(d) {
    return d.y;
  })

var path = svg.append("path")
  .attr("d", line(data))
  .attr("fill", "none")
  .attr("marker-end", "url(#end)");

function getLocation(el, time, percent) {
  var pos = el.position(),
    height = el.outerHeight(),
    width = el.outerWidth(),
    x, y;

  // left side
  if (time >= 7.5 && time <= 10.5) {
    var scale = d3.scale.linear().domain([7.5, 10.5]).range([0, 1]);
    x = pos.left;
    y = pos.top + (scale(time) * height);

  } else if (time > 10.5 || time <= 1.5) {
    var scale = d3.scale.linear().domain([0, 1.5, 10.5, 12]).range([0.5, 1, 0, 0.5]);
    y = pos.top;
    x = pos.left + scale(time) * width;
  } else if (time > 1.5 && time <= 4.5) {
    var scale = d3.scale.linear().domain([1.5, 4.5]).range([0, 1]);
    x = width
    y = pos.top + scale(time) * height;
  } else if (time > 4.5) {
    var scale = d3.scale.linear().domain([7.5, 4.5]).range([0, 1]);
    y = pos.top + height;
    x = pos.left + scale(time) * width;
  }

  return {
    x: x,
    y: y
  };
}
