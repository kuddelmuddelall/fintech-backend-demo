// This file will deal with the customer table.
const database = require("./database");
const express = require("express");

var router = express.Router();

router.get(`/customer/all`, get_all_customers);
router.get(`/customer/cid`, get_customer_by_id);
router.post("/customer/add", add_new_customer);
router.delete("/customer/del", delete_customer_by_id);
router.put("/customer/wallet", update_wallet_by_id);

function get_all_customers(request, response) {
  database.connection.query(
    "select * from customers", // query in string format
    (error, results) => {
      if (error) {
        console.log(error);
        response.status(500).send("Internal Server Error");
      } else {
        // console.log(results);
        response.status(200).send(results);
      }
    }
  );
}

// function get_customer_by_id(id) {
function get_customer_by_id(request, response) {
  database.connection.query(
    // `select * from customers where id = ${id}`,
    `select * from customers where id = ${request.query.id}`,
    (error, results) => {
      if (error) {
        console.log(error);
        response.status(500).send("Internal Server Error");
      } else {
        // console.log(results);
        response.status(200).send(results);
      }
    }
  );
}

function add_new_customer(request, response) {
  database.connection.query(
    `insert into customers (type, name, email, wallet, tolerance) 
        values (
        '${request.body.type}', 
        '${request.body.name}', 
        '${request.body.email}', 
        '${request.body.wallet}', 
        '${request.body.tolerance}')`,
    (error, results) => {
      if (error) {
        console.log(error);
        response.status(500).send("Internal Server Error");
      } else {
        response.status(200).send("Added successfully!");
      }
    }
  );
}


// function add_new_customer(type, name, email, wallet, tolerance) {
//   database.connection.query(
//     `insert into customers (type, name, email, wallet, tolerance) 
//         values ('${type}', '${name}', '${email}', '${wallet}', '${tolerance}')`,
//     (error, results) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("Added!");
//       }
//     }
//   );
// }

function update_wallet_by_id(id, wallet) {
  database.connection.query(
    `update customers set wallet = ${wallet} where id = ${id}`,
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Updated!");
      }
    }
  );
}
// test statement

function delete_customer_by_id(request, response) {
  database.connection.query(
    `delete from customers where id = ${request.query.id}`,
    (error, results) => {
      if (error) {
        console.log(error);
        response.status(500).send("Internal Server Error");
      } else {
        response.status(200).send("Deleted successfully!");
      }
    }
  );
}

// function delete_customer_by_id(id) {
//   database.connection.query(
//     `delete from customers where id = ${id}`,
//     (error, results) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("Deleted!");
//       }
//     }
//   );
// }

module.exports = {
 router
};

// module.exports = {
//   get_all_customers,
//   get_customer_by_id,
//   add_new_customer,
//   update_wallet_by_id,
//   delete_customer_by_id,
// };
