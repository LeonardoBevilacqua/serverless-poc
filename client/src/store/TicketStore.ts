import { writable } from "svelte/store";
import type { Ticket } from "../model/Ticket";

export const TicketStore = writable<Ticket[]>([])
