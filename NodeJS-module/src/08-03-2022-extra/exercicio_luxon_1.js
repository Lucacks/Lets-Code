const { DateTime } = require('luxon');
const hoje = DateTime.now();

/**
 * Criar e imprimir o dia de ontem.
 */

const ontem = (hoje.plus({day: -1}));

console.log(`Ontem foi dia ${ontem.setLocale('pt-BR').toLocaleString(DateTime.DATE_SHORT)}\n\n`);