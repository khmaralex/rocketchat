import data from './data';

const SERVER_DELAY = 500;

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