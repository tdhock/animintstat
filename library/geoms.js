// File which defines general classes for rendering geoms.

// Data -> scaled -> Visual
// e.g. life.exp, fert.rate -S-> xmin,xmax,ymin,ymax -> x,width,y,height
// Scale function S needs to know which of these scaled properties to feed into which scale.

class Geom { 
  constructor(name) {
    this.name = name;
  }
  
  compute_visual_properties() {
    this.scaled_to_visual_mapping
  }
}

class geom_line extends Geom {
}


class geom_point extends Geom {
}



class geom_rect extends Geom {
  scales_to_use = {
    "xmin": "horizontal_axis",
    "xmax": "horizontal_axis",
    "ymin": "vertical_axis",
    "ymax": "vertical_axis",
    "stroke": "stroke_legend",
    "fill": "fill_legend"
  }
  scaled_to_visual_mapping = {
   "x":function(scaled){return scaled.xmin;},
   "width":function(scaled){return scaled.xmax-scaled.xmin;},
   "y":function(scaled){return scaled.ymin;},
   "height":function(scaled){return scaled.ymax-scaled.ymin;}
  }
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}
