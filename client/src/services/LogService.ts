import type { Log } from "../model/Log";
import http from "./http-common"

class LogService {
    getAll() {
        return http.get<Log[]>("logs")
    }
}

export default new LogService()
