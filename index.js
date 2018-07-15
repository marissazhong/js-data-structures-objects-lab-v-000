// Write your solution in this file!

driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  let new_driver = driver;
  new_driver[key] = value;
  return new_driver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}
