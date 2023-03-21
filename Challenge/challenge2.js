// Speed Detector (Toy Problem)

const  carSpeed = prompt(`Enter your car speed:`)

const checkSpeedDetector= speed => {
  const speedLimit = 70;
  const kmPerDistance = 5;

  if (speed < speedLimit + kmPerDistance) {
    return ("Ok");
  }

  const demeritPoints = Math.floor((speed - speedLimit) / kmPerDistance);
  if (demeritPoints >= 12){
    console.log("License suspended");
  }else{
  console.log("DemeritPoints:", demeritPoints);
  }
  return demeritPoints;
}
checkSpeedDetector(carSpeed);

