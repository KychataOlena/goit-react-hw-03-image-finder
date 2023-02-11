import { Overlay, ModalContent } from './Modal.styled';
import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    // console.log('Modal componentDidMount');
    console.log(this.props.largeImageURL);

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // console.lo ('Modal componentWillUnmount');

    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
      // console.log(this.props.largeImageURL);
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalContent>
          <img src={`${this.props.onClick}`} alt="" />
        </ModalContent>
      </Overlay>,
      modalRoot
    );
  }
}
