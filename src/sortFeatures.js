const makeArrayByList = (object, features) => {
  const givenArrayOfKeys = features;
  const sortedArrayOfKeys = (() => {
    const restKeys = [];
    for (const key in object) {
      if (!(givenArrayOfKeys.includes(key))) {
        restKeys.push(key);
      }
    }
    return restKeys.sort();
  })();

  const FinalArrayOfKeys = [...givenArrayOfKeys, ...sortedArrayOfKeys];
  const FinalArrayOfEntries = [];
  FinalArrayOfKeys.forEach((key) => {
    const objToPush = {
      key,
      value: object[key],
    };
    FinalArrayOfEntries.push(objToPush);
  });

  return FinalArrayOfEntries;
};

export default makeArrayByList;
