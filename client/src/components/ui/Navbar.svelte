<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { Link,useLocation } from "svelte-navigator";
    export let darkMode = true;

    const dispatch = createEventDispatcher<{ "set-dark-mode": boolean }>();

    const handleDarkMode = () => dispatch("set-dark-mode", !darkMode);

    const location = useLocation();

    $: currentRoute = $location.pathname;
</script>

<nav
    class={darkMode
        ? "uk-background-secondary uk-light"
        : "uk-background-muted uk-dark"}
    uk-navbar
>
    <div class="uk-navbar-left uk-width-1-1@s">
        <ul class="uk-navbar-nav uk-width-1-1@s">
            <li class="uk-active"><a href="/">DSA Estratégico - Cloud</a></li>
            <li class={currentRoute == "/" ? "uk-active" : ""}>
                <Link to="/">Ticket</Link>
            </li>
            <li class={currentRoute == "/log" ? "uk-active" : ""}>
                <Link to="/log">Log</Link>
            </li>
            <!-- svelte-ignore a11y-missing-attribute -->
            <li class="uk-margin-auto-left">
                <a on:click={handleDarkMode}
                    >{darkMode ? "Light mode" : "Dark Mode"}</a
                >
            </li>
        </ul>
    </div>
</nav>
