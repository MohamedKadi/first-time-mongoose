const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shopApp');
    console.log("Connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    }
})

const Product = mongoose.model('Product', productSchema);

const bike = new Product({name: 'Mountain bike', price: 299});
bike.save()
.then(data=>{
    console.log(data);
})
.catch(e=>{
    console.log(e.message);
})