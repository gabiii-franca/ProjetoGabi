const User = require("../models/User")
module.exports = {
  async store(req, res) {
    // Correção: não era necessário mexer no controller.
    const user = await User.create(req.body)
    return res.json(user)
  },
  async list(req, res) {
    const users = await User.find({})
    return res.json(users)
  },
  async index(req, res) {
    const user = await User.findOne({ _id: req.params.id })
    return res.json(user)
  },
  async update(req, res) {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    return res.json(user)
  },
  async destroy(req, res) {
    await User.deleteOne({ _id: req.params.id })
    return res.json({
      message: "Exclusão realizada com sucesso!"
    })
  }
}
