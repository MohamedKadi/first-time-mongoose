const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shopApp');
    console.log("Connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const productSchema = new mongoose.Schema({
    name: {
        //schematypes
        type: String,
        required: true,
        maxlength: 20,
    },
    price: {
        type: Number,
        required: true,
        //the second option for error handling
        min: [1,'price must be positive']
    },
    onSale: {
        type: Boolean,
        default: false,
    },
    //cetegories: [String]
    cetegories: {
        type: String,
        default: 'cycling'
    },
    qty: {
        online: {
            type: Number,
            default: 0,
        },
        inStore: {
            type: Number,
            default: 0,
        }

    },
    size: {
        type: String,
        enum: ['S', 'M','L']
    }
})

// productSchema.methods.greet =  () => {
//     console.log("Hello!! ", this.name);
// }
// productSchema.Schema.methods.toggleonSale = ()=>{
//     this.onSale = !this.onSale;
//      return this.save();
// }

productSchema.statics.fireSale = function(){
    return this.updateMany({},{onSale: true, price: 0})
}

const Product = mongoose.model('Product', productSchema);

// const findProduct = async () =>{
//     const foundProduct = await Product.findOne({name: 'Mountain bike'});
//     foundProduct.greet();
//     console.log(foundProduct);
//     await foundProduct.toggleonSale;
//     console.log(foundProduct);
// }
Product.fireSale().then(res => console.log(object));
// findProduct();

const bike = new Product({name: 'Mountain bike', price: 299, categories:['cycling','safety'], size: 'M'});
bike.save()
.then(data=>{
    console.log(data);
})
.catch(e=>{
    console.log(e);
})

//new to give the new docs after updating it and runValidator for checking the values and validate them before updating cuz without it it will update without checking
// Product.findOneAndUpdate({name: 'Tire pump'},{price: -10.99},{new: true, runValidators})
// .then(data => {
//     console.log(data);
// })
// .catch(e=>{
//     console.log(e.message);
// })