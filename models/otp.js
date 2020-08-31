const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otpSchema = new Schema({
    phoneNumber: {
        type: Number,
        default: null
    },
    otpNumber: {
        type: Number,
        default: null
    }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
otpSchema.index({ firebase_uuid: 1 }, { unique: true });

otpSchema.virtual('auth_token_payload').get(function () {
    return { _id: this._id };
});

class OtpClass {
}

otpSchema.loadClass(OtpClass);

const Otp = mongoose.model('Otp', otpSchema);

module.exports = { otpSchema, Otp };