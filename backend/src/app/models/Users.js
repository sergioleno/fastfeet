import Sequelize, { Model } from 'sequelize';

class Users extends Model {
  static init(sequelize) {
    super.init(
      {
        // init do Model
        // somente as colunas inseridas pelo usuário
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
      },
      { sequelize } // pode ter um segundo parâmetro com outras opções...ctrl espaço para acessar
    );
  }
}

export default Users;
