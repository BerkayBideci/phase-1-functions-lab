// Code your solution in this file!

const headquarters = 42;

function distanceFromHqInBlocks(block) {
  if (headquarters > block) {
    return headquarters - block;
  }
  if (block > headquarters) {
    return block - headquarters;
  }
}

function distanceFromHqInFeet(blockInFeet) {
  return distanceFromHqInBlocks(blockInFeet) * 264;
}

function distanceTravelledInFeet(start, destination) {
  if (start > destination) {
    return (start - destination) * 264;
  }
  if (destination > start) {
    return (destination - start) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) < 400) {
    return 0;
  }
  if (
    distanceTravelledInFeet(start, destination) > 400 &&
    distanceTravelledInFeet(start, destination) < 2000
  ) {
    return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
  }
  if (
    distanceTravelledInFeet(start, destination) > 2000 &&
    distanceTravelledInFeet(start, destination) < 2500
  ) {
    return 25;
  }
  if (distanceTravelledInFeet(start, destination) > 2500) {
    return "cannot travel that far";
  }
}
