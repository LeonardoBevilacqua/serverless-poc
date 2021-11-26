import { writable } from "svelte/store";
import type { Log } from "../model/Log";

export const LogStore = writable<Log[]>([])
