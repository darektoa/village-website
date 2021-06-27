import CONFIG from '../globals/config.js';

const BlogData = {
  endpoint    : `${CONFIG.BASE_URL}/article`,
  savedGetAll : {},


  async getByPage() {
    const options   = {};
    const request   = new Request(this.endpoint, options);
    const response  = await fetch(request);
    const resJson   = await response.json();
    console.log(resJson.data);
    return resJson.data;
  },
};

export default BlogData;