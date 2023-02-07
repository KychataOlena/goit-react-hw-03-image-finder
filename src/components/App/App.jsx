import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Wrapper } from './App.styled';
const API_KEY = '33394453-d5a8c72f7be6b764d04762919';

export class App extends Component {
  state = {
    searchName: '',
    // isLoading: false,
    page: 1,
    items: [],
  };

  handleSubmit = searchName => {
    this.setState({ searchName });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  async componentDidMount() {
    try {
      const data = await axios.get(
        `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      console.log(data);

      this.setState({
        items: data.data.hits,
      });

      // data.data.hits.map(({ id, webformatURL, largeImageURL }) => {
      //   this.setState(items: { id, webformatURL, largeImageURL });
      //   return console.log(this.state.items);
      // });
    } catch (error) {
      console.log(error);
    }
    //     finelly{
    //   this.setState({ isLoading: true });
    // }
  }

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.searchName !== this.state.searchName
    ) {
      // console.log('data');
    }
  }

  render() {
    return (
      <Wrapper>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery items={this.state.items} />
        <ToastContainer autoClose={3000} theme="colored" />
        <button type="button" onClick={this.loadMore}>
          Load more
        </button>
      </Wrapper>
    );
  }
}
