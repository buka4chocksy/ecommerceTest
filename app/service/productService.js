var model = require("../model/product");

exports.createProduct = data => {
  return new Promise((resolve, reject) => {
    console.log(data, "kkkkkkkkkkk");
    model
      .findOne({ Name: data.Name })
      .then(exists => {
        if (exists) {
          resolve({ success: false, message: "Product already exists !!" });
        } else {
          console.log(data, "see this heere");
          model.create(data).then(created => {
            if (created) {
              resolve({
                success: true,
                message: "product created successfully !!"
              });
            } else {
              resolve({ success: false, message: "product not created  !!" });
            }
          });
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};

exports.getAllProducts = () => {
  return new Promise((resolve, reject) => {
    model
      .find(
        {},
        {
          Description: 0,
          Category: 0,
          Category: 0,
          ImageUrl: 0,
          ImageID: 0,
          __v: 0,
          Color: 0
        }
      )
      .then(result => {
        if (result) {
          resolve({ success: true, message: result });
        } else {
          resolve({ success: false, message: "No product found" });
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};

exports.getProductById = (id)=>{
    return new Promise((resolve , reject)=>{
        model.findById({_id:id}).then(found =>{
            if(found){
                resolve({ success: true, message: result });   
            }else{
                resolve({ success: false, message: "No product found" });  
            }
        })
    })
}
