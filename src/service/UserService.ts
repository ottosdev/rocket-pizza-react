import { ApiService } from '@/service/api.ts'

export class UserService extends ApiService {
  public constructor() {
    super({ baseURL: 'https://jsonplaceholder.typicode.com' })
  }

  public async getUsers() {
    return this.instance.get('/users')
  }
}
