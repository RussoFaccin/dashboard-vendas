export default class DateUtils {
    static dayNames = {
      0: 'domingo',
      1: 'segunda',
      2: 'terça',
      3: 'quarta',
      4: 'quinta',
      5: 'sexta',
      6: 'sábado'
    };
    static monthNames = {
      0: 'janeiro',
      1: 'fevereiro',
      2: 'março',
      3: 'abril',
      4: 'maio',
      5: 'junho',
      6: 'julho',
      7: 'agosto',
      8: 'setembro',
      9: 'outubro',
      10: 'novembro',
      11: 'dezembro'
    };
    static getDayName(day = 0) {
      return this.dayNames[day];
    }
    static getMonthName(month = 0) {
      return this.monthNames[month];
    }
  }