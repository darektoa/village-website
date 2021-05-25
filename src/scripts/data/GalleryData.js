import CONFIG from '../globals/config.js';

const GalleryData = {
  endpoint: `${CONFIG.BASE_URL}/album`,
  savedAlbum: null,

  async getAll() {
    if (this.savedAlbum) return this.savedAlbum;

    const options   = {}
    const request   = new Request(this.endpoint, options);
    const response  = await fetch(request);
    const resJson   = await response.json();
    this.savedAlbum = resJson.data;

    return resJson.data;
  },


  async getAlbum(id) {
    const idAlbum = Number(id);
    const fromSaved = this._getAlbumSaved(idAlbum);

    if(fromSaved) return fromSaved;

    return this._getAlbumFetch(idAlbum);
  },


  async _getAlbumFetch(id) {
    const options   = {};
    const endpoint  = `${this.endpoint}/${id}`;
    const request   = new Request(endpoint, options);
    const response  = await fetch(request);
    const resJson   = await response.json();

    return resJson.data
  },


  _getAlbumSaved(id) {
    if (!this.savedAlbum) return null;

    return this.savedAlbum.find((item) => item.id === id);
  },
};

export default GalleryData;