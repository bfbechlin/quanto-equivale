import format from 'string-format';
import currencyFormatter from 'currency-formatter';

const options = [
  {
    id: 'saude',
    label: 'Saúde',
    description: 'Brasil gasta R$ 3,48 por dia com a saúde de cada habitante, diz Conselho Federal de Medicina (CFM).',
    link: 'http://agenciabrasil.ebc.com.br/saude/noticia/2018-11/brasil-gasta-r-348-por-dia-com-saude-de-cada-habitante-diz-cfm',
    message: 'Com {amount} é possível cobrir o investimento de {quantity} {subject} em saúde pelo período de {period}.',
    subject: {
      single: 'habitante',
      multi: 'habitantes',
    },
    monthlyCost: 3.48 * 30,
    img: 'assets/saude.jpg',
  },
  {
    id: 'alunos',
    label: 'Alunos',
    description: 'Segundo relatório de 2016 da OCDE (Organização para a Cooperação e Desenvolvimento Económico), gastamos anualmente aproximadamente R$ 17.000 (US$ 4.318,00) por estudante (desde o ensino fundamental até o superior).',
    link: 'https://www.politize.com.br/quanto-governo-investe-saude-educacao/',
    message: 'Com {amount} é possível sustentar a educação de {quantity} {subject} pelo período de {period}.',
    subject: {
      single: 'aluno',
      multi: 'alunos',
    },
    monthlyCost: 17000 / 12,
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
