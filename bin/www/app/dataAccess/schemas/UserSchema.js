"use strict";
const DataAccess = require("./../DataAccess");
let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;
class UserSchema {
    static get schema() {
        let schema = mongoose.Schema({
            firstName: { type: String, required: true },
            lastName: { type: String, required: true },
            displayName: { type: String },
            email: { type: String, required: true },
            password: { type: String },
            provider: { type: String },
            salt: { type: String }
        });
        return schema;
    }
}
let schema = mongooseConnection.model("Users", UserSchema.schema);
module.exports = schema;
//# sourceMappingURL=UserSchema.js.map