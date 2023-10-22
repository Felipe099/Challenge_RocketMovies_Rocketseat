import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};;

  -webkit-font-smoothing: antialiased;
}

body, buttpn, input, textarea {
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
  outline: none
}

a{
  text-decoration: none;
}

button {
  cursor: pointer;
  transition: filter .2s;
}

button:hover{
  filter: brightness(0.9);
}

  *::-webkit-scrollbar {
        width: 8px;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.ROSA};
        border-radius: 8px;
    }
`;
