import React, { Component } from 'react';
import Adapter from './Adapter';
import TVShowList from './Components/TVShowList';
import './App.css';
import Searchbar from './Components/Searchbar'

class App extends Component {

  state = {
    shows: [],
    selectedShow: null,
    searchTerm: "",
  }

  handleSearch= (event) => {
    this.setState({
      searchTerm: event.target.value
    })
    
  }

  componentDidMount() {
    Adapter.getShows().then( (data) => this.setState({
      shows: data,
      
    }, ()=>console.log(this.state.shows)))
  }

  changeSelectedShow = (showId) => {
    // console.log('youre inside changeSelectedShow')
    // console.log('showId of selected show', showId)
    let selectedShow = this.state.shows.find((show) => {
      return show.id === showId
    })
    this.setState({
      selectedShow: selectedShow,
    }, ()=> console.log(this.state.selectedShow))
  }

  render = () => {
    return (
      <div>
        <Searchbar handleSearch={this.handleSearch} value={this.state.searchTerm}/>
        <TVShowList onClick={this.changeSelectedShow} 
        shows={this.state.shows} 
        selectedShow={this.state.selectedShow}
        />

      </div>
    );
  }

}

export default App;
