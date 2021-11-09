<script lang="ts">
    import type { Ticket } from "../model/Ticket";

    export let darkMode = true;

    let tickets: Ticket[] = [];
</script>

<div
    class="uk-card uk-card-body {darkMode
        ? 'uk-card-secondary'
        : 'uk-card-default'}"
>
    <legend class="uk-legend"
        >Tickets | {tickets.length} ticket{tickets.length !== 1
            ? "s"
            : ""}</legend
    >

    <table class="uk-table uk-table-hover uk-table-divider uk-table-striped">
        <thead>
            <tr>
                <th>Nome completo</th>
                <th>Email</th>
                <th>Departamento</th>
                <th>ID</th>
                <th>Descrição</th>
            </tr>
        </thead>
        <tbody>
            {#if tickets.length}
                {#each tickets as ticket (ticket.id)}
                    <tr>
                        <td>{ticket.name} {ticket.lastname}</td>
                        <td>{ticket.email}</td>
                        <td>{ticket.departament}</td>
                        <td>{ticket.registrationCode}</td>
                        <td>{ticket.description}</td>
                    </tr>
                {/each}
            {:else}
                <tr>
                    <td colspan="5" class="uk-text-center"
                        >Sem Tickets para ser exibido.</td
                    >
                </tr>
            {/if}
        </tbody>
    </table>
</div>
