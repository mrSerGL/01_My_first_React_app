import React, { Component } from 'react';
import './ColorPicker.css';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class ColorPicker extends Component {
  state = {
    activeOptionInd: 0,
  };

  setActiveIndex = index => {
    this.setState({ activeOptionInd: index });
  };

  render() {

  
    const activeOptionLabel = colorPickerOptions[this.state.activeOptionInd];
    // console.log(activeOptionLabel);

    return (
      <div className="ColorPicker">
        {/* <h2 className="ColotPicker__title">Color Picker</h2> */}
        <p>Choosed color: {activeOptionLabel.label}</p>
        <div>
          {colorPickerOptions.map(({ label, color }, index) => {
            const optionClasses = ['ColorPicker__option'];

            if (index === this.state.activeOptionInd) {
              optionClasses.push('ColorPicker__option--active');
            }

            return (
              <button
                key={label}
                className={optionClasses.join(' ')}
                style={{ backgroundColor: color }}
                onClick={() => this.setActiveIndex(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}
export default ColorPicker;
