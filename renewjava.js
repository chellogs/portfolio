// JavaScript Document

function moveX(item) {
		var moveX = (item*-1);
		document.getElementById("allScenes").style.left = moveX +'px';
	}
	
function moveY(item) {
		var moveY = (item*-1);
		document.getElementById("allScenes").style.top = moveY +'px';
	}

// sound for found objects function
function playSound(audioId) {
    document.getElementById(audioId).play();
}

function stopSound(audioID) {
    document.getElementById(audioID).pause();
    document.getElementById(audioID).currentTime = 0;
}

// Index Java
function play(){
var audio = document.getElementById("audio");
audio.play();
}

titleCursorOn = new Image(552, 262);
titleCursorOn = "images/index/titleGlow.png";

titleCursorOff = new Image(552, 262);
titleCursorOff = "images/index/title.png";

// Mist 2 Java

plant1CursorOn = new Image(99, 128);
plant1CursorOn = "images/page2images/plant1glow.png";

plant1CursorOff = new Image(99, 128);
plant1CursorOff = "images/page2images/plant1.png";

plant2CursorOn = new Image(130, 91);
plant2CursorOn = "images/page2images/plant2glow.png";

plant2CursorOff = new Image(130, 91);
plant2CursorOff = "images/page2images/plant2.png";

bunCursorOn = new Image(109, 84);
bunCursorOn = "images/page2images/bunglow.png";

bunCursorOff = new Image(109, 84);
bunCursorOff = "images/page2images/bun.png";

bird2CursorOn = new Image(88, 121);
bird2CursorOn = "images/page2images/birdglow.png";

bird2CursorOff = new Image(88, 121);
bird2CursorOff = "images/page2images/bird.png";

// Mist 3 Java
bird3CursorOn = new Image(195,91);
bird3CursorOn = "images/page3images/birdglow.png";

bird3CursorOff = new Image(195, 91);
bird3CursorOff = "images/page3images/bird.png";

wolfCursorOn = new Image(214, 307);
wolfCursorOn = "images/page3images/wolfglow.png";

wolfCursorOff = new Image(214, 307);
wolfCursorOff = "images/page3images/wolf.png";
		// feathers
feather1CursorOn = new Image(66, 75);
feather1CursorOn = "images/page3images/feather1glow.png";

feather1CursorOff = new Image(66, 75);
feather1CursorOff = "images/page3images/feather1.png";

feather2CursorOn = new Image(72, 62);
feather2CursorOn = "images/page3images/feather2glow.png";

feather2CursorOff = new Image(72, 62);
feather2CursorOff = "images/page3images/feather2.png";

feather3CursorOn = new Image(101, 49);
feather3CursorOn = "images/page3images/feather3glow.png";

feather3CursorOff = new Image(101, 49);
feather3CursorOff = "images/page3images/feather3.png";

feather4CursorOn = new Image(81, 73);
feather4CursorOn = "images/page3images/feather4glow.png";

feather4CursorOff = new Image(81, 73);
feather4CursorOff = "images/page3images/feather4.png";

		// SCRATCHES
pawCursorOn = new Image(100, 120);
pawCursorOn = "images/page3images/pawglow.png";

pawCursorOff = new Image(100, 120);
pawCursorOff = "images/page3images/paw.png";

scratch1CursorOn = new Image(86, 80);
scratch1CursorOn = "images/page3images/scratch1glow.png";

scratch1CursorOff = new Image(86, 80);
scratch1CursorOff = "images/page3images/scratch1.png";

scratch2CursorOn = new Image(64, 60);
scratch2CursorOn = "images/page3images/scratch2glow.png";

scratch2CursorOff = new Image(64, 60);
scratch2CursorOff = "images/page3images/scratch2.png";

scratch3CursorOn = new Image(50, 92);
scratch3CursorOn = "images/page3images/scratch3glow.png";

scratch3CursorOff = new Image(50, 92);
scratch3CursorOff = "images/page3images/scratch3.png";

scratch4CursorOn = new Image(95, 96);
scratch4CursorOn = "images/page3images/scratch4glow.png";

