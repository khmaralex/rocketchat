import data from './data';

const SERVER_DELAY = 0;

const API = {
  getData(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, SERVER_DELAY);
    })
  }
}

export default API;