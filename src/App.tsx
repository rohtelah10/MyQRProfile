import styled, { createGlobalStyle } from 'styled-components';
import QRImage from './assets/image-qr-code.png';
import QRComponent from './components/QRComponent';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
`;

const App = () => {
  
  return (
    <>
      <GlobalStyle/>
      <Main>
        <QRComponent image={QRImage} title={"Improve your frontend skills by building projects"} description={"Scan the QR code to visit Frontend Mentor and take your coding skills to next level"}/>
      </Main>
    </>
  )
}

export default App;



const Main = styled.div`
  background: hsl(212, 45%, 89%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;