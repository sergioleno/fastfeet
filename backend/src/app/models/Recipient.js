import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        //name,street, number, complement, state, city, zip_code
        name: Sequelize.STRING,
        number: Sequelize.STRING,
        street: Sequelize.STRING,
        complement: Sequelize.STRING,
        state: Sequelize.STRING,
        city: Sequelize.STRING,
        zip_code: Sequelize.STRING,
      },
      { sequelize } // pode ter um segundo parâmetro com outras opções...ctrl espaço para acessar
    );
  }
}

export default Recipient;
