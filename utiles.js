function drawPole(x, y, width, height, color) {
  context.beginPath();
  context.arc(x + height / 2, y, width / 2, 0, Math.PI * 2, false);
  context.rect(x, y + height, height, width);
  context.arc(x, y + height + width / 2, width / 2, 0, Math.PI * 2, false);
  context.rect(x + height / 2 - width / 2, y, width, height);
  context.arc(
    x + height,
    y + height + width / 2,
    width / 2,
    0,
    Math.PI * 2,
    false
  );
  context.fillStyle = color;
  context.fill();
  context.closePath();
}
