import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({
      where: { email: req.body.email },
    });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    //name, email, password_hash
    const { id, name, email, password_hash } = await User.create(req.body);
    return res.json({ id, name, email, password_hash });
  }

  async update(req, res) {
    return res.json({ ok: true });
  }
}

export default new UserController();
