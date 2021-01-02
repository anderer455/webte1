var width = window.innerWidth;
var height = window.innerHeight;
var time = 0;
var cancel;

function timer() {
    cancel = setInterval(() => {
        time++;
        let tmp = document.getElementById("time");
        tmp.innerHTML = "Čas: " + time;
    }, 1000)
}

function loadImages(sources, callback) {
    var assetDir = '/assets/andrej-game/';
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
function isNearOutline(pokemon, outline) {
    var a = pokemon;
    var o = outline;
    var ax = a.x();
    var ay = a.y();

    if (ax > o.x - 35 && ax < o.x + 35 && ay > o.y - 35 && ay < o.y + 35) {
        return true;
    } else {
        return false;
    }
}
function drawBackground(background, backgroundImg, text) {
    var context = background.getContext();
    context.drawImage(backgroundImg, 0, 0);
}

function initStage(images) {
    var stage = new Konva.Stage({
        container: 'pokemon-container',
        width: 1340,
        height: 960,
    });
    var background = new Konva.Layer();
    var pokemonLayer = new Konva.Layer();
    var score = 0;
    var pokemonshapes = [];
    // image positions
    var pokemons = {
        pokemon1: {x: 980, y: 70,},
        pokemon2: {x: 690, y: 30,},
        pokemon3: {x: 210, y: 300,},
        pokemon4: {x: 120, y: 500,},
        pokemon5: {x: 1000, y: 300,},
        pokemon6: {x: 240, y: 10,},
        pokemon7: {x: 420, y: 100,},
        pokemon8: {x: 980, y: 600,},
    };

    var outlines = {
        pokemon1_placeholder: {x: 558, y: 803,},
        pokemon2_placeholder: {x: 386, y: 360,},
        pokemon3_placeholder: {x: 684, y: 342,},
        pokemon4_placeholder: {x: 586, y: 421,},
        pokemon5_placeholder: {x: 468, y: 540,},
        pokemon6_placeholder: {x: 605, y: 672,},
        pokemon7_placeholder: {x: 401, y: 725,},
        pokemon8_placeholder: {x: 723, y: 616,},
    };

    // create draggable pokemons
    for (var key in pokemons) {
        // anonymous function to induce scope
        (function () {
            var privKey = key;
            var anim = pokemons[key];

            var pokemon = new Konva.Image({
                image: images[key],
                x: anim.x,
                y: anim.y,
                draggable: true,
            });

            pokemon.on('dragstart', function () {
                this.moveToTop();
                pokemonLayer.draw();
            });
            /*
             * check if pokemon is in the right spot and
             * snap into place if it is
             */
            pokemon.on('dragend', function () {
                var outline = outlines[privKey + '_placeholder'];
                if (!pokemon.inRightPlace && isNearOutline(pokemon, outline)) {
                    pokemon.position({
                        x: outline.x,
                        y: outline.y,
                    });
                    pokemonLayer.draw();
                    pokemon.inRightPlace = true;

                    if (score == 0) {
                        timer();
                    }

                    if (++score >= 8) {
                        clearInterval(cancel);                        
                        drawBackground(background, images.background);
                    }

                    // disable drag and drop
                    setTimeout(function () {
                        pokemon.draggable(false);
                    }, 50);
                }
            });
            // return pokemon on mouseout
            pokemon.on('mouseover', function () {
                pokemonLayer.draw();
                document.body.style.cursor = 'pointer';
            });

            pokemon.on('mouseout', function () {
                pokemon.image(images[privKey]);
                pokemonLayer.draw();
                document.body.style.cursor = 'default';
            });

            pokemon.on('dragmove', function () {
                document.body.style.cursor = 'pointer';
            });

            pokemonLayer.add(pokemon);
            pokemonshapes.push(pokemon);
        })();
    }

    // create pokemon outlines
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

            pokemonLayer.add(outline);
        })();
    }

    stage.add(background);
    stage.add(pokemonLayer);

    drawBackground(
        background,
        images.background,
    );
}

var sources = {
    background: 'Pokemon-BG.png',
    pokemon1: 'Pokemon-1.png',
    pokemon2: 'Pokemon-2.png',
    pokemon3: 'Pokemon-3.png',
    pokemon4: 'Pokemon-4.png',
    pokemon5: 'Pokemon-5.png',
    pokemon6: 'Pokemon-6.png',
    pokemon7: 'Pokemon-7.png',
    pokemon8: 'Pokemon-8.png',
};
loadImages(sources, initStage);
