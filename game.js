// Stopwatch
function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
  
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
  
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
  
    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);
  
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
  
    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function print(txt) {
    document.getElementById("display").innerHTML = txt;
}

function start() {
    if(!startTime) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function printTime() {
            elapsedTime = Date.now() - startTime;
            print(timeToString(elapsedTime));
        }, 10);
    }
}

function stop() { clearInterval(timerInterval); }

// let width = window.innerWidth;
let height = window.innerHeight;
const rozptyl = 40;

function loadImages(sources, callback) {
    let assetDir = '/assets/kanva/';
    let images = {};
    let loadedImages = 0;
    let numImages = 0;
    for (let src in sources) {
        numImages++;
    }
    for (let src in sources) {
        images[src] = new Image();
        images[src].onload = function () {
        if (++loadedImages >= numImages) {
            callback(images);
        }
        };
        images[src].src = assetDir + sources[src];
    }
}
function isNearOutline(part, outline) {
    let a = part;
    let o = outline;
    let ax = a.x();
    let ay = a.y();

    if (ax > o.x - rozptyl && ax < o.x + rozptyl && ay > o.y - rozptyl && ay < o.y + rozptyl) {
        return true;
    } else {
        return false;
    }
}

function drawBackground(background, carImage) {
let context = background.getContext();
context.drawImage(carImage, 0, 0);
context.setAttr('textAlign', 'center');
}

function initStage(images) {
let stage = new Konva.Stage({
    container: 'game_container',
    width: 1280,
    height: 900,
});
let background = new Konva.Layer();
let partLayer = new Konva.Layer();
let partShape = [];
let score = 0;

// image positions
let parts = {
    naraznik: {
    x: 50,
    y: 50,
    },
    kapota: {
    x: 750,
    y: 70,
    },
    spz: {
    x: 650,
    y: 210,
    },
    svetlo: {
    x: 800,
    y: 320,            
    },
    dvere: {
    x: 50,
    y: 300,           
    },
    kolesopredne: {
    x: 1100,
    y: 200,           
    },
    kolesozadne: {
    x: 600,
    y: 20,
    }          
};

let outlines = {
    naraznik_black: {
    x: 152,
    y: 647,
    },
    kapota_black: {
    x: 184.5,
    y: 574,
    },
    spz_black: {
    x: 222,
    y: 720,
    },
    svetlo_black: {
    x: 408,
    y: 666,
    },
    dvere_black: {
    x: 767,
    y: 564,
    },
    kolesopredne_black: {
    x: 651,
    y: 680,
    },
    kolesozadne_black: {
    x: 1050,
    y: 677,
    },
};

// create draggable parts
for (let key in parts) {
    (function () {
    let privKey = key;
    let par = parts[key];

    let part = new Konva.Image({
        image: images[key],
        x: par.x,
        y: par.y,
        draggable: true,
    });

    part.on('dragstart', function () {
        this.moveToTop();
        partLayer.draw();
        start();
    });
    
    // check position of img
    part.on('dragend', function () {
        let outline = outlines[privKey + '_black'];
        if (!part.inRightPlace && isNearOutline(part, outline)) {
        part.position({
            x: outline.x,
            y: outline.y,
        });
        partLayer.draw();
        part.inRightPlace = true;

        if (++score >= 7) {
            drawBackground(background, images.car);
            stop();
            document.getElementById("fail").style.visibility = "visible"
        }

        // disable drag and drop
        setTimeout(function () {
            part.draggable(false);
        }, 50);
        }
    });

    part.on('mouseover', function () {
        partLayer.draw();
        document.body.style.cursor = 'pointer';
    });
    part.on('mouseout', function () {
        part.image(images[privKey]);
        partLayer.draw();
        document.body.style.cursor = 'default';
    });

    part.on('dragmove', function () {
        document.body.style.cursor = 'pointer';
    });

    partLayer.add(part);
    partShape.push(part);
    })();
}

// create parts outlines
for (let key in outlines) {
    (function () {
    let imageObj = images[key];
    let out = outlines[key];

    let outline = new Konva.Image({
        image: imageObj,
        x: out.x,
        y: out.y,
    });

    partLayer.add(outline);
    })();
}

stage.add(background);
stage.add(partLayer);

drawBackground(background,images.car);
}

let sources = {
car: 'car.png',
naraznik: 'naraznik.png',
kapota: 'kapota.png',
svetlo: 'svetlo.png',
spz: 'spz.png',
dvere: 'dvere.png',
kolesopredne: 'kolesopredne.png',
kolesozadne: 'kolesozadne.png'
};
loadImages(sources, initStage);



