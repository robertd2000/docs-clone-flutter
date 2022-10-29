import { User } from '../models/user.js'

export const createUser = async (req, res) => {
  try {
    const { name, email, profilePic } = req.body
    let user = await User.findOne({ where: { email } })
    if (!user) {
      user = await User.create({ name, email, profilePic })
      await user.save()
    }
    res.status(200).json({ user })
    console.log('dfe')
  } catch (e) {
    res.status(500).json({
      error: e.message,
    })
  }
}
