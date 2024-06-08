# Rick and Morty API Interface

![Rick and Morty Logo](/home/xkl/Pictures/Screenshots/Screenshot from 2024-06-08 12-44-48.png)

Este projeto é uma interface de usuário para visualizar personagens da série "Rick and Morty" usando a API pública fornecida pelo site [Rick and Morty API](https://rickandmortyapi.com/).

## Conteúdo

1. [Visão Geral](#visão-geral)
2. [Componente Header](#componente-header)
3. [Componente Main](#componente-main)
4. [Hook useFetchApi](#hook-usefetchapi)
5. [Instalação e Uso](#instalação-e-uso)
6. [Contribuição](#contribuição)
7. [Licença](#licença)

## Visão Geral

Este projeto consiste em uma aplicação React que consome a API do Rick and Morty para exibir uma lista de personagens. Ele inclui um componente de cabeçalho (`Header`) para navegação e um componente principal (`Main`) para exibir os personagens e permitir a navegação entre páginas.

## Componente Header

O componente `Header` representa a seção superior da interface da aplicação. Ele contém elementos de marca, como o logotipo "Rick and Morty", e fornece controle para abrir e fechar um modal de informações adicionais.

### Responsabilidades:

1. **Gerenciamento de Estado**:

   - Gerencia o estado local `openModal` usando o hook `useState` para controlar a visibilidade do modal.

2. **Função de Alternar Modal**:

   - Implementa a função `toggleModal` para alternar o estado `openModal` entre `true` e `false`.

3. **Renderização Visual**:
   - Renderiza uma barra de cabeçalho com uma cor de fundo cinza e texto preto.
   - Inclui o logotipo "Rick and Morty" e o título "Rick and Morty API".

## Componente Main

O componente `Main` é responsável por exibir a parte principal da interface da aplicação. Ele mostra uma grade de personagens da série "Rick and Morty", permitindo a navegação entre páginas e exibindo detalhes de um personagem quando selecionado.

### Responsabilidades:

1. **Gerenciamento de Estado**:

   - Utiliza o hook `useState` para gerenciar os estados locais `page` e `selectedCharacter`.
   - `page`: Armazena o número da página atual dos personagens.
   - `selectedCharacter`: Armazena o personagem selecionado para exibir detalhes.

2. **Requisição à API**:

   - Utiliza o hook customizado `useFetchApi` para buscar dados da API do Rick and Morty.

3. **Manipulação de Eventos**:

   - Define funções para lidar com a navegação entre páginas e o clique em um personagem.

4. **Renderização Visual**:
   - Exibe uma grade de personagens em uma estrutura de colunas responsiva.
   - Mostra detalhes do personagem em um modal quando selecionado.

## Hook useFetchApi

Este hook é uma função customizada do React que facilita a requisição de dados da API do Rick and Morty. Ele gerencia o estado de carregamento, sucesso e erro da requisição.

### Responsabilidades:

1. **Gerenciamento de Estado**:

   - Utiliza o hook `useState` para criar o estado `data`, que armazena os resultados da requisição, informações adicionais, estado de carregamento e qualquer erro que possa ocorrer.

2. **Efeito Colateral (useEffect)**:

   - Utiliza o hook `useEffect` para fazer a requisição à API quando o `endpoint` fornecido como parâmetro mudar.

3. **Retorno**:
   - Retorna o estado `data`, que contém os resultados da requisição, informações adicionais, estado de carregamento e qualquer erro que tenha ocorrido.

## Instalação e Uso

1. Clone este repositório.
2. Instale as dependências usando `npm install` ou `yarn install`.
3. Inicie o servidor de desenvolvimento com `npm start` ou `yarn start`.

## Contribuição

Contribuições são bem-vindas! Abra uma issue ou envie um pull request para propor melhorias ou correções.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
