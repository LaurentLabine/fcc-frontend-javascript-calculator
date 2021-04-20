import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`

@font-face {
  font-family: 'Digital';
  src: url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.eot');
  src: url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.eot?#iefix')
      format('embedded-opentype'),
    url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.woff2')
      format('woff2'),
    url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.woff')
      format('woff'),
    url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.ttf')
      format('truetype'),
    url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.svg#Digital-7')
      format('svg');
}

    #root {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    font-family: 'digital';
    }

    html {
        margin: 0;
        padding:0;
    }

    body {
        background-position: center;
        background-image: url("https://user-images.githubusercontent.com/20836468/115396602-7526ec80-a1e5-11eb-83b6-19ce0920105b.jpg");
        background-position: center;
    }

    #calculator {
        display: flex;
        position: absolute;
        padding: 10px;
        background-color: black;
        width: 40vw;
        border-radius: 5px;
        border: 2px solid white;
        text-align: center;
        background-size: 100%;
        background-position: center;
    }

    #outerDisplay {
        min-height: 62px;
        width: 40vw;
        grid-column : 1/5;
        background-color: white;
        color: green;
        overflow-wrap: break-word;
        word-wrap: break-word;
    }
    .display-grid-item {
        display: block;
        text-align: center;
        vertical-align: center;
    }

    #uppderDisplay{
        min-height: 20px;
        font-family: digital;
        font-size: 20px;
        color: orange;
        text-align: right;
        vertical-align: text-top;
        line-height: 20px;
        overflow-wrap: break-word;
        word-wrap: break-word;
    } 

    #display{
    color: light-green;
    } 


    #outer {
        display: grid;
        grid-template-columns: auto auto auto auto;
        ${'' /* grid-gap: 10px; */}
        position: relative;
        left:0;
        right:0;
        width:100%;
        background-image: url("https://user-images.githubusercontent.com/20836468/115257250-2ec38600-a130-11eb-8964-ce296652a0b1.jpg");
    }

    .grid-item {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.8);
        height: 100%;
        font-size: 30px;
        text-align: center;
        vertical-align: center;
    }



    #clear {
        grid-column: 1 / 3;
    }

    #equals {
        grid-row: 5/7;
        grid-column: 4;
    }

    #zero {
        grid-row: 6/7;
        grid-column: 1/3;
    }
    `;
