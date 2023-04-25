
import userService from "../services/userService.js";

async function createUser(req, res) {
  try {
    const user = await userService.createUser({ name: 'runo', email: 'orunosaduwa@gmail.com', password: 12345 })
    return res.status(201).json(user)
  } catch (err) {
    console.log('Error creating user')
    res.status(500).json({ message: err.message });
  }
}

export default {
  createUser
};


