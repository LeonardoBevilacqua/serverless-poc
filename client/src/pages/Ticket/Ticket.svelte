<script lang="ts">
    import { useFocus } from "svelte-navigator";
    import AddTicketForm from "./components/AddTicketForm.svelte";
    import TicketsTable from "./components/TicketsTable.svelte";

    const registerFocus = useFocus();

    export let darkMode = true;
</script>

<main
    use:registerFocus
    class="uk-container uk-padding-small uk-width-expand {darkMode
        ? 'uk-light'
        : 'uk-dark'}"
>
    <ul uk-accordion>
        <li>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="uk-accordion-title">Novo Ticket</a>
            <div class="uk-accordion-content">
                <AddTicketForm {darkMode} on:set-loading />
            </div>
        </li>
    </ul>

    <hr />

    <TicketsTable {darkMode} on:set-loading />
</main>
