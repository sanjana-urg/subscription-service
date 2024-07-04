const UserModel = require('../model/userModel');

async function makeSubscription(req, res) {
    const { website, startDate, email, endDate, consumer, planID } = req.body
    try {

        const user = await UserModel.create({
            website,
            email,
            startDate,
            endDate,
            consumer,
            planID,
            created_at: Date.now()
        })

        res.status(201).send(user)
    } catch (error) {
        console.log(error, "error while creating new user")
        res.status(500).send({
            error: "Internal Server Error"
        })
    }
}

async function getUserList(req, res) {
    try {

        const user_email = req.query.email
        let userDetails

        if (user_email) {
            userDetails = await UserModel.find({ email: user_email })
        } else {
            userDetails = await UserModel.find({})
        }
        res.send(userDetails)

    } catch (error) {
        res.status(500).send({
            error: "Internal server Error"
        })
    }
}

module.exports = {
    makeSubscription,
    getUserList
}