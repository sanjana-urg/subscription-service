const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');

dotenv.config();

const Secret_key = process.env.SECRET_KEY

const generateJwtToken = (id, email) => {
    console.log(id, email, 'values');
    return jwt.sign({
        id: id,
        email: email
    }, Secret_key)
}


const auth = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '')

    try {
        if (token) {
            const employee = await jwt.verify(token, Secret_key)
            req.sqlUID = employee?.id;
            next();
        }

    }
    catch (error) {
        return res.status(401).send({ message: 'Invalid token' });
    }
}

module.exports = {  
    auth,
    generateJwtToken
}