import { User } from "../../users/models/user";

export function buildUser(): User {
  return {
    id: 'any_id',
    avatar: 'any_avatar',
    username: 'any_username',
    created_at: new Date()
  }
}
