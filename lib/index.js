import { path } from 'd3-path'
import { line } from 'd3-shape'

class Arrow {
  constructor(target, destination) {
    this.target = target
    this.destination = destination
  }

  drawPath(context, radius) {
    var p = path()
    p.moveTo(1, 2)
    p.lineTo(3, 4)
    p.closePath()
    return p
  }

  drawLine() {
    var data = [
      {date: new Date(2007, 3, 24), value: 93.24},
      {date: new Date(2007, 3, 25), value: 95.35},
      {date: new Date(2007, 3, 26), value: 98.84},
      {date: new Date(2007, 3, 27), value: 99.92},
      {date: new Date(2007, 3, 30), value: 99.80},
      {date: new Date(2007, 4,  1), value: 99.47}
    ];

    return line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.value); });
  }
}

export default Arrow
