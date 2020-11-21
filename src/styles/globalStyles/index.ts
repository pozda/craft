import {createGlobalStyle} from 'styled-components'
import styles from 'styles/values'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap&subset=latin-ext');
  body {
    font-family: ${styles.font.PRIMARY};
    margin: 0;
    color: ${styles.color.shade.DARK};
    background-color: ${styles.color.shade.WHITEY};
  }
  * {
    box-sizing: border-box;
  }
`

export default GlobalStyles