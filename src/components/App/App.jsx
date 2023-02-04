import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from '../Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchName: '',
  };

  handleSubmit = searchName => {
    this.setState({ searchName });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ToastContainer autoClose={3000} theme="colored" />
      </>
    );
  }
}
