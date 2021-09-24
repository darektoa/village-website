const DateHelper = {
  ISO() {
    const date = new Date();
    return date.toISOString();
  },


  age({birthdayDate, currentDate=this.ISO()}) {
    const birthdayValue = new Date(String(birthdayDate)).valueOf();
    const currentValue  = new Date(String(currentDate)).valueOf();
    const ageValue      = currentValue - birthdayValue;

    if(ageValue < 0) return 0;
    const beginOfTimeValue  = new Date('0000-01-01').valueOf();
    const ageDate           = new Date(ageValue + beginOfTimeValue);

    return {
      year: ageDate.getFullYear(),
      month: ageDate.getMonth(),
      date: ageDate.getDate()
    };
  },
};

export default DateHelper;