const { DateTime } = require('luxon');
const hoje = DateTime.now();

/**
 * Imprimir, em alemão, o dia da semana da data 15 dias antes da véspera de natal de 1980.
 */

 const christmasEve = (
    DateTime.fromObject(
        { day: 24, month: 12, year: 1980 },
        { zone: 'Europe/Berlin' },
      )
  );
  
  const fifteenDays = (christmasEve.plus({day: -15}));

  console.log(
      `A véspera do Natal de 1980 foi ${christmasEve.toLocaleString({weekday: 'long'})};
      Duas semanas antes caiu em uma: ${fifteenDays.toLocaleString(DateTime.DATE_HUGE)};
      Oder auf deutsch: ${fifteenDays.setLocale('de-de').toLocaleString(DateTime.DATE_HUGE)}.`
  );