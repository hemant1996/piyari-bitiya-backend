const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    phoneNumber: {
        type: Number,
        default: null,
        unique: true
    },
    email: {
        type: String,
        default: null
    },
    name: {
        type: String,
        default: null
    }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
userSchema.index({ firebase_uuid: 1 }, { unique: true });

userSchema.virtual('auth_token_payload').get(function () {
    return { _id: this._id };
});

class UserClass {
}

userSchema.loadClass(UserClass);

const User = mongoose.model('User', userSchema);

module.exports = { userSchema, User };