const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const context = canvas.getContext("2d");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

let distanceX = 150;
const poleOne = createSprite(distanceX, 130, [1, 1, 1, 1]);
distanceX += 400;
const poleTwo = createSprite(distanceX, 130, []);
distanceX += 400;
const poleThree = createSprite(distanceX, 130, []);

drawPole(poleOne.getX(), poleOne.getY(), 20, 300, "#dadff");
drawPole(poleTwo.getX(), poleTwo.getY(), 20, 300, "#dadff");
drawPole(poleThree.getX(), poleThree.getY(), 20, 300, "#dadff");
