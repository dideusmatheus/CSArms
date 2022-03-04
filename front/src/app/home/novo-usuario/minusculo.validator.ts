import { AbstractControl } from '@angular/forms';

// 31A- criando a condição customizada, depois volte para o novo-usuario.componente.ts para usar a condição
export function minusculoValidator(control: AbstractControl) {

    const valor = control.value as string;
    if (valor !== valor.toLowerCase()) {
        return { minusculo: true }
    } else {
        return null;
    }

};