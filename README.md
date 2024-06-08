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
