import bcrypt from 'bcryptjs';
import logger from '../../utils/logging/logger.js';
import BusinessService from '../../businessServices/auth/register.js';

const salt = bcrypt.genSaltSync(10);
const cryptPassword = (pwd) => bcrypt.hashSync(pwd, salt);

class RegisterController {
  constructor() {
    this.businessService = new BusinessService();
  }

  async register({ email, password }) {
    try {
      const encryptedPwd = cryptPassword(password);
      return await this.businessService.register(email, encryptedPwd);
    } catch (err) {
      logger.error(err);
      throw err;
    }
  }
}

export default new RegisterController();
