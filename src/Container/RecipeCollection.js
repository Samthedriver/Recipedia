import React from "react";
import RecipeCard from "../Component/RecipeCard";
import RecipeModal from '../Component/RecipeModal.js'

class RecipeCollection extends React.Component {
  constructor() {
    super();
    this.state = {
    isOpen: false,
    selectedRecipe: null
    }
  }

  handleClick = (recipe) => {
    console.log('card is clicked!')
    console.log('recipe: ', recipe)
    this.setState({
      isOpen: !this.state.isOpen,
      selectedRecipe: recipe
    });
  }

  handleClose = () => {

    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onHandleLike = () => {
    console.log('clicked like')
    let url = `http://localhost:3001/recipes/${this.state.selectedRecipe.id}`
    fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(
      {
        recipe: {
          likes: this.state.selectedRecipe.likes + 1
        }
      })
  })
	.then(response => response.json())
  		.then(data => {
    			console.log(data)
 		 })

  }

  onHandleComment = () => {
    console.log('clicked comment')
    let url = `http://localhost:3001/recipes/${this.state.selectedRecipe.id}`

    fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(
      {
        recipe: {
          comments: this.state.selectedRecipe.comments + " I like it!"
        }
      })
  })
	.then(response => response.json())
  		.then(data => {
    			console.log(data)
 		 })

  }

  render(){
  	return (
  	  <div className="ui four column grid">
        {
          this.state.selectedRecipe === null ? null :
          <RecipeModal open={this.state.isOpen} handleClick={this.handleClose} recipe={this.state.selectedRecipe} onHandleLike={this.onHandleLike} onHandleComment={this.onHandleComment}/>
        }
    		<div className="row">
          {
            this.props.allRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} handleClick={this.handleClick}/>)
          }
    		</div>
  	  </div>
  	);
  }

};

export default RecipeCollection;
