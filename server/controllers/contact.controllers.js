const contactCtrl = {}

contactCtrl.sendEmail = (req, res) => res.json({message: "POST contact, send email"})

module.exports = contactCtrl