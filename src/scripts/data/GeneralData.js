import CONFIG from '../globals/config.js';

const GeneralData = {
  endpoint: `${CONFIG.BASE_URL}/village-info`,
  savedGetAll: null,

  async getAll(){
    if (this.savedGetAll) return this.savedGetAll;
    
    const options     = {}; 
    const request     = new Request(this.endpoint, options);
    const response    = await fetch(request);
    const resJson     = await response.json();
    this.savedGetAll  = resJson.data;

    return resJson.data;
  },
};

export default GeneralData;