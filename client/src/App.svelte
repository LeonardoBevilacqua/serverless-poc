<script lang="ts">
	import { Router, Route } from "svelte-navigator";
	import Footer from "./components/ui/Footer.svelte";
	import Navbar from "./components/ui/Navbar.svelte";
	import Loading from "./components/ui/Loading.svelte";
	import Ticket from "./pages/Ticket/Ticket.svelte";
	import Log from "./pages/Log/Log.svelte";

	let darkMode = true;
	let isLoading = false;

	document.body.style.backgroundColor = darkMode ? "#111" : "#fff";

	const setDarkMode = (e: { detail: boolean }) => {
		darkMode = e.detail;
		document.body.style.backgroundColor = darkMode ? "#111" : "#fff";
	};

	const setLoading = (e: { detail: boolean }) => (isLoading = e.detail);
</script>

<Router>
	{#if isLoading}
		<Loading />
	{/if}
	<Navbar {darkMode} on:set-dark-mode={setDarkMode} />
	<Route path="/">
		<Ticket {darkMode} on:set-loading={setLoading} />
	</Route>
	<Route path="/log">
		<Log {darkMode} />
	</Route>
	<Footer {darkMode} />
</Router>

<style>
	:global(body) {
		background-color: #111;
		min-height: 100vh;
		transition: 0.2s ease-in-out;
		transition-property: color, background-color, border;
		display: flex;
		flex-direction: column;
	}
</style>
