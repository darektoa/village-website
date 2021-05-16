const ObjectHelper = {
  isEqual(obj1, obj2) {
    let result = false;
    const entries1 = Object.entries(obj1);
    const entries2 = Object.entries(obj2);

    if(!(obj1 && obj2)) return obj1 === obj2;
    if((entries1.length + entries2.length) === 0) return true;
    
    entries1.forEach((item, index) => {
      if(!entries2[index]) return result = false;
      const equalKey = item[0] === entries2[index][0];
      const equalVal = item[1] === entries2[index][1];

      if(equalKey && equalVal) result = true;
      else result = false;
    });

    return result;
  },
};

export default ObjectHelper;