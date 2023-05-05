import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

//- создаем отдельный ROOT для монтирования модалки, см. imdex.html (нужно из=за проблемы как с z-индекс - накладывается )

const modalRoot = document.querySelector('#modal-root');



//- ========== класс ==========================

class Modal extends Component {

  //- тут можно повесить слухача
  componentDidMount() {
    console.log('Modal componentDidMount');

    window.addEventListener('keydown', this.handleKeyDown);
  }

  //- тут подчищпем за собой
  componentWillUnmount() {
    console.log('Modal componentWillUnmount');

    window.removeEventListener('keydown', this.handleKeyDown);
  }

   //- закрытие по Esc
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');

      this.props.onClose();
    }
  };

  //- закрытие по backdrop
  handleBackDropClick = event => {
    // console.log('event.currentTarget:',event.currentTarget)
    // console.log('event.target',event.target)

    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    //* === создаем портал ====
    //- монтируем к отдельному root, см. imdex.html

    return createPortal(
      <div className={css.Modal__backdrop} onClick={this.handleBackDropClick}>
        <div className={css.Modal__content}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
export default Modal;
