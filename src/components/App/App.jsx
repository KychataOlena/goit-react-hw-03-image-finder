import React, { Component } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Wrapper } from './App.styled';

const API_KEY = '33394453-d5a8c72f7be6b764d04762919';

export class App extends Component {
  state = {
    searchName: '',
    page: 1,
    items: [],
    loading: false,
    // status: 'idle',
  };

  handleSubmit = searchName => {
    this.setState({ searchName });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(_, prevState) {
    const { page, searchName } = this.state;

    if (prevState.page !== page || prevState.searchName !== searchName) {
      this.setState({ loading: true });

      fetch(
        ` https://pixabay.com/api/?q=${searchName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(items => {
          const ApiArray = items.hits;
          // console.log(ApiArray);
          this.setState({ items: ApiArray });
        })
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { items, loading, status } = this.state;

    return (
      <Wrapper>
        <Searchbar onSubmit={this.handleSubmit} />
        {items && <ImageGallery items={items} />}

        <ToastContainer autoClose={3000} theme="colored" />
        {loading && <h1>Loading....</h1>}
        <button type="button" onClick={this.loadMore}>
          Load more
        </button>
      </Wrapper>
    );
  }
}
