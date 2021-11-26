<script lang="ts">
    import { onMount, createEventDispatcher } from "svelte";
    import type { Ticket } from "../../../model/Ticket";
    import TicketService from "../../../services/TicketService";

    import { TicketStore } from "../../../store/TicketStore";

    export let darkMode = true;

    const dispatch = createEventDispatcher();

    onMount(() => {
        dispatch("set-loading", true);
        TicketService.getAll().then((data: Ticket[]) => {
            TicketStore.update(() => {
                dispatch("set-loading", false);
                return data;
            });
        }).catch(() => {
            alert('Erro ao carregar dados, tente novamente')
            dispatch("set-loading", false);
        });
    });

    const deleteTicket = (ticketId: number) => {
        dispatch("set-loading", true);
        TicketService.delete(ticketId).then(() => {
            TicketStore.update((currentTikets) =>
                currentTikets.filter((ticket) => ticket.id !== ticketId)
            );
            dispatch("set-loading", false);
        });
    };
</script>

<div
    class="uk-card uk-card-body {darkMode
        ? 'uk-card-secondary'
        : 'uk-card-default'}"
>
    <legend class="uk-legend"
        >Tickets | {$TicketStore.length} ticket{$TicketStore.length !== 1
            ? "s"
            : ""}</legend
    >
    <div class="uk-overflow-auto">
        <table
            class="uk-table uk-table-hover uk-table-divider uk-table-striped"
        >
            <thead>
                <tr>
                    <th>Nome completo</th>
                    <th>Email</th>
                    <th>Departamento</th>
                    <th>ID</th>
                    <th>Descrição</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                {#if $TicketStore.length}
                    {#each $TicketStore as ticket (ticket.id)}
                        <tr>
                            <td>{ticket.name} {ticket.lastname}</td>
                            <td>{ticket.email}</td>
                            <td>{ticket.departament}</td>
                            <td>{ticket.registrationCode}</td>
                            <td>{ticket.description}</td>
                            <td
                                ><button
                                    class="uk-button uk-button-text"
                                    on:click={() => deleteTicket(ticket.id)}
                                    ><span uk-icon="trash" /></button
                                ></td
                            >
                        </tr>
                    {/each}
                {:else}
                    <tr>
                        <td colspan="6" class="uk-text-center"
                            >Sem Tickets para ser exibido.</td
                        >
                    </tr>
                {/if}
            </tbody>
        </table>
    </div>
</div>
