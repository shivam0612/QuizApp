const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const uschema = mongoose.Schema({

    score: {
        type: Number,
        require: true,

    },
    firstname: {
        type: String,
        require: true
    },
    subject: {
        type: String,
        require: true
    }
})

//generating token
uschema.methods.generateAuthToken = async function () {
    try {
        const token = jwt.sign({
            _id: this._id.toString()
        }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({
            token: token
        });
        await this.save();

        return token;
    } catch (e) {
        res.send("the error part" + e);
    }
}

//create collection
const uData = mongoose.model("uData", uschema);
module.exports = uData;