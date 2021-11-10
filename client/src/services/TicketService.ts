import type { Ticket } from "../model/Ticket";
import http from "./http-common"

class TicketService {
    getAll() {
        return http.get<Ticket[]>("tickets")
    }

    getById(id: number) {
        return http.get<Ticket>(`tickets/${id}`)
    }

    create(ticket: Ticket) {
        return http.post<Ticket>("tickets", ticket)
    }

    update(id: number, ticket: Ticket) {
        return http.put<Ticket>(`tickets/${id}`, ticket)
    }

    delete(id: number) {
        return http.delete<Ticket>(`tickets/${id}`)
    }
}

export default new TicketService()
