import { User, Charger } from "../types";

const users: User[] = [
  {
    id: "usr_001",
    username: "johnsmith",
    email: "john.smith@email.com",
    role: "admin"
  },
  {
    id: "usr_002",
    username: "sarahj",
    email: "sarah.j@email.com",
    role: "user"
  },
  {
    id: "usr_003",
    username: "mchen",
    email: "m.chen@email.com",
    role: "client"
  },
  {
    id: "usr_004",
    username: "emmaw",
    email: "emma.w@email.com",
    role: "user"
  },
  {
    id: "usr_005",
    username: "drodriguez",
    email: "d.rodriguez@email.com",
    role: "client"
  }
]

const charges: Charger[] = [
  {
    id: "ch_001",
    status: "online",
    name: "Tesla Supercharger A1",
    type: "DC Fast",
    model: "Tesla V3",
    isAvailable: true
  },
  {
    id: "ch_002",
    status: "online",
    name: "CCS Fast Charger B1",
    type: "DC Fast",
    model: "ABB Terra HP",
    isAvailable: true
  },
  {
    id: "ch_003",
    status: "offline",
    name: "Level 2 Charger C1",
    type: "AC",
    model: "ChargePoint CPF50",
    isAvailable: false
  },
  {
    id: "ch_004",
    status: "online",
    name: "CHAdeMO Station D1",
    type: "DC Fast",
    model: "Tritium RT50",
    isAvailable: true
  },
  {
    id: "ch_005",
    status: "online",
    name: "Tesla Supercharger A2",
    type: "DC Fast",
    model: "Tesla V3",
    isAvailable: true
  },
  {
    id: "ch_006",
    status: "offline",
    name: "Level 2 Charger C2",
    type: "AC",
    model: "ChargePoint CPF50",
    isAvailable: false
  },
  {
    id: "ch_007",
    status: "online",
    name: "CCS Fast Charger B2",
    type: "DC Fast",
    model: "ABB Terra HP",
    isAvailable: true
  },
  {
    id: "ch_008",
    status: "online",
    name: "CHAdeMO Station D2",
    type: "DC Fast",
    model: "Tritium RT50",
    isAvailable: true
  },
  {
    id: "ch_009",
    status: "online",
    name: "Level 2 Charger C3",
    type: "AC",
    model: "ChargePoint CPF50",
    isAvailable: true
  },
  {
    id: "ch_010",
    status: "offline",
    name: "Tesla Supercharger A3",
    type: "DC Fast",
    model: "Tesla V3",
    isAvailable: false
  }
];

export { users, charges };
