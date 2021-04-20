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

@font-face {
    font-family: "Cool"; 
    src: url("//db.onlinewebfonts.com/t/df7addca2738b1d78171b7257e3b4ab9.eot"); 
    src: url("//db.onlinewebfonts.com/t/df7addca2738b1d78171b7257e3b4ab9.eot?#iefix") 
        format("embedded-opentype"), 
        url("//db.onlinewebfonts.com/t/df7addca2738b1d78171b7257e3b4ab9.woff2") 
        format("woff2"), url("//db.onlinewebfonts.com/t/df7addca2738b1d78171b7257e3b4ab9.woff") 
        format("woff"), 
        url("//db.onlinewebfonts.com/t/df7addca2738b1d78171b7257e3b4ab9.ttf") 
        format("truetype"), 
        url("//db.onlinewebfonts.com/t/df7addca2738b1d78171b7257e3b4ab9.svg#Cool") 
        format("svg"); 
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
        padding: 10px;
        ${'' /* background-color: rgba(250,240,230, 0.8); */}
        background-color: rgba(105,105,105, 0.8);
        width: 420px;
        ${'' /* min-height: 400px; */}
        border-radius: 5px;
        ${'' /* border: 2px solid white; */}
    }

    #outer {
        position: relative;
        display: grid;
        grid-gap: 10px;
        width:100%;
    }

    #outerDisplay {
        display: inline-block;
        max-width: 420px;
        grid-column : 1/5;
        background-color: white;
        overflow-wrap: break-word;
        word-wrap: break-word;
        text-align: right;
    }

    #upperDisplay{
        min-height: 30px;
        font-family: digital;
        font-size: 30px;
        color: orange;
    }

    #display {
        min-height: 50px;
    }

    .display-grid-item{
        font-size: 50px;
        overflow-wrap: break-word;
        word-wrap: break-word;
    } 

    .grid-item {
        background-color: rgba(255, 255, 255, 0.5);
        border: 1px solid rgba(0, 0, 0, 0.8);
        font-size: 30px;
        text-align: center;
        vertical-align: center;
        min-height: 80px;
        font-family: cool;
    }

    #clear {
        grid-column: 1 / 3;
        background-color: rgba(196,2,51, 0.8);
    }

    #equals {
        grid-row: 5/7 !important;
        grid-column: 4;
        background-color: rgba(127,255,0, 0.8)
    }

    #decimal {
        background-color: rgba(238,255,27, 0.8);
    }

    #zero {
        grid-row: 6/7;
        grid-column: 1/3;
    }
    `;
