<script lang="ts">
	import AddTicketForm from "./components/AddTicketForm.svelte";
	import TicketsTable from "./components/TicketsTable.svelte";
	import Footer from "./components/ui/Footer.svelte";
	import Navbar from "./components/ui/Navbar.svelte";
	import Loading from "./components/ui/Loading.svelte";

	let darkMode = true;
	let isLoading = false;

	document.body.style.backgroundColor = darkMode ? "#111" : "#fff";

	const setDarkMode = (e: { detail: boolean }) => {
		darkMode = e.detail;
		document.body.style.backgroundColor = darkMode ? "#111" : "#fff";
	};

	const setLoading = (e: { detail: boolean }) => (isLoading = e.detail);
</script>

{#if isLoading}
	<Loading />
{/if}
<Navbar {darkMode} on:set-dark-mode={setDarkMode} />
<main
	class="uk-container uk-padding-small uk-width-expand {darkMode
		? 'uk-light'
		: 'uk-dark'}"
>
	<ul uk-accordion>
		<li>
			<!-- svelte-ignore a11y-missing-attribute -->
			<a class="uk-accordion-title">Novo Ticket</a>
			<div class="uk-accordion-content">
				<AddTicketForm {darkMode} on:set-loading={setLoading} />
			</div>
		</li>
	</ul>

	<hr />

	<TicketsTable {darkMode} on:set-loading={setLoading} />
</main>
<Footer {darkMode} />

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
