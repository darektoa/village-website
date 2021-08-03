import CONFIG from '../globals/config.js';

const CitizenData = {
  endpoint: `${CONFIG.BASE_URL}/citizens`,
  savedGetAll: null,
  
  async getAll() {
    if(this.savedGetAll) return this.savedGetAll

    const options     = {};
    const request     = new Request(this.endpoint, options);
    const response    = await fetch(request);
    const resJson     = await response.json();
    this.savedGetAll  = resJson.data;

    return resJson.data;
  },


  async getTotal() {
    const getAllData  = await this.getAll();
    const response    = {
      total: getAllData.length,
      male: getAllData.filter(data => data.gender === 'L').length,
      female: getAllData.filter(data => data.gender === 'P').length,
    };

    return response;
  },


  async getStatistics() {
    const getTotalData  = await this.getTotal();
    const response      = [
      {
        heading: 'Total Penduduk',
        total: getTotalData.total,
        iconClassName: 'icon_peoples-343434',
      }, {
        heading: 'Penduduk Laki-laki',
        total: getTotalData.male,
        iconClassName: 'icon_male-343434',
      }, {
        heading: 'Penduduk Perempuan',
        total: getTotalData.female,
        iconClassName: 'icon_female-343434',
      }
    ];

    return response;
  },
};

export default CitizenData;