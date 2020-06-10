let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/FindOperatorDemo")
        .then(()=>console.log("database got connected"))
        .catch(error=>console.log("something went wrong",error.message));

let RemoveSchema = new mongoose.Schema({
    
})

let RemoveModel = mongoose.model("bookscollections",RemoveSchema);

async function RemoveFunction(id){
    let book= await RemoveModel.findByIdAndDelete(id);
    console.log(book);
}
//RemoveFunction("5e9ed63d1ffbc63b38f24b54");

async function RemoveFun(name){
    let book= await RemoveModel.deleteMany({name});
    console.log(book);
}
RemoveFun("Vampire Academy");