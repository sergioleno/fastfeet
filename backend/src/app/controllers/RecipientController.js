import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    //name,street, number, complement, state, city, zip_code
    const {
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      zip_code,
    } = await Student.create(req.body);
    return res.json({
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      zip_code,
    });
  }

  async update(req, res) {
    return res.json({ ok: true });
  }
}

export default new RecipientController();
