import data from './data.json';

const API = {
  async getData(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    })
  }
}

export default API;