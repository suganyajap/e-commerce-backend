const { MongoClient } = require("mongodb");



const client = new MongoClient(process.env.MONGO_URL);

module.exports = {
  db: null,
  users: null,
  products: null,
  orders: null,
  cart: null,

  async connect() {
    await client.connect(); //connect to DB
    

    //select db
    this.db = client.db(process.env.MONGODB_NAME);
    console.log(`${process.env.MONGODB_NAME} DB selected`);

    //choose collection;
    this.users = this.db.collection("users");
    this.products = this.db.collection("products");
    this.orders = this.db.collection("orders");
    this.cart = this.db.collection("cart");
  },
};