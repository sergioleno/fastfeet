import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        // somente as colunas inseridas pelo usuário
        //name, email, password_hash
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
      },
      { sequelize } // pode ter um segundo parâmetro com outras opções...ctrl espaço para acessar
    );
  }
}

export default User;