scratch4CursorOff = new Image(95, 96);
scratch4CursorOff = "images/page3images/scratch4.png";

scratch5CursorOn = new Image(110, 100);
scratch5CursorOn = "images/page3images/scratch5glow.png";

scratch5CursorOff = new Image(110, 100);
scratch5CursorOff = "images/page3images/scratch5.png";

scratch6CursorOn = new Image(75, 76);
scratch6CursorOn = "images/page3images/scratch6glow.png";

scratch6CursorOff = new Image(75, 76);
scratch6CursorOff = "images/page3images/scratch6.png";

scratch7CursorOn = new Image(73, 62);
scratch7CursorOn = "images/page3images/scratch7glow.png";

scratch7CursorOff = new Image(73, 62);
scratch7CursorOff = "images/page3images/scratch7.png";

scratch8CursorOn = new Image(93, 90);
scratch8CursorOn = "images/page3images/scratch8glow.png";

scratch8CursorOff = new Image(93, 90);
scratch8CursorOff = "images/page3images/scratch8.png";

scratch9CursorOn = new Image(85, 77);
scratch9CursorOn = "images/page3images/scratch9glow.png";

scratch9CursorOff = new Image(85, 77);
scratch9CursorOff = "images/page3images/scratch9.png";

// Mist 4 Java

arrowCursorOn = new Image(140, 208);
arrowCursorOn = "images/page4images/arrowglow.png";

arrowCursorOff = new Image(104, 208);
arrowCursorOff = "images/page4images/arrow.png";

bdeerCursorOn = new Image(279, 325);
bdeerCursorOn = "images/page4images/bigdeerglow.png";

bdeerCursorOff = new Image(279, 325);
bdeerCursorOff = "images/page4images/bigdeer.png";

candyCursorOn = new Image(173, 293);
candyCursorOn = "images/page4images/candyflowerglow.png";

candyCursorOff = new Image(173, 293);
candyCursorOff = "images/page4images/candyflower.png";

p4fly1CursorOn = new Image(126, 107);
p4fly1CursorOn = "images/page4images/fly1glow.png";

p4fly1CursorOff = new Image(126, 107);
p4fly1CursorOff = "images/page4images/fly1.png";

p4fly2CursorOn = new Image(117, 76);
p4fly2CursorOn = "images/page4images/fly2glow.png";

p4fly2CursorOff = new Image(117, 76);
p4fly2CursorOff = "images/page4images/fly2.png";

ldeerCursorOn = new Image(150, 240);
ldeerCursorOn = "images/page4images/littledeerglow.png";

ldeerCursorOff = new Image(150, 240);
ldeerCursorOff = "images/page4images/littledeer.png";

p4plant1CursorOn = new Image(206, 223);
p4plant1CursorOn = "images/page4images/plant1glow.png";

p4plant1CursorOff = new Image(206, 223);
p4plant1CursorOff = "images/page4images/plant1.png";

p4plant2CursorOn = new Image(144, 142);
p4plant2CursorOn = "images/page4images/plant2glow.png";

p4plant2CursorOff = new Image(144, 142);
p4plant2CursorOff = "images/page4images/plant2.png";

// Mist 5 Java

fawnCursorOn = new Image(154, 294);
fawnCursorOn = "images/page5images/fawnglow.png";

fawnCursorOff = new Image(154, 294);
fawnCursorOff = "images/page5images/fawn.png";

apple1CursorOn = new Image(101, 103);
apple1CursorOn = "images/page5images/apple1glow.png";

apple1CursorOff = new Image(101, 103);
apple1CursorOff = "images/page5images/apple1.png";

apple2CursorOn = new Image(78, 78);
apple2CursorOn = "images/page5images/apple2glow.png";

apple2CursorOff = new Image(78, 78);
apple2CursorOff = "images/page5images/apple2.png";

moonCursorOn = new Image(109, 90);
moonCursorOn = "images/page5images/moonglow.png";

moonCursorOff = new Image(109, 90);
moonCursorOff = "images/page5images/moon.png";

