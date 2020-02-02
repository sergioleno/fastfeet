import Sequelize from 'sequelize';

import Users from '../app/models/Users';
import Recipient from '../app/models/Recipient';

import databaseConfig from '../config/database';

const models = [Users, Recipient];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
