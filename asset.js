function getTimeStamp() {
  const timeStamp = {};
  const timeCreated = new Date();

  timeStamp.year = timeCreated.getFullYear();
  timeStamp.month = timeCreated.getMonth() + 1; // because getMonth() assigns January as 0.
  timeStamp.date = timeCreated.getDate();
  timeStamp.hour = timeCreated.getHours();
  timeStamp.minute = timeCreated.getMinutes();
  timeStamp.second = timeCreated.getSeconds();
  timeStamp.milliseconds = timeCreated.getMilliseconds();

  timeStamp.serial =
    timeStamp.month.toString() +
    "." +
    timeStamp.date.toString() +
    "." +
    timeStamp.year.toString() +
    "." +
    timeStamp.hour.toString() +
    "." +
    timeStamp.minute.toString() +
    "." +
    timeStamp.second.toString() +
    "." +
    timeStamp.milliseconds.toString();

  timeStamp.GMT = timeCreated;

  return Object.freeze(timeStamp);
}

class Asset {
  constructor(initialValueUSD = 0, timeStamp = getTimeStamp()) {
    this.initialValueUSD = initialValueUSD;
    this.timeStamp = timeStamp;
  }
}


