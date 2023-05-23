import PaintingList from "../componentsStyles/paintingList/PaintingList";
import Section from "../componentsStyles/section/Section";
import paintings from "../../paintings.json";

function CollectionsRender(){
return (
<>

<div className='container'>



<Section title="weeks top">
  <PaintingList items={paintings} />
</Section>
<hr />

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

</>
);
};

export default CollectionsRender;