nestCursorOn = new Image(159, 145);
nestCursorOn = "images/page5images/nestglow.png";

nestCursorOff = new Image(159, 145);
nestCursorOff = "images/page5images/nest.png";




// Mist 6 Java

owlCursorOn = new Image(124, 179);
owlCursorOn = "images/page6images/owl.png";

owlCursorOff = new Image(124, 179);
owlCursorOff = "images/page6images/owlglow.png";

// Mist 7 Java

bird7CursorOn = new Image(99,78);
bird7CursorOn = "images/page7images/bird7.png";

bird7CursorOff = new Image(99,78);
bird7CursorOff = "images/page7images/bird7fill.png";

glow7CursorOn = new Image(183, 186);
glow7CursorOn = "images/page7images/glow7.png";

glow7CursorOff = new Image(183, 186);
glow7CursorOff = "images/page7images/glow7Fill.png";

//Mist 8 Java

eb1CursorOn = new Image(109, 169);
eb1CursorOn = "images/page8images/bird1glow.png";

eb1CursorOff = new Image(109, 169);
eb1CursorOff = "images/page8images/bird1.png";

eb2CursorOn = new Image(106, 149);
eb2CursorOn = "images/page8images/bird2glow.png";

eb2CursorOff = new Image(106, 149);
eb2CursorOff = "images/page8images/bird2.png";

eb3CursorOn = new Image(99, 108);
eb3CursorOn = "images/page8images/bird3glow.png";

eb3CursorOff = new Image(99, 108);
eb3CursorOff = "images/page8images/bird3.png";

eb4CursorOn = new Image(103, 121);
eb4CursorOn = "images/page8images/bird4glow.png";

eb4CursorOff = new Image(103, 121);
eb4CursorOff = "images/page8images/bird4.png";

eb5CursorOn = new Image(113, 156);
eb5CursorOn = "images/page8images/bird5glow.png";

eb5CursorOff = new Image(113, 156);
eb5CursorOff = "images/page8images/bird5.png";

ebsCursorOn = new Image(154, 142);
ebsCursorOn = "images/page8images/birdsglow.png";

ebsCursorOff = new Image(152, 142);
ebsCursorOff = "images/page8images/birds.png";

girlCursorOn = new Image(183, 273);
girlCursorOn = "images/page8images/girlglow.png";

girlCursorOff = new Image(183, 273);
girlCursorOff = "images/page8images/girl.png";


// Page 9

crack5CursorOn = new Image(1366, 768);
crack5CursorOn = "images/page9images/crackoverlay.png";

crack5CursorOff = new Image(1366, 768);
crack5CursorOff = "images/page9images/crack5.png";

handsCursorOn = new Image(766, 730);
handsCursorOn = "images/page9images/handsover.png";

handsCursorOff = new Image(766, 730);
handsCursorOff = "images/page9images/hands.png";


// page reload to reset CSS animations, use on final move
function refresh() {
setInterval("location.reload()",1000);
}



function chooseNum(theMin, theMax) {
var theRange = (theMax - theMin) + 1;
var randomNum = Math.floor((Math.random() * theRange) + theMin); 
return randomNum;
}
function changePosition(elem, theMinX, theMaxX, theMinY, theMaxY) {
document.getElementById(elem).style.top = chooseNum(theMinY, theMaxY) + "px";
document.getElementById(elem).style.left = chooseNum(theMinX, theMaxX) + "px";
}

function show(toShow) {
    document.getElementById(toShow).style.visibility = "visible";
}
function hide(toHide) {
    document.getElementById(toHide).style.visibility = "hidden";
}

function getCount() {
    var currentCount = document.getElementById("counter").innerHTML;
    return parseInt(currentCount);
}

function incrementCount(toHide, animal, steps) {
    if (getCount() <= steps) {
        document.getElementById("counter").innerHTML = getCount() + 1;
    }

    hide(toHide);
    for (i = 0; i <= steps; i++) {
        if (i == getCount()) {
            show(animal+'print'+i);
            break;
        }
    }
    if (getCount() == steps) {
        show(animal);
		resetCounter(getCount());
    }
}



