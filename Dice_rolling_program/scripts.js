function diceRoll() {
  const roll = document.getElementById("roll");
  let n_dice = document.getElementById("n_dice").value;
  const dice_result = document.getElementById("dice_value");
  const dice_images = document.getElementById("dice_images");
  let values = [];
  let images = [];
  if (n_dice < 1) {
    dice_result.textContent = `Cannot roll ${n_dice} dice`;
  } else {
    for (i = 0; i < n_dice; i++) {
      let randNum = Math.floor(Math.random() * 6) + 1;
      values.unshift(randNum);
      images.unshift(`<img src="dice_images/dice${randNum}.webp"> `);
    }
    dice_result.textContent = `You rolled: ${values.join(", ")}`;
    dice_images.innerHTML = `${images.join("")}`;
  }
}
