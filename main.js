const obj = {
    x: 10,
    y: 20,
    inner: {
      x: 20,
      z: 30
    },
    foo2: {
      k: 23,
      p: 13
    }
  };
  
  function assign(object) {
    const newObj = {};
  
    for (let key in object) {
      if (typeof object[key] === "object") {
        newObj[key] = assign(object[key]);
      } else {
        newObj[key] = object[key];
      }
    }
  
    return newObj;
  }
  
  const assignObj = assign(obj);
  console.log(assignObj);