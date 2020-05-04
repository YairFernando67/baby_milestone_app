import axios from 'axios';

const token = 'token=09d23abf0c1d10e37592819dd8157ee06f22c0d308a8906d21e25c0de4f838859e0d5c1337aca40103b028ec81e948c6be382fce7c82d6ad273ad4fcd16e8f58';
const header = `Token ${token}`;
export default axios.create({
  baseURL: 'https://demo.kinedu.com/api/v3/skills',
  headers:  {Authorization: header}
})