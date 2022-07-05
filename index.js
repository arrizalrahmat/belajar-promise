// const { Programmer, DataScientist } = require('./sandbox')
import Person, {
  Programmer,
  DataScientist,
} from './sandbox.js';
import axios from 'axios';

const arrizal = new Programmer('Arrizal', 20);
const rahmat = new DataScientist('Rahmat', 15);
const kurniawan = new Person('Kurniawan', 'Dev Ops', 19);

// console.log(arrizal.doWork());
// console.log(rahmat.doWork());
// console.log(kurniawan);

// const fetchOrder = () => {
//   // proses query ke database
//   //
//   //
//   //
//   //
//   //
//   //
//   return new Promise((resolve, reject) => {
//     let isProcessFinished = true;

//     setTimeout(() => {
//       if (isProcessFinished) {
//         resolve(
//           'Pesanan anda berhasil dijalankan dari dalam function'
//         );
//       } else {
//         reject('Pesanan anda gagal dijalankan');
//       }
//     }, 5000);
//   });
// };

// const myPromise = new Promise((resolve, reject) => {
//   let isProcessFinished = true;

//   setTimeout(() => {
//     if (isProcessFinished) {
//       resolve('Pesanan anda berhasil dijalankan');
//     } else {
//       reject('Pesanan anda gagal dijalankan');
//     }
//   }, 5000);
// });

// fetchOrder()
//   .then((res) => {
//     console.log(res);
//     console.log('proses selanjutnya');
//   })
//   .catch((err) => console.log(err));

axios
  .get('https://randomuser.me/api/')
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err.response.data));

const fetchUsers = async () => {
  try {
    const res = await axios.get(
      'https://randomuser.me/api/'
    );
    // console.log(res.data);
    console.log(user.data.home);
    console.log('1');
    console.log('1');
    console.log('1');
    console.log('1');
    console.log('1');

    console.log('1');
    console.log('1');
  } catch (error) {
    //error handling
    console.log('something is wrong with your code');
    // console.log(error.response.data);
  }
};

fetchUsers();
