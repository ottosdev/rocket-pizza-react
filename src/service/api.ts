import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'

export class ApiService {
  protected readonly instance: AxiosInstance

  public constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.initializeRequestInterceptor()
    this.initializeResponseInterceptor()
  }

  protected handleRequest(config: AxiosRequestConfig): AxiosRequestConfig {
    return config
  }

  protected handleResponse(response: AxiosResponse) {
    return response
  }

  private getUserFromLocalStorage() {
    const userAuthorization = localStorage.getItem('@userAuthenticated')
    let data = {} as any
    if (userAuthorization) {
      data = JSON.parse(userAuthorization)
    }
    return data
  }

  private initializeRequestInterceptor() {
    this.instance.interceptors.request.use(
      (config) => {
        const data = this.getUserFromLocalStorage()
        if (data.access_token) {
          config.headers.Authorization = 'Bearer ' + data.access_token
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      },
    )
  }

  private initializeResponseInterceptor() {
    this.instance.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        if (error.response?.status === 401) {
          alert('Usuario não autenticado')
          localStorage.removeItem('')
        }
      },
    )
  }
}
