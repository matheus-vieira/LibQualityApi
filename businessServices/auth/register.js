import BusinessService from '../businessService.js';
import UserRepository from '../../repository/user/repository.js';
import logger from '../../utils/logging/logger.js';

class RegisterBusinessService extends BusinessService {
  constructor() {
    super();

    this.repository = new UserRepository();
  }

  async register(email, password) {
    try {
      let user = await this.repository.getByEmail(email);

      if (user.length > 0) throw new Error('Email already registered.');

      user = await this.repository.save({ email, password });

      return user;
    } catch (err) {
      logger.error(err);
      throw err;
    }
  }
}

export default RegisterBusinessService;
