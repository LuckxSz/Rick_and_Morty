## Componente Header

O componente Header representa a seção superior da interface da aplicação. Normalmente contém elementos de marca, links de navegação ou controles para o usuário.

### Responsabilidades:

1. **Gerenciamento de Estado**:

   - Gerencia o estado local `openModal` usando o hook `useState` para controlar a visibilidade de uma janela modal.

2. **Função de Alternar Modal**:

   - Implementa a função `toggleModal` para alternar o estado `openModal` entre `true` e `false`.

3. **Renderização Visual**:

   - Renderiza uma barra de cabeçalho com um fundo cinza (`bg-gray-100`) e texto preto (`text-black`).
   - Tem uma altura fixa de 16 pixels (`h-16`) e uma sombra (`shadow-lg`) para profundidade.
   - Contém dois elementos: - **Logotipo e Título**: - Um contêiner flexível (`flex`) que agrupa a imagem do logotipo "Rick and Morty" e o título "Rick and Morty API". - O logotipo

   ## Componente Main

   O componente Main é responsável por exibir a parte principal da interface da aplicação. Ele exibe uma grade de personagens da série "Rick and Morty" obtidos da API, permitindo a navegação entre páginas e exibindo detalhes de um personagem quando selecionado.

### Responsabilidades:

1. **Gerenciamento de Estado:**

Utiliza o hook `useState` para gerenciar os estados locais page e `selectedCharacter`.
`page`: Armazena o número da página atual dos personagens.
`selectedCharacter`: Armazena o personagem selecionado para exibir detalhes.
Requisição à API:

Utiliza o hook customizado `useFetchApi` para buscar dados da API do Rick and Morty, passando o número da página `atual` (page) como parâmetro.
results: `data`, `info`, e `loading` são desestruturados do retorno do hook para acessar os resultados da requisição, informações adicionais e o estado de carregamento.

2. **Manipulação de Eventos:**

`handleClick`: Define a função para lidar com o clique em um personagem, atualizando o estado `selectedCharacter`.
`handleNextPage` e `handlePreviousPage`: Funções para lidar com a navegação entre páginas. Elas atualizam o estado page com o número da próxima ou anterior página, respectivamente, se disponível.

3. **Renderização Visual:**

Renderiza uma grade de personagens em uma estrutura de colunas responsiva (`grid`), onde o número de colunas varia de acordo com o tamanho da tela.
Cada personagem é representado por um card `(div com classe bg-white) `que exibe o nome e a imagem do personagem.
Quando um personagem é clicado, um modal é `exibido` com detalhes do personagem, incluindo `nome`, `imagem`, `status`, `espécie` e `gênero`.
Além disso, botões de navegação são exibidos para permitir a mudança de página, sendo `desabilitados` quando não há página anterior ou próxima disponível.

4. **Conclusão**
   O componente Main é crucial para a experiência do usuário ao visualizar e interagir com a lista de personagens da série "Rick and Morty". Ele facilita a navegação entre páginas, exibe detalhes dos personagens e proporciona uma experiência de usuário fluida e envolvente.

## Hook useFetchApi

Este hook é uma função customizada do React que facilita a requisição de dados de uma API. Ele gerencia o estado de carregamento, `sucesso` e `erro` da requisição.

1. **Hook useFetchAPi**:

Utiliza o hook useState para criar o estado `data`, que armazena os resultados da requisição, informações adicionais (como `paginação`), `estado de carregamento` e qualquer `erro` que possa ocorrer.
O estado inicial de data é um objeto com results `vazio`, info `vazio`, loading como `true` e error como `null`.
{ const [data, setData] = useState({ results: [], info: {}, loading: true, error: null })}

2. **Efeito Colateral (useEffect):**
   Utiliza o hook `useEffect` para fazer a requisição à API quando o endpoint fornecido como parâmetro mudar.
   Quando o `endpoint` muda, o estado loading é definido como `true`, indicando que a requisição está em `andamento`.
   Faz uma requisição GET para o endpoint usando a instância do Axios configurada anteriormente.
   Se a requisição for `bem-sucedida`, atualiza o estado `data` com os `resultados` da requisição, `informações adicionais `e define loading como `false`.
   Se a requisição falhar, atualiza o estado data com o `erro` e define loading como `false`.
   Retorno:

Retorna o estado data, que contém os resultados da requisição, informações adicionais, estado de carregamento e qualquer `erro` que tenha `ocorrido`.
