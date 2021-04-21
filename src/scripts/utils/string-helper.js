const StringHelper = {
  join(separator, ...values) {
    if(!values.length) return '';

    const result = values.reduce((tempResult, value) => {
      if (!value) return tempResult;
      return `${tempResult}${separator}${value}`;
    });
    
    return result;
  }
};

export default StringHelper;