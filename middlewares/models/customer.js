/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

main()
	.then(() => {
		console.log("Connect successfull");
	})
	.catch((err) => {
		console.log("Error in connection");
	});

async function main() {
	mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
	items: String,
	price: Number,
});

const Order = mongoose.model("Order", orderSchema);
const customersSchema = new Schema({
    username: String,
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "Order" //reference of object to store its id
    }]
});

const Customer = mongoose.model("Customer", customersSchema);

// one to many approach-2
// we store object id in its parent document
// dealing with one to many
const addCustomer = async () => {
    let c1 = await Customer.insertMany({
        username: "Dr Panda",
    });
    let o1 = await Order.findOne({ name: "Samosa" });
    let o2 = await Order.findOne({ name: "Choclate" });
    let o3 = await Order.findOne({ name: "Pastry" });

    c1.orders.push(o1);
    c1.orders.push(o2);
    c1.orders.push(o3);

    await c1.save();

    // if we find then it show object id but how can i replace object id to actual data??
    // using populate method
    Order.find({}).populate("Order");
    // now order id replace to actual object detail
}

const addOrders = async () => {
	await Order.insertMany([
		{ items: "Samosa", price: 20 },
		{ items: "Dosa", price: 60 },
		{ items: "burger", price: 40 },
	]);
};

const delCust = async () => {
    let data = await Customer.findByIdAndDelete("Enter any valid id");
    console.log(data);
}

// customersSchema.pre("findOneAndDelete", () => {
// 	console.log("Pre midddleware called");
// });

// after delete the customer we want we have to delete its order also so this is a post work
customersSchema.post("findOneAndDelete", async (customer) => {
    // it can access deleted data
    console.log("Post midddleware called");
    if (customer.orders.length) {
        let result = await Order.deleteMany({ _id: { $in: [customer.orders] } });
        console.log(result);
    }
});