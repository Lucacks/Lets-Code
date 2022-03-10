const { DateTime } = require('luxon');
const hoje = DateTime.now();

/**
 * Criar o dia 5 do mês de Julho deste ano às 15h usando o método fromObject.
 */

 const cincoJulho = (
    DateTime.fromObject(
        { day: 5, month: 7, year: 2022, hour: 15 },
        { zone: 'America/Sao_Paulo' },
      )
  );
  
  console.log(`${cincoJulho.setLocale('pt-BR').toLocaleString(DateTime.DATE_SHORT)}\n\n`);
  