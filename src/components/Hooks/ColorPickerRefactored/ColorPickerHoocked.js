import { useState } from 'react';
import css from './ColorPicker.module.css';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

function ColorPickerHoocked() {
  const [activeOptionInd, setActiveOptionInd] = useState(0);

  const makeOptionsClassName = index => {
    return index === activeOptionInd ? css.activeOption : css.option;
  };

  const { label } = colorPickerOptions[activeOptionInd];

  return (
    <div className={css.colorPicker}>
      <p>Choosed color: {label}</p>
      <div>
        {colorPickerOptions.map(({ label, color }, index) => {
          return (
            <button
              key={label}
              aria-label={label}
              className={makeOptionsClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => setActiveOptionInd(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default ColorPickerHoocked;
