<script lang="ts">
    import LogsTable from "./components/LogsTable.svelte";

    export let darkMode = true;
</script>

<main
    class="uk-container uk-padding-small uk-width-expand {darkMode
        ? 'uk-light'
        : 'uk-dark'}"
>
    <h2 class="uk-text-lead uk-text-primary">Logs</h2>

    <LogsTable {darkMode} />
</main>

<style>
    .uk-text-lead {
        font-size: 1.25rem;
    }
</style>
