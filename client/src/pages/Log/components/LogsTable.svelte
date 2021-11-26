<script lang="ts">
    import { onMount, createEventDispatcher } from "svelte";
    import type { Log } from "../../../model/Log";
    import LogService from "../../../services/LogService";

    import { LogStore } from "../../../store/LogStore";

    export let darkMode = true;

    const dispatch = createEventDispatcher();

    onMount(() => {
        dispatch("set-loading", true);
        LogService.getAll()
            .then((data: Log[]) => {
                LogStore.update(() => {
                    dispatch("set-loading", false);
                    return data;
                });
            })
            .catch(() => {
                alert("Erro ao carregar dados, tente novamente");
                dispatch("set-loading", false);
            });
    });
</script>

<div
    class="uk-card uk-card-body {darkMode
        ? 'uk-card-secondary'
        : 'uk-card-default'}"
>
    <legend class="uk-legend"
        >Logs | {$LogStore.length} log{$LogStore.length !== 1
            ? "s"
            : ""}</legend
    >
    <div class="uk-overflow-auto">
        <table
            class="uk-table uk-table-hover uk-table-divider uk-table-striped"
        >
            <thead>
                <tr>
                    <th>Detalhe</th>
                    <th>Fonte</th>
                    <th>Data</th>
                    <th>Mensagem</th>
                </tr>
            </thead>
            <tbody>
                {#if $LogStore.length}
                    {#each $LogStore as log (log.id)}
                        <tr>
                            <td>{log.detailType}</td>
                            <td>{log.source}</td>
                            <td>{log.time}</td>
                            <td>{log.detailMessage}</td>
                        </tr>
                    {/each}
                {:else}
                    <tr>
                        <td colspan="6" class="uk-text-center"
                            >Sem Logs para ser exibido.</td
                        >
                    </tr>
                {/if}
            </tbody>
        </table>
    </div>
</div>
