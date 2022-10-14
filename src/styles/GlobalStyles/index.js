import { createGlobalStyle } from 'styled-components';
import BgImage from '../../assets/BgImage.png';

export default createGlobalStyle`
    :root {
        --dark-bg-color: #252B42;
        --light-bg-color: #ffffff;

        --light-text-color: #ffffff;
        --gray-text-color: #737373;
        --secundary-color: #295C7A;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        min-height: 100vh;
        font-family: 'Martel', serif;
    }

    a, a:hover {
        color: inherit;
    }

    .light-text-color {
        color: var(--light-text-color)
    }

    .secundary-color {
        color: var(--secundary-color);
    }

    .bg-banner-img {
        background-image: url(${BgImage}) ;
    }

    .dark-bg-color {
        background-color: var(--dark-bg-color);
    }

    .light-bg-color {
        background-color: var(--light-bg-color);
    }

    .gray-text-color {
        color: var(--gray-text-color);
    }

    .bg-gold {
        background-color: #D0A144;
    }

    .bg-secundary-color {
        background-color: var(--secundary-color);
    }

    .sm-container {
        max-width: 61rem;
    }

    .mb-6 { margin-bottom: 5rem; }
    .mb-7 { margin-bottom: 6.7rem; }
    .mb-8 { margin-bottom: 9rem; }
    .mb-9 { margin-bottom: 12.5rem; }


    .mt-6 { margin-top: 5rem; }
    .mt-7 { margin-top: 6.7rem; }
    .mt-8 { margin-top: 9rem; }
    .mt-9 { margin-top: 12.5rem; }

    #agentV {
        width: 32rem;
    }

    @media (max-width: 575px){
        .img-sm-size {
            margin-top: 3rem;
            max-width: 19rem;
        }

        .m-mobile {
            margin-left: 1rem;
            margin-right: 1rem;
        }
    }
`;
