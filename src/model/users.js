const Pool = require('../config/db');

const findEmail = (email) => {
  console.log(email);
  return new Promise((resolve, reject) =>
    Pool.query('SELECT * FROM users WHERE email=$1', [email], (error, result) => {
      console.log(error);
      if (!error) {
        resolve(result);
      } else {
        reject(error);
      }
    })
  );
};

const createUser = (data) => {
  //   console.log(data);
  const { id, fullname, email, password } = data;
  return Pool.query('insert into users (id,fullname,email,password) values($1, $2, $3, $4)', [id, fullname, email, password]);
};

// const createUser = (data) => {
//   console.log(data);
//   const { id, fullname, email, password } = data;
//   return new Promise('insert into users=$1 (id,fullname,email,password) values($1, $2, $3, $4)', [id, fullname, email, password]), (resolve, reject)}
//   (
//   Pool.query( (error, result) => {
//       if (!error) {
//         resolve(result);
//       } else {
//         reject(error);
//       }
//     })
//   );
// };

module.exports = { findEmail, createUser };
