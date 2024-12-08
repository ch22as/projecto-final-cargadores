type Role = "admin" | "user" | "client"
type Status = "offline" | "online"

export interface User {
  id: string,
  username: string,
  role: Role,
  email: string,
}

export interface Charger {
  id: string,
  status: Status,
  name: string,
  type: string,
  model: string,
  isAvailable: boolean,
}
