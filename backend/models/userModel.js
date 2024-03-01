import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    }
)

// static sign up method
userSchema.statics.signup = async function (username, password) {
    if (!username || !password){
        throw Error('All fields must be filled');
    };

    const exists = await this.findOne({ username });
    if (exists) {
        throw Error('Username already in use');
    };

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({username, password: hash});

    return user;
};

//static login method
userSchema.statics.login = async function(username, password) {
    if (!username || !password){
        throw Error('All fields must be filled');
    };
    const user = await this.findOne({username});
    if (!user){
        throw Error('Username or password is invalid');
    };
    const match = await bcrypt.compare(password, user.password);
    if (!match){
        throw Error('Username or password is invalid')
    };
    return user;
}

export const User = mongoose.model('User', userSchema);