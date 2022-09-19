const connection = require("../config/db")
const sending = require("../middleware/nodemailer")

exports.sendMail = (req, res) => {

    const { title, body } = req.body

    connection.query(`SELECT * FROM users`, async(err, result) => {
        if (err) {
            return res.status(404).json({ message: "Oops, something went wrong", error: true, err_message: err.message })
        } else {
            for (i = 0; i < result.length; i++) {
                await sending.sendMail({
                    from: "Techtacloud CEO 👻 '<support@techtacloud.com>'",
                    to: result[i].mail,
                    subject: title,
                    text: body,
                })
            }
            res.status(200).json({ message: "Email sent successfully", error: false })
        }
    })
}