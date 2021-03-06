import { Options } from 'sequelize/types';
import { connect } from '~database/connection';
import app from './app';
import dbOptions from '~configs/database';
const port = process.env.PORT || 5002;

export default {
  init: async () => {
    connect(dbOptions as Options);
    (await app())
      .listen({ port })
      .then(() => console.log(`Server is running on port :${port}`));
  },
};
