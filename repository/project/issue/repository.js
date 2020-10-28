import Database from '../../database.js';
import model from './model.js';

export default class IssuesRepository extends Database {
  defineModel() {
    this.model = model(this.database);
    this.database.sync();
  }
}
