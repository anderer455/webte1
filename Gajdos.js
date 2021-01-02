var width = window.innerWidth;
var height = window.innerHeight;
var time = 0;
var cancel;
var background = new Konva.Layer();
var fruitLayer = new Konva.Layer();
var fruitShapes = [];


function timer() {
    cancel = setInterval(() => {
        time++;
        let tmp = document.getElementById("time");
        tmp.innerHTML = "Čas: " + time;
    }, 1000)
}



function loadImages(sources, callback) {
    var assetDir = '/assets/filipg/';
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
function isNearOutline(fruit, outline) {
    var a = fruit;
    var o = outline;
    var ax = a.x();
    var ay = a.y();

    if (ax > o.x - 20 && ax < o.x + 20 && ay > o.y - 20 && ay < o.y + 20) {
        return true;
    } else {
        return false;
    }
}
function drawBackground(background, backgroundImg, text) {
    var context = background.getContext();
    context.drawImage(backgroundImg, 0, 0);
    context.setAttr('font', '20pt Calibri');
    context.setAttr('textAlign', 'center');
    context.setAttr('fillStyle', 'white');
    context.fillText(text, background.getStage().width() / 2, 40);
}

function initStage(images) {
    var stage = new Konva.Stage({
        container: 'container',
        width: 578,
        height: 530,
    });
    var score = 0;

    // image positions
    var fruits = {
        basket: {
            x: 350,
            y: 70,
        },
        mango: {
            x: 400,
            y: 300,
        },
        orange: {
            x: 400,
            y: 10,
        },
        bananas: {
            x: 400,
            y: 70,
        },
        grapes: {
            x: 450,
            y: 190,
        },
        apple_red: {
            x: 400,
            y: 370,
        },
        dark_apple: {
            x: 500,
            y: 370,
        },
        green_apple: {
            x: 500,
            y: 60,
        },
        yellow_apple: {
            x: 500,
            y: 5,
        },
        pear: {
            x: 530,
            y: 290,
        },
    };

    var outlines = {
        basket_black: {
            x: 35,
            y: 262,
        },
        mango_black: {
            x: 58,
            y: 220,
        },
        orange_black: {
            x: 125,
            y: 235,
        },
        bananas_black: {
            x: 200,
            y: 110,
        },
        grapes_black: {
            x: 10,
            y: 110,
        },
        apple_red_black: {
            x: 105,
            y: 169,
        },
        dark_apple_black: {
            x: 185,
            y: 190,
        },
        green_apple_black: {
            x: 143,
            y: 136,
        },
        yellow_apple_black: {
            x: 122,
            y: 96,
        },
        pear_black: {
            x: 203,
            y: 90,
        },
    };

    // create draggable fruits
    for (var key in fruits) {
        // anonymous function to induce scope
        (function () {
            var privKey = key;
            var anim = fruits[key];

            var fruit = new Konva.Image({
                image: images[key],
                x: anim.x,
                y: anim.y,
                draggable: true,
            });

            fruit.on('dragstart', function () {
                this.moveToTop();
                fruitLayer.draw();
            });
            /*
             * check if fruit is in the right spot and
             * snap into place if it is
             */
            fruit.on('dragend', function () {
                var outline = outlines[privKey + '_black'];
                if (!fruit.inRightPlace && isNearOutline(fruit, outline)) {
                    fruit.position({
                        x: outline.x,
                        y: outline.y,
                    });
                    fruitLayer.draw();
                    fruit.inRightPlace = true;

                    if (score == 0) {
                        timer();
                    }

                    if (++score >= 10) {
                        clearInterval(cancel);
                        let placeholder = document.getElementById("win");
                        let win = document.createElement("h1");
                        placeholder.appendChild(win);
                        win.innerHTML = 'Gratuľujem vyhrali ste!';
                        drawBackground(background, images.background);
                        let btn = document.getElementById("demo");
                        btn.setAttribute("disabled",true);
                    }

                    // disable drag and drop
                    setTimeout(function () {
                        fruit.draggable(false);
                    }, 50);
                }
            });
            // return fruit on mouseout
            fruit.on('mouseout', function () {
                fruit.image(images[privKey]);
                fruitLayer.draw();
                document.body.style.cursor = 'default';
            });

            fruit.on('dragmove', function () {
                document.body.style.cursor = 'pointer';
            });

            fruitLayer.add(fruit);
            fruitShapes.push(fruit);
        })();
    }

    // create fruit outlines
    for (var key in outlines) {
        // anonymous function to induce scope
        (function () {
            var imageObj = images[key];
            var out = outlines[key];

            var outline = new Konva.Image({
                image: imageObj,
                x: out.x,
                y: out.y,
            });

            fruitLayer.add(outline);
        })();
    }

    stage.add(background);
    stage.add(fruitLayer);

    drawBackground(
        background,
        images.background,
    );
}

var sources = {
    background: 'background.png',
    basket: 'basket.png',
    basket_black: 'basket_dark.png',
    bananas: 'bananas.png',
    bananas_black: 'bananas_dark.png',
    orange: 'orange.png',
    orange_black: 'orange_dark.png',
    mango: 'mango.png',
    mango_black: 'mango_dark.png',
    grapes: 'grapes.png',
    grapes_black: 'grapes_dark.png',
    apple_red: 'apple_red.png',
    apple_red_black: 'apple_red_dark.png',
    dark_apple: 'dark_apple.png',
    dark_apple_black: 'dark_apple_dark.png',
    green_apple: 'green_apple.png',
    green_apple_black: 'green_apple_dark.png',
    yellow_apple: 'yellow_apple.png',
    yellow_apple_black: 'yellow_apple_dark.png',
    pear: 'pear.png',
    pear_black: 'pear_dark.png',
};
loadImages(sources, initStage);

function demo() {
    let velocity = 50;
    let anim1 = new Konva.Tween({
        node: fruitShapes[0],
        duration: 0.5,
        x: 35,
        y: 262,
    })
    let anim2 = new Konva.Tween({
        node: fruitShapes[1],
        duration: 1,
        x: 58,
        y: 220,
    })
    let anim3 = new Konva.Tween({
        node: fruitShapes[2],
        duration: 1.5,
        x: 125,
        y: 235,
    })
    let anim4 = new Konva.Tween({
        node: fruitShapes[3],
        duration: 2,
        x: 200,
        y: 110,
    })
    let anim5 = new Konva.Tween({
        node: fruitShapes[4],
        duration: 2.5,
        x: 10,
        y: 110,
    })
    let anim6 = new Konva.Tween({
        node: fruitShapes[5],
        duration: 3,
        x: 105,
        y: 169,
    })
    let anim7 = new Konva.Tween({
        node: fruitShapes[6],
        duration: 3.5,
        x: 185,
        y: 190,
    })
    let anim8 = new Konva.Tween({
        node: fruitShapes[7],
        duration: 4,
        x: 143,
        y: 136,
    })
    let anim9 = new Konva.Tween({
        node: fruitShapes[8],
        duration: 4.5,
        x: 122,
        y: 96,
    })
    let anim10 = new Konva.Tween({
        node: fruitShapes[9],
        duration: 5,
        x: 203,
        y: 90,
    })

    //anim1.play();
    anim1.play();
    fruitShapes[0].moveToTop();
    anim2.play();
    fruitShapes[1].moveToTop();
    anim3.play();
    fruitShapes[2].moveToTop();
    anim4.play();
    fruitShapes[3].moveToTop();
    anim5.play();
    fruitShapes[4].moveToTop();
    anim6.play();
    fruitShapes[5].moveToTop();
    anim7.play();
    fruitShapes[6].moveToTop();
    anim8.play();
    fruitShapes[7].moveToTop();
    anim9.play();
    fruitShapes[8].moveToTop();
    anim10.play();
    fruitShapes[9].moveToTop();
    clearInterval(cancel)
    let placeholder = document.getElementById("win");
    let win = document.createElement("h1");
    placeholder.appendChild(win);
    win.innerHTML = 'Ukážka kompletného obrázku!';
    let btn = document.getElementById("demo");
    btn.setAttribute("disabled",true);
}
