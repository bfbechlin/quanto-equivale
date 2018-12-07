import format from 'string-format';
import currencyFormatter from 'currency-formatter';

const options = [
  {
    id: 'hospital',
    label: 'Hospitais',
    description: 'Gasto com hospitais testando as coisas tudo testeszan do adads mesas asdjia adsadsds.',
    link: '',
    message: 'Com {amount} é possível sustentar {quantity} {subject} pelo período de {period}.',
    subject: {
      single: 'hospital',
      multi: 'hospitais',
    },
    monthlyCost: 100000,
    img: 'assets/hospital.jpg',
  },
  {
    id: 'escola',
    label: 'Escolas',
    description: 'Gasto com escolas testeszan do adads mesas asdjia adsadsds asd  asdiasdas asd asdadssda.',
    link: '',
    message: 'Com {amount} é possível sustentar {quantity} {subject} pelo período de {period}.',
    subject: {
      single: 'escola',
      multi: 'escolas',
    },
    monthlyCost: 50000,
    img: 'assets/escola.jpg',
  },
];

const outputCost = (amount, monthlyCost) => {
  const quantity = Math.ceil(amount / (5 * 12 * monthlyCost));
  const period = Math.floor(amount / (quantity * monthlyCost));
  const years = Math.floor(period / 12);
  const months = period - years * 12;
  return {
    quantity,
    period: {
      years,
      months,
    },
  };
};

export const outputMessage = (amount, searchOption) => {
  const { quantity, period } = outputCost(amount, searchOption.monthlyCost);
  const { years, months } = period;
  return format(searchOption.message, {
    amount: currencyFormatter.format(amount, { locale: 'pt-BR' }),
    quantity,
    subject: (quantity === 1 ? searchOption.subject.single : searchOption.subject.multi),
    period: [
      `${years > 0 ? (years === 1 ? '1 ano' : `${years} anos`) : ''}`,
      `${months > 0 ? (months === 1 ? '1 mês' : `${months} meses`) : ''}`,
    ].filter(Boolean).join(' e ') || '0 meses',
  });
};

export default options;
