<script lang="ts">
    import type { Ticket } from "../model/Ticket";
    import { TicketSchema } from "../model/Ticket";

    export let darkMode = true;

    let errors: any = {};
    let ticket: Ticket = {
        name: "",
        lastname: "",
        email: "",
        departament: "",
        registrationCode: null,
        description: "",
    };

    const onSubmit = async () => {
        try {
            await TicketSchema.validate(ticket, { abortEarly: false });
            alert(JSON.stringify(ticket, null, 2));
            errors = {};
        } catch (err) {
            errors = err.inner.reduce((acc, err) => {
                return { ...acc, [err.path]: err.message };
            }, {});
        }

        console.log(ticket);
    };
</script>

<div class="uk-card uk-card-body {darkMode ? 'uk-card-secondary' : 'uk-card-default'}">
    <form class="uk-form-stacked" on:submit|preventDefault={onSubmit}>
        <legend class="uk-legend">Registrar Ticket</legend>

        <div class="uk-margin uk-flex">
            <div class="uk-width-1-2">
                <label for="name" class="uk-form-label">Nome</label>
                <div class="uk-form-controls">
                    <input
                        type="text"
                        class="uk-input {errors.name ? 'uk-form-danger' : ''}"
                        id="name"
                        placeholder="João"
                        bind:value={ticket.name}
                    />
                </div>
                {#if errors.name}
                    <span class="uk-text-danger">{errors.name}</span>
                {/if}
            </div>

            <div class="uk-margin-left uk-width-1-2">
                <label for="lastname" class="uk-form-label">Sobrenome</label>
                <div class="uk-form-controls">
                    <input
                        type="text"
                        class="uk-input {errors.lastname
                            ? 'uk-form-danger'
                            : ''}"
                        id="lastname"
                        placeholder="Almeida"
                        bind:value={ticket.lastname}
                    />
                </div>
                {#if errors.lastname}
                    <span class="uk-text-danger">{errors.lastname}</span>
                {/if}
            </div>
        </div>

        <div class="uk-margin uk-flex">
            <div class="uk-width-1-3">
                <label for="email" class="uk-form-label">Email</label>
                <div class="uk-form-controls">
                    <input
                        type="text"
                        class="uk-input {errors.email ? 'uk-form-danger' : ''}"
                        id="email"
                        placeholder="joao.almeida@email.com"
                        bind:value={ticket.email}
                    />
                </div>
                {#if errors.email}
                    <span class="uk-text-danger">{errors.email}</span>
                {/if}
            </div>

            <div class="uk-margin-left uk-width-1-3">
                <label for="departament" class="uk-form-label"
                    >Departamento</label
                >
                <div class="uk-form-controls">
                    <input
                        type="text"
                        class="uk-input {errors.departament
                            ? 'uk-form-danger'
                            : ''}"
                        id="departament"
                        placeholder="DSX"
                        bind:value={ticket.departament}
                    />
                </div>
                {#if errors.departament}
                    <span class="uk-text-danger">{errors.departament}</span>
                {/if}
            </div>

            <div class="uk-margin-left uk-width-1-3">
                <label for="registrationCode" class="uk-form-label">ID</label>
                <div class="uk-form-controls">
                    <input
                        type="number"
                        class="uk-input {errors.registrationCode ? 'uk-form-danger' : ''}"
                        id="registrationCode"
                        placeholder="1234"
                        bind:value={ticket.registrationCode}
                    />
                </div>
                {#if errors.registrationCode}
                    <span class="uk-text-danger">{errors.registrationCode}</span>
                {/if}
            </div>
        </div>

        <div class="uk-margin">
            <div class="uk-margin">
                <label for="description" class="uk-form-label">Descrição</label>
                <div class="uk-form-controls">
                    <textarea
                        class="uk-textarea {errors.description
                            ? 'uk-form-danger'
                            : ''}"
                        rows="5"
                        id="description"
                        bind:value={ticket.description}
                    />
                </div>
                {#if errors.description}
                    <span class="uk-text-danger">{errors.description}</span>
                {/if}
            </div>
        </div>

        <div class="uk-margin uk-flex uk-flex-right">
            <button type="submit" class="uk-button uk-button-primary"
                >Enviar</button
            >
        </div>
    </form>
</div>
