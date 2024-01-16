const doorStatus = [
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false
];

export function doors(): boolean[] {
  for (let visits = 0; visits < 100; visits += 1) {
    const visiting = visits + 1;
    for (let visit = visiting; visit <= 100; visit += visiting) {
      if (doorStatus[visit - 1]) {
        doorStatus[visit - 1] = false;
      } else {
        doorStatus[visit - 1] = true;
      }
    }
  }

  let result = '';
  for (let x = 0; x < 100; x += 1) {
    result += `${x + 1}: ${doorStatus[x] ? 'Open' : 'Closed'} `;
    if ((x + 1) / 10 === 0) {
      console.log(result);
      result = '';
    }
    return doorStatus;
  }
}

console.log(doors());