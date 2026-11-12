// Demonstração independente. Todos os dados abaixo são fictícios.
function montarPrompt({ objetivo, publico, restricoes, formato }) {
  return [
    `Objetivo: ${objetivo}`,
    `Público: ${publico}`,
    `Restrições: ${restricoes}`,
    `Formato da resposta: ${formato}`,
  ].join('\n');
}

const exemplo = {
  objetivo: 'Organizar as tarefas da semana em blocos de tempo.',
  publico: 'Uma pessoa que trabalha e estuda.',
  restricoes: 'Considere cinco dias úteis e até duas prioridades por dia.',
  formato: 'Uma tabela com dia, prioridade e tempo estimado.',
};

console.log(montarPrompt(exemplo));
