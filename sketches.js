//new instance

var sketch1 = function(p) {
    p.setup = function() {
        var canvas = p.createCanvas(300, 500);
        canvas.parent('#sketch1');
    };

    p.draw = function() {
        p.background(51, 0, 0);
    };
};

var instance1 = new p5(sketch1);

//new instance

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

var instance2 = new p5(sketch2);

//new instance

var sketch3 = function(p) {
    p.setup = function() {
        var canvas = p.createCanvas(300, 500);
        canvas.parent('#sketch3');
    };

    p.draw = function() {
        p.background(51, 0, 0);
    };
};

var instance3 = new p5(sketch3);

//new instance

var sketch4 = function(p) {
    var x = 100;
    var y = 100;
    p.setup = function() {
        var canvas = p.createCanvas(300, 500);
        canvas.parent('#sketch4');
    };

    p.draw = function() {
        p.background(0, 0, 51);
    };
};

var instance4 = new p5(sketch4);

//new instance

var sketch5 = function(p) {
    var x = 100;
    var y = 100;
    p.setup = function() {
        var canvas = p.createCanvas(300, 500);
        canvas.parent('#sketch5');
    };

    p.draw = function() {
        p.background(0, 0, 51);
    };
};

var instance5 = new p5(sketch5);




