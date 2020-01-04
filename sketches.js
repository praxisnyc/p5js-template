var sketch1 = function(p) {
    p.setup = function() {
        var canvas = p.createCanvas(300, 500);
        canvas.parent('#sketch1');
    };

    p.draw = function() {
        p.background(51, 0, 0);
    };
};

var sketch2 = function(p) {
    var x = 100;
    var y = 100;
    p.setup = function() {
        var canvas = p.createCanvas(300, 500);
        canvas.parent('#sketch2');
    };

    p.draw = function() {
        p.background(0, 0, 51);
    };
};



var myFirstSketch = new p5(sketch1);

var mySecondSketch = new p5(sketch2);