import PaintingList from "./components/componentsStyles/paintingList/PaintingList";
import Section from "./components/componentsStyles/section/Section";
import paintings from "./paintings.json";
import InlineOne from "./components/componentsStyles/inlineStyleOne/InlineOne";
import InlineTwo from './components/componentsStyles/inlineStyleTwo/InlineTwo';
import InlineStyleThree from './components/componentsStyles/inlineStyleThree/InlineStyleThree';
import InlineStyleFour from './components/componentsStyles/inlineStyleFour/InlineStyleFour';
import VanilaCSS from './components/componentsStyles/vanilaCSS/VanilaCSS';
import TestCLSX from './components/componentsStyles/testCLSX/TestCLSX';
import { Alert } from './components/componentsStyles/moduleCSSCLSX/ModuleCssClsx';

import Components from './Components';

// import GetPrice from './components/scrapping/scrap'
// import css from './App.module.css';

export default function App() {
  return (
    <div>
      <>
        <Components />
      </>

      {/* <div>
        <GetPrice/>
      </div> */}

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

      <Section title="weeks top">
        <PaintingList items={paintings} />
      </Section>

      <Section title="best">
        <PaintingList items={paintings} />
      </Section>

      {/* // ========== рендер коллекции  ========================     */}

      {/* {[1, 2, 3, 4, 5].map(el => (
        <div>{el}</div>
      ))} */}

      {/* {paintings.map(painting => <Painting
        key={painting.id}   // уникальній индекс, нужен для реакт
        imageUrl={painting.url}
        title={painting.title}
        authorName={painting.author.tag}
        profileUrl={painting.author.url}
        price={painting.price}
        quantity={painting.quantity}
      />)} */}

      {/* // ============ рендер по условию ===================== */}

      {/* {isOnline && 'Online'}
      {isOnline ? 'Online' : 'Offline'} */}
      {/* // =====================================================       */}

      {/* <Painting
        // imageUrl={paintings[0].url}
        title={paintings[0].title}
        authorName={paintings[0].author.tag}
        profileUrl={paintings[0].author.url}
        price={paintings[0].price}
        quantity={paintings[0].quantity}
      />

      <Painting
        imageUrl={paintings[1].url}
        title={paintings[1].title}
        authorName={paintings[1].author.tag}
        profileUrl={paintings[1].author.url}
        price={paintings[1].price}
        quantity={paintings[1].quantity}
      />

      <Painting
        imageUrl={paintings[2].url}
        title={paintings[2].title}
        authorName={paintings[2].author.tag}
        profileUrl={paintings[2].author.url}
        price={paintings[2].price}
        quantity={paintings[2].quantity}
      /> */}
    </div>
  );
}
