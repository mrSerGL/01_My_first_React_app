import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    nickName: '',
    experiense: 'junior',
    license: false,
  };

  handlerAllChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });

    // this.setState({
    //   [event.currentTarget.name]: event.currentTarget.value,
    // });
  };

  //   handlerNameChange = event => {
  //     this.setState({ name: event.currentTarget.value });
  //   };

  //   handlerNickNameChange = event => {
  //     this.setState({ nickName: event.currentTarget.value });
  //   };

  handlerOnSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleLicenseChange=event=>{
    // console.log(event.currentTarget.checked)
    this.setState({license: event.currentTarget.checked});

  };

  reset = () => {
    this.setState({ name: '', nickName: '' });
  };

  nameId = nanoid();
  nickNameId = nanoid();
  radioId1 = nanoid();
  radioId2 = nanoid();
  radioId3 = nanoid();

  // http://react.tips/checkboxes-in-react-16/

  // ================== render area ============================

  render() {
    return (
      <>
        <form className={css.form} onSubmit={this.handlerOnSubmit}>
          <div>
            <label htmlFor={this.nameId}>
              Name
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handlerAllChange}
                id={this.nameId}
              />
            </label>
            <label htmlFor={this.nickNameId}>
              NickName
              <input
                type="text"
                name="nickName"
                value={this.state.nickName}
                onChange={this.handlerAllChange}
                id={this.nickNameId}
              />
            </label>
          </div>

          <div>
            <label htmlFor={this.radioId1}>
              <input
                type="radio"
                name="experiense"
                value="junior"
                id={this.radioId1}
                onChange={this.handlerAllChange}
                checked={this.state.experiense === 'junior'}
              />
              junior
            </label>
            <label htmlFor={this.radioId2}>
              <input
                type="radio"
                name="experiense"
                value="middle"
                id={this.radioId2}
                onChange={this.handlerAllChange}
                checked={this.state.experiense === 'middle'}
              />
              middle
            </label>
            <label htmlFor={this.radioId3}>
              <input
                type="radio"
                name="experiense"
                value="senior"
                id={this.radioId3}
                onChange={this.handlerAllChange}
                checked={this.state.experiense === 'senior'}
              />
            </label>
            senior
          </div>

          <label>
            <input 
            type="checkbox" 
            name="license" 
            checked={this.state.license} 
            onChange={this.handleLicenseChange}
           
            />I am agree
          </label>

          <div>
            <button type="submit" disabled={!this.state.license}>Send</button>
          </div>
        </form>
      </>
    );
  }
}
export default Form;
