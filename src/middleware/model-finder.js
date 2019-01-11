'use strict';

module.exports = (req,res,next) => {
    let modelName = req.params.model;
    // console.log(modelName);
    req.model = require(`../models/${modelName}.js`);
    // console.log(req.model);
    next();
}