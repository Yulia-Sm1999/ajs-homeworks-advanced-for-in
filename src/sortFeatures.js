const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

const makeArrayByList = (object, features) => {
  function turnObjToArray(key, fromObj, toArray) {
    const objToPush = {
      key,
      value: fromObj[key],
    };
    toArray.push(objToPush);
  }

  const copiedObject = { ...object };
  const matchedFeatures = [];
  for (const elem of features) {
    for (const feature in copiedObject) {
      if (feature === elem) {
        turnObjToArray(feature, obj, matchedFeatures);
        delete copiedObject[feature];
      }
    }
  }

  const ordered = {};
  Object.keys(copiedObject).sort().forEach((key) => {
    ordered[key] = copiedObject[key];
  });

  const restFeatures = [];
  for (const feature in ordered) {
    if (!(features.includes(feature))) {
      turnObjToArray(feature, ordered, restFeatures);
    }
  }

  const sortedObj = [...matchedFeatures, ...restFeatures];
  return sortedObj;
};

makeArrayByList(obj, ['name', 'level']);
export default makeArrayByList;
