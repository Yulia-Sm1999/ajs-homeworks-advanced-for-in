const makeArrayByList = (object, features) => {
  const givenArrayOfKeys = features;
  const makeSortedArray = () => {
    const restKeys = [];
    for (const key in object) {
      if (!(givenArrayOfKeys.includes(key))) {
        restKeys.push(key);
      }
    }
    return restKeys.sort();
  };
  const sortedArrayOfKeys = makeSortedArray();

  const finalArrayOfKeys = [...givenArrayOfKeys, ...sortedArrayOfKeys];
  const finalArrayOfEntries = [];
  finalArrayOfKeys.forEach((key) => {
    const objToPush = {
      key,
      value: object[key],
    };
    finalArrayOfEntries.push(objToPush);
  });

  return finalArrayOfEntries;
};

export default makeArrayByList;
