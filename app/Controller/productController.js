var service = require("../service/productService");
var cloudinary = require("../middleware/cloudinary");
var path = require('path');
module.exports = productController = function() {
  this.create = (req, res) => {
    var details = {
      Name: req.body.Name,
      Description: req.body.Description,
      Price: req.body.Price,
      Category: req.body.Category,
      Color: req.body.Color
    };
console.log("file details", req.file)

    var imgs = { ImageUrl: req.file != null ? req.file.path : "" };
    cloudinary.uploadToCloud(imgs.ImageUrl).then(result => {
      var datas = Object.assign(details, {
        ImageUrl: result.url,
        ImageID: result.ID
      });
      service
        .createProduct(datas)
        .then(data => {
          res.json(data);
        })
        .catch(err => {
          res.json(err);
        });
    });
  };

  this.getAllProducts = (req, res) => {
    service
      .getAllProducts()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  };

  this.getProduct = (req, res) => {
    service
      .getProductById(req.query.id)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  };
};
