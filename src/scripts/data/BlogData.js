import CONFIG from '../globals/config.js';

const BlogData = {
  endpoint        : `${CONFIG.BASE_URL}/article`,
  indexDataByPage : [],
  savedData       : [],


  async getByPage(page) {
    const getSavedByPage = this.getSavedByPage(page);
    if(getSavedByPage) return getSavedByPage;

    const options   = {};
    const endpoint  = `${this.endpoint}?page=${page}`;
    const request   = new Request(endpoint, options);
    const response  = await fetch(request);
    const resJson   = await response.json();

    const { data }  = resJson;
    const fromIndex = this.savedData.length;
    const toIndex   = fromIndex + (data.length-1);
    this.indexDataByPage.push({page, index:[fromIndex, toIndex]});
    this.savedData.push(...data);

    return data;
  },


  getSavedByPage(page) {
    const indexDataPage = this.indexDataByPage.find(item => item.page === page);
    if(!indexDataPage) return false;

    const { index } = indexDataPage;
    const from      = index[0];
    const to        = index[1];
    const result    = this.savedData.slice(from, to+1);

    return result;
  },


  async getById(id) {
    const getSavedById = this.getSavedById(id);
    if(getSavedById) return getSavedById;

    const options   = {};
    const endpoint  = `${this.endpoint}/${id}`;
    const request   = new Request(endpoint, options);
    const response  = await fetch(request);
    const resJson   = await response.json();

    return resJson.data;
  },


  getSavedById(id) {
    const result = this.savedData.find(item => item.id === id);
    return result;
  },
};

export default BlogData;