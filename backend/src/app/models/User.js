import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        // somente as colunas inseridas pelo usuário
        //name, email, password_hash
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL, // campode "cache"
        password_hash: Sequelize.STRING,
      },
      { sequelize } // pode ter um segundo parâmetro com outras opções...ctrl espaço para acessar
    );
    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8); // 8 niveis de criptografia
      }
    }); // execução automática baseada em ações do model
    return this; // retorna o model inicializado
  }
}

export default User;
