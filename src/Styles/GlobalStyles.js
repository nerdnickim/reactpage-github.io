import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    ${reset}
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    *{
        box-sizing: border-box;
    }body{
        font-size:14px;
        font-family: 'Open Sans', sans-serif;
    }
    a{
        text-decoration: none;
    }
    input:focus{
        outline:none;
    }
`;
