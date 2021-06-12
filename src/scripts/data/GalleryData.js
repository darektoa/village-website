import CONFIG from '../globals/config.js';

const GalleryData = {
  endpoint        : `${CONFIG.BASE_URL}/album`,
  savedGetAll     : null,


  async getAll() {
    if (this.savedGetAll) return this.savedGetAll;

    const options     = {}
    const request     = new Request(this.endpoint, options);
    const response    = await fetch(request);
    const resJson     = await response.json();
    this.savedGetAll  = resJson.data;

    return resJson.data;
  },


  async getAlbum(id) {
    const idAlbum = Number(id);
    const { savedGetAll } = this;

    if(savedGetAll) savedGetAll.find((item) => item.id === idAlbum);
    
    const options   = {};
    const endpoint  = `${this.endpoint}/${idAlbum}`;
    const request   = new Request(endpoint, options);
    const response  = await fetch(request);
    const resJson   = await response.json();

    return resJson.data
  },
};

export default GalleryData;