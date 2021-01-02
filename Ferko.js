var width = window.innerWidth;
var height = window.innerHeight;

function loadImages(sources, callback) {
  var assetDir = '';
  var images = {};
  var loadedImages = 0;
  var numImages = 0;
  for (var src in sources) {
    numImages++;
  }
  for (var src in sources) {
    images[src] = new Image();
    images[src].onload = function () {
      if (++loadedImages >= numImages) {
        callback(images);
      }
    };
    images[src].src = assetDir + sources[src];
  }
}
function isNearOutline(orech, sedy_orech) {
  var a = orech;
  var o = sedy_orech;
  var ax = a.x();
  var ay = a.y();

  if (ax > o.x - 20 && ax < o.x + 20 && ay > o.y - 20 && ay < o.y + 20) {
    return true;
  } else {
    return false;
  }
}
function drawBackground(background, beachImg, text) {
  var context = background.getContext();
  context.drawImage(beachImg, 0, 0);
  context.setAttr('font', '20pt Calibri');
  context.setAttr('textAlign', 'center');
  context.setAttr('fillStyle', 'black');
  context.fillText(text, background.getStage().width() / 2, 40);
}

function initStage(images) {
  var stage = new Konva.Stage({
    container: 'container',
    width: 1200,
    height: 600,
  });
  var background = new Konva.Layer();
  var orechLayer = new Konva.Layer();
  var orechShapes = [];
  var score = 0;

  // image positions
  var orechs = {
    orech1: {
      x: 10,
      y: 10,
    },
    orech2: {
      x: 270,
      y: 10,
    },
    orech3: {
      x: 1000,
      y: 5,
    },
    orech4: {
      x: 5,
      y: 120,
    },
    orech5: {
      x: 850,
      y: 10,
    },
    orech6: {
      x: 800,
      y: 180,
    },
    orech7: {
      x: 670,
      y: 80,
    },
    orech8: {
      x: 820,
      y: 320,
    },
    orech9: {
      x: 910,
      y: 150,
    },
    orech10: {
      x: 10,
      y: 220,
    },
    orech11: {
      x: 960,
      y: 175,
    }
  };

  var outlines = {
    orech1_grey: {
      x: 530,
      y: 300,
    },
    orech2_grey: {
      x: 752,
      y: 290,
    },
    orech3_grey: {
      x: 630,
      y: 218,
    },
    orech4_grey: {
      x: 610,
      y: 230,
    },
    orech5_grey: {
      x: 505,
      y: 192,
    },
    orech6_grey: {
      x: 449,
      y: 172,
    },
    orech7_grey: {
      x: 299,
      y: 195,
    },
    orech8_grey: {
      x: 172,
      y: 250,
    },
    orech9_grey: {
      x: 195,
      y: 290,
    },
    orech10_grey: {
      x: 411,
      y: 367,
    },
    orech11_grey: {
      x: 324,
      y: 259,
    }

  };

  // create draggable orechs
  for (var key in orechs) {
    // anonymous function to induce scope
    (function () {
      var privKey = key;
      var anim = orechs[key];

      var orech = new Konva.Image({
        image: images[key],
        x: anim.x,
        y: anim.y,
        draggable: true,
      });

      orech.on('dragstart', function () {
        this.moveToTop();
        orechLayer.draw();
        
      });
      /*
       * check if orech is in the right spot and
       * snap into place if it is
       */
      orech.on('dragend', function () {
        var sedy_orech = outlines[privKey + '_grey'];
        if (!orech.inRightPlace && isNearOutline(orech, sedy_orech)) {
          orech.position({
            x: sedy_orech.x,
            y: sedy_orech.y,
          });
          orechLayer.draw();
          orech.inRightPlace = true;

          if (++score >= 11) {
            var text = 'Vyhral si !';
            drawBackground(background, images.beach, text);
            stop();
          }
          if (score == 1)
            start();
          // disable drag and drop
          setTimeout(function () {
            orech.draggable(false);
          }, 50);
        }
      });

      // return orech on mouseout
      orech.on('mouseout', function () {
        orech.image(images[privKey]);
        orechLayer.draw();
        document.body.style.cursor = 'default';
      });

      orech.on('dragmove', function () {
        document.body.style.cursor = 'pointer';
      });

      orechLayer.add(orech);
      orechShapes.push(orech);
    })();
  }

  // create orech outlines
  for (var key in outlines) {
    // anonymous function to induce scope
    (function () {
      var imageObj = images[key];
      var out = outlines[key];

      var sedy_orech = new Konva.Image({
        image: imageObj,
        x: out.x,
        y: out.y,
      });

      orechLayer.add(sedy_orech);
    })();
  }

  stage.add(background);
  stage.add(orechLayer);

  drawBackground(
    background,
    images.beach,
    'Daj orechy na spravne miesta!'
  );
}

var sources = {
  beach: 'BGgrey.png',
  orech1: 'nuts/orech1.png',
  orech1_grey: 'nuts-grey/orech1-grey.png',
  orech2: 'nuts/orech2.png',
  orech2_grey: 'nuts-grey/orech2-grey.png',
  orech3: 'nuts/orech3.png',
  orech3_grey: 'nuts-grey/orech3-grey.png',
  orech4: 'nuts/orech4.png',
  orech4_grey: 'nuts-grey/orech4-grey.png',
  orech5: 'nuts/orech5.png',
  orech5_grey: 'nuts-grey/orech5-grey.png',
  orech6: 'nuts/orech6.png',
  orech6_grey: 'nuts-grey/orech6-grey.png',
  orech7: 'nuts/orech7.png',
  orech7_grey: 'nuts-grey/orech7-grey.png',
  orech8: 'nuts/orech8.png',
  orech8_grey: 'nuts-grey/orech8-grey.png',
  orech9: 'nuts/orech9.png',
  orech9_grey: 'nuts-grey/orech9-grey.png',
  orech10: 'nuts/orech10.png',
  orech10_grey: 'nuts-grey/orech10-grey.png',
  orech11: 'nuts/orech11.png',
  orech11_grey: 'nuts-grey/orech11-grey.png',
};
loadImages(sources, initStage);

var timeElapsed = 0;
var myTimer;

function hodiny() {
  timeElapsed++;
  document.getElementById("time").innerHTML = timeElapsed;
}
function start() {
  //call the first setInterval
  myTimer = setInterval(hodiny, 1000);
}
function stop() {
  clearInterval(myTimer);
}