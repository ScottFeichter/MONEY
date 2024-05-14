let ASSET_NUMBER = 0;
const ASSETS_IN_EXISTENCE = [];

function getAssetNumer() {
  const assetNumber = ASSET_NUMBER;
  ASSET_NUMBER++;
  return assetNumber;
}

function getTimeStamp(assetNumber) {
  const timeStamp = {};
  const timeCreated = new Date();

  timeStamp.year = timeCreated.getFullYear();
  timeStamp.month = timeCreated.getMonth() + 1; // because getMonth() assigns January as 0.
  timeStamp.date = timeCreated.getDate();
  timeStamp.hour = timeCreated.getHours();
  timeStamp.minute = timeCreated.getMinutes();
  timeStamp.second = timeCreated.getSeconds();
  timeStamp.milliseconds = timeCreated.getMilliseconds();
  timeStamp.assetNumber = assetNumber;

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
    timeStamp.milliseconds.toString() +
    "." +
    timeStamp.assetNumber;

  timeStamp.GMT = timeCreated;

  return Object.freeze(timeStamp);
}

class Asset {
  constructor(assetInitialValueUSD = 0, assetName = "unnamedAsset") {
    this.assetInitialValueUSD = assetInitialValueUSD;
    this.assetName = assetName;
    this.assetNumber = getAssetNumer();
    this.assetTimeStamp = getTimeStamp(this.assetNumber);
    this.assetCurrentValue = assetInitialValueUSD;
  }
}

function checkIfAsset(currentValue) {
  return Math.sign(currentValue) >= 0;
}

function createAsset(assetInitialValueUSD, assetName) {
  if (checkIfAsset(assetInitialValueUSD)) {
    const asset = new Asset(assetInitialValueUSD, assetName);
    ASSETS_IN_EXISTENCE.push(asset);
    console.log(`Asset Number ${ASSET_NUMBER - 1} successfully created`);
    return `Asset Number ${ASSET_NUMBER - 1} successfully created`;
  } else {
    console.log(`Asset Number ${ASSET_NUMBER} not created:
    asset value must be a number greater than or equal to zero.`);
    return `Asset Number ${ASSET_NUMBER} not created:
    asset value must be a number greater than or equal to zero.`;
  }
}

createAsset(1, "dollar");
createAsset(-1);
createAsset(1);


console.log(`Number of Assets in existence: `, ASSETS_IN_EXISTENCE.length);
console.log(ASSETS_IN_EXISTENCE[0]);
