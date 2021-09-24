import CONFIG from '../globals/config.js';
import DateHelper from '../utils/date-helper.js';

const CitizenData = {
  endpoint: `${CONFIG.BASE_URL}/citizens`,
  savedGetAll: null,
  savedResponse: null,
  
  async getAll() {
    if(this.savedGetAll) return this.savedGetAll

    const options       = {};
    const request       = new Request(this.endpoint, options);
    const response      = await fetch(request);
    const resJson       = await response.json();
    this.savedGetAll    = resJson.data;
    this.savedResponse  = resJson;
    
    return resJson.data;
  },


  async getByGender() {
    const getAllData = await this.getAll();
    const response =  {
      male: getAllData.filter(data => data.gender === 'L'),
      female: getAllData.filter(data => data.gender === 'P'),
    };

    return response;
  },


  async getTotal() {
    const getAllData      = await this.getAll();
    const getByGenderData = await this.getByGender();
    const response    = {
      total : getAllData.length,
      male  : getByGenderData.male.length,
      female: getByGenderData.female.length,
    };

    return response;
  },


  async getStatistics() {
    const getAllData    = await this.getAll();
    const getTotalData  = await this.getTotal();
    const getByGender   = await this.getByGender();
    const groupedByAge  = {
      total   : this._groupingByAge(getAllData),
      male    : this._groupingByAge(getByGender.male),
      female  : this._groupingByAge(getByGender.female),
    };
    
    const response = [
      {
        heading: 'Total Penduduk',
        total: getTotalData.total,
        iconClassName: 'icon_peoples-fff',
        ...groupedByAge.total
      }, {
        heading: 'Penduduk Laki-laki',
        total: getTotalData.male,
        iconClassName: 'icon_male-fff',
        ...groupedByAge.male
      }, {
        heading: 'Penduduk Perempuan',
        total: getTotalData.female,
        iconClassName: 'icon_female-fff',
        ...groupedByAge.female
      }
    ];

    return response;
  },


  _groupingByAge(data) {
    const ageLimit    = {
      babies        : {min: 0, max: 1},
      childrens     : {min: 2, max: 12},
      teenagers     : {min: 13, max: 18},
      adults        : {min: 19, max: 59},
      seniorAdults  : {min: 60},
    };

    const result = {
      babies        : this._filterAge(data, ageLimit.babies),
      childrens     : this._filterAge(data, ageLimit.childrens),
      teenagers     : this._filterAge(data, ageLimit.teenagers),
      adults        : this._filterAge(data, ageLimit.adults),
      seniorAdults  : this._filterAge(data, ageLimit.seniorAdults)
    };
    console.log(result);
    return result;
  },
  

  _filterAge(data, {min, max}) {
    if(!min && !max) return data;

    const filtered = data.filter(item => {
      const age = DateHelper.age({
        birthdayDate: item.birthday,
        currentDate: new Date(this.savedResponse.timestamp).toISOString()
      }).year;

      return max ? age <= max && age >= min : age >= min;
    });

    return filtered;
  },
};

export default CitizenData;