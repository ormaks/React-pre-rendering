import { createGlobalStyle } from "styled-components";
import OptimaFontBoldttf from '../assets/fonts/optima/Optima Medium.ttf';
import OptimaFontNormalttf from '../assets/fonts/optima/OPTIMA.ttf';
import OptimaFontBoldwoff from '../assets/fonts/optima-webfont/Optima Medium.woff';
import OptimaFontNormalwoff from '../assets/fonts/optima-webfont/OPTIMA.woff';
import OptimaFontLightttf from '../assets/fonts/optima/OptimaNovaLTProLight.ttf';
import OptimaFontLightotf from '../assets/fonts/optima/OptimaNovaLTProLight.otf';
import OptimaFontLightwoff from '../assets/fonts/optima/OptimaNovaLTProLight.woff';
import OptimaFontLightwoff2 from '../assets/fonts/optima/OptimaNovaLTProLight.woff2';

export const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Optima', sans-serif;
    margin: 0;
    padding: 0;
    background: white;
    overflow-x: hidden;
  }
  
  @font-face {
        font-family: 'Optima';
        src: 
        url(${ OptimaFontLightttf }) format('ttf'),
        url(${ OptimaFontLightotf }) format('otf'),
        url(${ OptimaFontLightwoff }) format('woff'),
        url(${ OptimaFontLightwoff2 }) format('woff2');
        font-weight: 100;
        font-style: normal;
    }
  @font-face {
        font-family: 'Optima';
        src: 
        url(${ OptimaFontNormalttf }) format('ttf'),
        url(${ OptimaFontNormalwoff }) format('woff');
        font-weight: normal;
        font-style: normal;
    }
  @font-face {
        font-family: 'Optima';
        src: 
        url(${ OptimaFontBoldttf }) format('ttf'),
        url(${ OptimaFontBoldwoff }) format('woff');
        font-weight: bold;
        font-style: normal;
    }
`;
export const size = {
	mobileS: '359.98px',
	mobile: '575.98px',
	tabletS: '767.98px',
	tablet: '991.98px',
	laptop: '1199.98px',
	desktop: '1681px'
};
