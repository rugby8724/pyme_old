// index.d.ts

// Augment the "@medusajs/medusa/dist/models/store" module
import { User as MedusaUser } from "@medusajs/medusa/dist/models/user";

declare module "@medusajs/medusa/dist/models/store" {
  interface Store {
    members?: MedusaUser[];
  }
}

// Augment the "@medusajs/medusa/dist/models/user" module
import { Store as MedusaStore } from "@medusajs/medusa/dist/models/store";

declare module "@medusajs/medusa/dist/models/user" {
  interface User {
    store_id?: string;
    store?: MedusaStore;
  }
}
