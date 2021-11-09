<script lang="ts">
    import { createEventDispatcher } from "svelte";
    export let darkMode = true;

    const dispatch = createEventDispatcher<{ "set-dark-mode": boolean }>();

    const handleDarkMode = () => dispatch("set-dark-mode", !darkMode);
</script>

<nav
    class={darkMode
        ? "uk-background-secondary uk-light"
        : "uk-background-muted uk-dark"}
    uk-navbar
>
    <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="/">POC</a></li>
            <!-- svelte-ignore a11y-missing-attribute -->
            <li>
                <a on:click={handleDarkMode}
                    >{darkMode ? "Light mode" : "Dark Mode"}</a
                >
            </li>
        </ul>
    </div>
</nav>
