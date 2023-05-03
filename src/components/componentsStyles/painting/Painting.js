import PropTypes from 'prop-types';
import defaultImage from '../../../images/default.jpg';

// export default function Painting(props) {
//   console.log('props:', props);

//   const { imageUrl, title, profileUrl, author = 'unknown', price, } = props;

//   return (
//     <div>
//       <img src={imageUrl} alt={title} width="480" />
//       <h2>{title} </h2>
//       <p>
//         Автор: <a href={profileUrl}>{author}</a>
//       </p>
//       <p>Цена: {price} кредитов</p>
//       <p>Доступность: заканчивается или есть в наличии</p>
//       <button type="button">Добавить в корзину</button>
//     </div>
//   );
// }

// //* аналог, стрелочная функция

const Painting = ({
  imageUrl = defaultImage,
  title,
  profileUrl,
  author = 'unknown',
  price,
  quantity,
}) => {

  
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title} </h2>
      <p>
        Автор: <a href={profileUrl}>{author}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии' }</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
};

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
