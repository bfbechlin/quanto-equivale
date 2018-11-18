const options = [
  { id: 123, label: 'Hospitais' },
  { id: 124, label: 'Escolas' },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));

export default options;
