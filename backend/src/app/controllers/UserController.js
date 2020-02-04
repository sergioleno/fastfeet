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
    const { id, name, email } = await User.create(req.body);
    return res.json({ id, name, email });
  }

  async update(req, res) {
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);
    //checa se o usário está trocando email
    if (email && email !== user.email) {
      const userExists = await User.findOne({
        where: { email },
      });
      //checa se o email novo não está sendo utilizdo
      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
    }
    //checa se usuário trocou senha
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match.' });
    }

    const { id, name } = await user.update(req.body);
    return res.json({ id, name, email });
  }
}

export default new UserController();
