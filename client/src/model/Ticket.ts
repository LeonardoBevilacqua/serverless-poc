import * as yup from "yup";
import type { LocaleObject } from "yup/lib/locale";

export interface Ticket {
    name: string;
    lastname: string;
    email: string;
    departament: string;
    id: number;
    description: string;
}

const translation: LocaleObject = {
    mixed: {
        default: '${path} é inválido',
        required: '${path} é um campo obrigatório',
        oneOf: '${path} deve ser um dos seguintes valores: ${values}',
        notOneOf: '${path} não pode ser um dos seguintes valores: ${values}',
        notType: '${path} deve ser do tipo ${type}'

    },
    string: {
        length: '${path} deve ter exatamente ${length} caracteres',
        min: '${path} deve ter pelo menos ${min} caracteres',
        max: '${path} deve ter no máximo ${max} caracteres',
        email: '${path} tem o formato de e-mail inválido',
        url: '${path} deve ter um formato de URL válida',
        trim: '${path} não deve conter espaços no início ou no fim.',
        lowercase: '${path} deve estar em maiúsculo',
        uppercase: '${path} deve estar em minúsculo',
    },
    number: {
        min: '${path} deve ser no mínimo ${min}',
        max: '${path} deve ser no máximo ${max}',
        lessThan: '${path} deve ser menor que ${less}',
        moreThan: '${path} deve ser maior que ${more}',
        positive: '${path} deve ser um número positivo',
        negative: '${path} deve ser um número negativo',
        integer: '${path} deve ser um número inteiro',
    },
    date: {
        min: '${path} deve ser maior que a data ${min}',
        max: '${path} deve ser menor que a data ${max}',
    },
    array: {
        min: '${path} deve ter no mínimo ${min} itens',
        max: '${path} deve ter no máximo ${max} itens',
    },
}

yup.setLocale(translation)

export const TicketSchema: yup.SchemaOf<Ticket> = yup.object().shape({
    name: yup.string().required().label("Nome"),
    lastname: yup.string().required().label("Sobrenome"),
    email: yup.string().email().required().label("Email"),
    departament: yup.string().required().label("Departamento"),
    id: yup.number().required().label("ID").typeError("${path} deve ser do tipo numérico"),
    description: yup.string().required().label("Descrição"),
});


