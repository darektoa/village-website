const StringHelper = {
  join(separator, ...values) {
    if(!values.length) return '';

    const result = values.reduce((tempResult, value) => {
      if (!value) return tempResult;
      return `${tempResult}${separator}${value}`;
    });
    
    return result;
  },


  upperCaseFirst(value) {
    if(!value.length && typeof(value) !== 'string') return '';

    return value.charAt(0).toUpperCase() + value.slice(1);
  }
};

export default StringHelper;