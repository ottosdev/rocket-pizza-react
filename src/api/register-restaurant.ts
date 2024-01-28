import { api } from '@/lib/axios.ts'

export interface RegisterRestaurantBody {
  restaurantName: string
  managerName: string
  phone: string
  email: string
}
export async function registerRestaurant({
  email,
  phone,
  managerName,
  restaurantName,
}: RegisterRestaurantBody) {
  await api.post('/restaurants', { email, phone, managerName, restaurantName })
}
