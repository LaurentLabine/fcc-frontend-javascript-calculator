import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
    #root {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    font-family: "Roboto";
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
        ${'' /* height: 20rem; */}
        width: 30vw;
        border-radius: 5px;
        border: 2px solid white;
        text-align: center;
        background-image: url("https://user-images.githubusercontent.com/20836468/115257250-2ec38600-a130-11eb-8964-ce296652a0b1.jpg");
        background-size: 100%;
        background-position: center;
    }

    #outerDisplay {
        width: 30vw;
        grid-column : 1/5;
        font-family: 'Bubblegum Sans', cursive;
        background-color: #1D16A0;
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
    font-size: 32px !important;
    } 


    #outer {
        display: grid;
        grid-template-columns: auto auto auto auto;
        ${'' /* grid-gap: 10px; */}
        position: relative;
        left:0;
        right:0;
        width:100%;
        ${'' /* height: 80%; */}
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
