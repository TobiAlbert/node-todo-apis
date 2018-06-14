const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$dq2Rwew38p8z9bnZyoj9n.FUkCt/cd.eYSwahU4d7LL1SB50Iv1FS';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

// var data = {
//   id: 10
// };

// var token = jwt.sign(data,'123xyz');
// console.log(token);

// var decoded = jwt.verify(token, '123xyz');
// console.log('decoded', decoded);



// const msg = "Hey, I want to be hashed";

// const hash = SHA256(msg);

// console.log(`Message: ${msg}`);
// console.log(`Hash: ${hash}`);

// var data = {
//   id: 4
// };

// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// // manipulating 
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data).toString());

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resultHash === token.hash) {
//   console.log('Data not tampered');
// } else {
//   console.log('Data manipulated, run!');
// }
