const ElementHelper = {
  load(elmnt) {
    return new Promise((resolve, reject) => {
      elmnt.addEventListener('load', (e) => resolve(e));
      elmnt.addEventListener('error', (e) => reject(e));
    });
  },
};

export default ElementHelper;