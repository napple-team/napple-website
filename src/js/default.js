(function(createjs, window, undefined) {

  var canvas;
  var stage;
  var tick;

  function init() {
    canvas = document.getElementById('background');
    stage = new createjs.Stage(canvas);

    var colors = [
      '#EA3348',
      '#ED8032',
      '#9959A5',
      '#FFE734',
      '#8ACFCB',
      '#1E88E5',
      '#283593'
    ];

    for (var i = 0; i < 75; i++) {
      var shape = new createjs.Shape();
      var size = Math.floor(Math.random() * 5 + 5);
      var color = colors[Math.floor(Math.random() * colors.length)];
      var random = Math.floor(Math.random() * 4);
      switch (random) {
      case 0:
        shape.graphics
          .setStrokeStyle(2)
          .beginStroke(color)
          .drawCircle(0, 0, size);
        break;
      case 1:
        shape.graphics
          .beginFill(color)
          .drawCircle(0, 0, size);
        break;
      case 2:
        shape.graphics
          .setStrokeStyle(2)
          .beginStroke(color)
          .drawPolyStar(0, 0, size, 3, 0, 0);
        break;
      case 3:
        shape.graphics
          .beginFill(color)
          .drawPolyStar(0, 0, size, 3, 0, 0);
        break;
      }
      shape.x = Math.random() * canvas.width;
      shape.y = Math.random() * canvas.height;
      shape.velX = Math.random() * 0.5 - 0.25;
      shape.velY = Math.random() * -0.5;
      shape.rotate = Math.random() * 3;
      shape.snapToPixel = true;
      shape.alpha = 0;
      shape.cache(-15, -15, 30, 30);
      stage.addChild(shape);
    }
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener('tick', tick);
  }

  function tick(event) {
    var w = canvas.width + 20;
    var h = canvas.height + 20;
    var l = stage.numChildren - 1;

    for (var i = 1; i < l; i++) {
      var shape = stage.getChildAt(i);
      if (shape.alpha < 1) { shape.alpha += 0.01; }
      shape.x = (shape.x + 10 + shape.velX + w) % w - 10;
      shape.y = (shape.y + 10 + shape.velY + h) % h - 10;
      shape.rotation += shape.rotate;
    }

    stage.update(event);
  }

  window.addEventListener('load', init);

})(createjs, window, void 0);
