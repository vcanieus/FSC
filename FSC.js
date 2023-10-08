// Bibliotecas necessárias
const readline = require('readline');

// Função para coletar métricas do usuário
async function coletarMetricas() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const metricas = {};

  console.log('Por favor, forneça os seguintes dados:');

  // Tabela de métricas de referência
  const metricasReferencia = {
    'Tamanho da Rede (N)': ['Pequena escala', 'Escala média', 'Grande escala'],
    'Probabilidade de Conexão (p)': ['Baixa conectividade', 'Média conectividade', 'Alta conectividade'],
    'Atraso da Rede': ['Baixo atraso', 'Médio atraso', 'Alto atraso'],
    'Taxa de Nós Maliciosos (Byzantine Ratio)': ['Baixa taxa de nós maliciosos', 'Média taxa de nós maliciosos', 'Alta taxa de nós maliciosos'],
    'Segurança do Protocolo PoA (segurança nível ϵ)': ['Baixa segurança', 'Média segurança', 'Alta segurança'],
    'Tamanho do Comitê (C)': ['Pequeno comitê', 'Comitê médio', 'Grande comitê'],
    'Tamanho das Endossos (d)': ['Baixo número de endossos', 'Médio número de endossos', 'Alto número de endossos'],
    'Tamanho do Bloco (Bsize)': ['Pequeno bloco', 'Bloco médio', 'Grande bloco'],
    'Número de Rodadas de Votos (R)': ['Poucas rodadas de votos', 'Médio número de rodadas', 'Muitas rodadas de votos'],
    'Número de Blocos de Confirmação (K)': ['Poucos blocos de confirmação', 'Médio número de blocos de confirmação', 'Muitos blocos de confirmação'],
    'Taxa de Transação': ['Baixa taxa de transação', 'Taxa de transação média', 'Alta taxa de transação'],
  };

  // Coleta de métricas
  for (const metrica in metricasReferencia) {
    console.log(`Escolha o valor para ${metrica}:`);
    metricas[metrica] = await escolherOpcao(metricasReferencia[metrica], rl);
  }

  // Feche a interface de leitura
  rl.close();

  // Agora você tem todas as métricas coletadas em 'metricas'
  // Você pode processar essas métricas de acordo com sua lógica de seleção de algoritmos.

  console.log('Métricas coletadas:');
  console.log(metricas);
}

// Função para escolher uma opção
async function escolherOpcao(opcoes, rl) {
  return new Promise((resolve) => {
    opcoes.forEach((opcao, index) => {
      console.log(`${index + 1}: ${opcao}`);
    });

    rl.question(`Escolha uma opção (1-${opcoes.length}): `, (resposta) => {
      const escolha = parseInt(resposta);

      if (escolha >= 1 && escolha <= opcoes.length) {
        resolve(opcoes[escolha - 1]);
      } else {
        console.log('Opção inválida. Tente novamente.');
        resolve(escolherOpcao(opcoes, rl));
      }
    });
  });
}

// Chame a função para coletar métricas
coletarMetricas();
