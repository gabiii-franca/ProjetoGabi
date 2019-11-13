const { Schema, model } = require("mongoose")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authConfig = require("../config/aut");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
  },
  {
    timestamps: true
  }
)

UserSchema.pre("save", async function(next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await  hash(this.password, 8);
});
  
  bcrypt.UserSchema.methods = {
    compareHash(password){
      return compare(password, this.password);
    }  
  };

 bcrypt.UserSchema.statics = {
   generateToken({id}) {
     return jwt.sign({id}, authConfig.secret)
   }
 };
module.exports = model("User", UserSchema)

