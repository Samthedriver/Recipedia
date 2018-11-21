import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeContainer from './Container/RecipeContainer.js'
import NavBar from './NavBar.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      allRecipes: [],
      selectedRecipe: null,
      openForm: false,
      openComment: false,
      searchTerm: ''
    }
  }

  onSelectRecipe = (recipe) => {
    this.setState({
      selectedRecipe: recipe
    })
    console.log(recipe)
  }

  onAddNewRecipe = () => {
    this.setState({
      openForm: true
    })
  }

  onFormSubmit = (recipe) => {
    let newAllRecipes = [...this.state.allRecipes, recipe]
    this.setState({
      allRecipes: newAllRecipes,
      openForm: false
    })
  }

  onCommentSubmit = () => {
    this.setState({
      openComment: false
    })
  }

  componentDidMount() {
    fetch('http://localhost:3001/recipes.json')
      .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({
            allRecipes: data
          })
        })
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ searchTerm: value })
  }



  render() {
    const desiredRecipes = this.state.allRecipes.filter(recipe => recipe.name.includes(this.state.searchTerm))

    return (
      <div className="App">
        <NavBar onAddNewRecipe={this.onAddNewRecipe} searchTerm={this.state.serchTerm} handleSearchChange={this.handleSearchChange}/>
        <RecipeContainer onFormSubmit={this.onFormSubmit} openComment={this.state.openComment} openForm={this.state.openForm} onSelectRecipe={this.onSelectRecipe} allRecipes={desiredRecipes} selectedRecipe={this.state.selectedRecipe}/>
      </div>
    );
  }
}

export default App;
