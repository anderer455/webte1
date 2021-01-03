var width = window.innerWidth;
var height = window.innerHeight;

// Casomiera 

var uplynuly_cas = 0;
var cas;

function hodiny() {
  uplynuly_cas++;
  document.getElementById("time").innerHTML = uplynuly_cas;
}
function start() {
  //call the first setInterval
  cas = setInterval(hodiny, 1000);
}
function stop() {
  clearInterval(cas);
}

// Nacitanie obrazkov
function loadimages(zdroj, callback) {
  var assetDir = '/assets/ferko/';
  var images = {};
  var loadedimages = 0;
  var numimages = 0;
  for (var src in zdroj) {
    numimages++;
  }
  for (var src in zdroj) {
    images[src] = new Image();
    images[src].onload = function () {
      if (++loadedimages >= numimages) {
        callback(images);
      }
    };
    images[src].src = assetDir + zdroj[src];
  }
}

// Funkcia ktora aj ked aj ked nedate obrazok na presne spravne miesto tak stale to uzna do sitej miery
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

// Nacitanie pozadia aj s textom
function drawBackground(background, BGImg, text) {
  var context = background.getContext();
  context.drawImage(BGImg, 0, 0);
  context.setAttr('font', '20pt Calibri');
  context.setAttr('textAlign', 'center');
  context.setAttr('fillStyle', 'black');
  context.fillText(text, background.getStage().width() / 2, 40);
}

// Zakladna inicializacia
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

  var seda_predloha = {
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

  // vytvori orechi s draggable atributom
  for (var key in orechs) {
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
      // Kontrola za pomoci hore spominanej funkcie ci je orech na spravnom mieste alebo velmi blizko a ak ano tak ho posunie na spravne miesto
      orech.on('dragend', function () {
        var sedy_orech = seda_predloha[privKey + '_grey'];
        if (!orech.inRightPlace && isNearOutline(orech, sedy_orech)) {
          orech.position({
            x: sedy_orech.x,
            y: sedy_orech.y,
          });
          orechLayer.draw();
          orech.inRightPlace = true;
          // Kontrola konca hry
          if (++score >= 11) {
            var text = 'Vyhral si !';
            drawBackground(background, images.BG, text);
            stop();
          }
          //Spustenie casovaca
          if (score == 1)
            start();
          // Zrusi draggable atribut daneho orecha aby sa po dosadeni na spravne miesto s nim uz nedalo hybat 
          setTimeout(function () {
            orech.draggable(false);
          }, 50);
        }
      });

      
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

  // Vytvori sede orechy ako predlohu
  for (var key in seda_predloha) {
    
    (function () {
      var imageObj = images[key];
      var out = seda_predloha[key];

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
// Vykresli pozadie
  drawBackground(
    background,
    images.BG,
    'Daj orechy na spravne miesta!'
  );
}


// Zdroj obrazkov 
var zdroj = {
  BG: 'BGgrey.png',
  orech1: 'orech1.png',
  orech1_grey: 'orech1-grey.png',
  orech2: 'orech2.png',
  orech2_grey: 'orech2-grey.png',
  orech3: 'orech3.png',
  orech3_grey: 'orech3-grey.png',
  orech4: 'orech4.png',
  orech4_grey: 'orech4-grey.png',
  orech5: 'orech5.png',
  orech5_grey: 'orech5-grey.png',
  orech6: 'orech6.png',
  orech6_grey: 'orech6-grey.png',
  orech7: 'orech7.png',
  orech7_grey: 'orech7-grey.png',
  orech8: 'orech8.png',
  orech8_grey: 'orech8-grey.png',
  orech9: 'orech9.png',
  orech9_grey: 'orech9-grey.png',
  orech10: 'orech10.png',
  orech10_grey: 'orech10-grey.png',
  orech11: 'orech11.png',
  orech11_grey: 'orech11-grey.png',
};
loadimages(zdroj, initStage);

