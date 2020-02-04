import Recipient from '../models/Recipient';
import * as Yup from 'yup';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .required()
        .min(2),
      street: Yup.string().required(),
      number: Yup.string().required(),
      complement: Yup.string().min(2),
      state: Yup.string()
        .required()
        .min(2),
      city: Yup.string()
        .required()
        .min(2),
      zip_code: Yup.string()
        .required()
        .min(8)
        .max(9),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const {
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      zip_code,
    } = await Recipient.create(req.body);
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
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      name: Yup.string().min(2),
      street: Yup.string(),
      number: Yup.string(),
      complement: Yup.string().min(2),
      state: Yup.string().min(2),
      city: Yup.string().min(2),
      zip_code: Yup.string()
        .min(8)
        .max(9),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.body;

    const recipient = await Recipient.findByPk(id);
    //checa se o usário está trocando email

    const {
      name,
      street,
      number,
      complement,
      state,
      city,
      zip_code,
    } = await recipient.update(req.body);
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

  async index(req, res) {
    const recipients = await Recipient.findAll();
    return res.json(recipients);
  }
}

export default new RecipientController();
