import BusinessService from '../businessService.js';
import UserRepository from '../../repository/user/repository.js';

class ReadBusinessService extends BusinessService {
  constructor() {
    super();

    this.repository = new UserRepository();
  }
}

export default ReadBusinessService;
