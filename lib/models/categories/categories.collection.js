'use strict';
const schema = require('./categories.schema');
class categoriesModel {

    constructor() {

    }

    /**
     * 
     * @param {String} _id 
     * @return {*}
     */
    read(_id) {
        let queryObject = _id ? { _id } : {};
        return schema.find(queryObject);
    }
    /**
     * 
     * @param {object} record 
     * @return {*}
     */
    create(record) {
        let newRecord = new schema(record);
        return newRecord.save();
    }
    /**
     * 
     * @param {string} _id 
     * @param {object} record 
     * @return {*}
     */
    update(_id, record) {
        return schema.findByIdAndUpdate(_id, record, { new: true });
    }
    /**
     * 
     * @param {string} _id 
     * @return {*}
     */
    delete(_id) {
        return schema.findByIdAndDelete(_id);
    }

}


module.exports = new categoriesModel();