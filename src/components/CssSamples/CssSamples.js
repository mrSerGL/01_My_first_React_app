import InlineOne from "../componentsStyles/inlineStyleOne/InlineOne";
import InlineTwo from '../componentsStyles/inlineStyleTwo/InlineTwo';
import InlineStyleThree from '../componentsStyles/inlineStyleThree/InlineStyleThree';
import InlineStyleFour from '../componentsStyles/inlineStyleFour/InlineStyleFour';
import VanilaCSS from '../componentsStyles/vanilaCSS/VanilaCSS';
import TestCLSX from '../componentsStyles/testCLSX/TestCLSX';
import { Alert } from '../componentsStyles/moduleCSSCLSX/ModuleCssClsx';


const CssSamples = () => {
    return (
      <>
      <p>===== 7. CSSmodule + CLSX library =====</p>

<div>
  <Alert variant="info">
    Would you like to browse our recommended products?
  </Alert>
  <Alert variant="error" outlined>
    There was an error during your last transaction
  </Alert>
  <Alert variant="success" elevated>
    Payment received, thank you for your purchase
  </Alert>
  <Alert variant="warning" outlined elevated>
    Please update your profile contact information
  </Alert>
</div>

<p>6. test CLSX library </p>
<div>
  <TestCLSX variant="info">
    Would you like to browse our recommended products?
  </TestCLSX>
  <TestCLSX variant="error" outlined>
    There was an error during your last transaction
  </TestCLSX>
  <TestCLSX variant="success" elevated>
    Payment received, thank you for your purchase
  </TestCLSX>
  <TestCLSX variant="warning" outlined elevated>
    Please update your profile contact information
  </TestCLSX>
</div>

<p>5. VanilaCSS </p>
<div>
  <VanilaCSS variant="info">
    Would you like to browse our recommended products?
  </VanilaCSS>
  <VanilaCSS variant="error" outlined>
    There was an error during your last transaction
  </VanilaCSS>
  <VanilaCSS variant="success" elevated>
    Payment received, thank you for your purchase
  </VanilaCSS>
  <VanilaCSS variant="warning" outlined elevated>
    Please update your profile contact information
  </VanilaCSS>
</div>

<p>
  4. так, щоб залежно від типу оповіщення, у компоненті Alert змінювався
  колір фону абзацу
</p>
<div>
  <InlineStyleFour variant="info">
    Would you like to browse our recommended products?
  </InlineStyleFour>
  <InlineStyleFour variant="error">
    There was an error during your last transaction
  </InlineStyleFour>
  <InlineStyleFour variant="success">
    Payment received, thank you for your purchase
  </InlineStyleFour>
  <InlineStyleFour variant="warning">
    Please update your profile contact information
  </InlineStyleFour>
</div>

<p>3. створимокомпонент для рендеру декількох повідомлень </p>
<div>
  <InlineStyleThree />
</div>

<p>2. Винесемо об'єкт стилів у змінну</p>
<div>
  <InlineTwo />
</div>

<p>
  1. Вбудовані стилі, атрибут style, який у React приймає не рядок, а
  об'єкт стилів.
</p>
<div>
  <InlineOne />
</div>
      </>
    )
};

export default CssSamples;