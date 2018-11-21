import React from 'react';
import RecipeCollection from './RecipeCollection.js'
import RecipeDetail from '../Component/RecipeDetail.js'
import RecipeForm from './RecipeForm'
// import RecipeModal from '../Component/RecipeModal.js'

class RecipeContainer extends React.Component {

  render() {
    return (
      <div>
        {
          this.props.openComment === false ? null :
          <RecipeForm onCommentSubmit={this.props.onCommentSubmit} />
        }
        {
          this.props.openForm === false ? null :
          <RecipeForm onFormSubmit={this.props.onFormSubmit} />
        }
        <RecipeCollection onSelectRecipe={this.props.onSelectRecipe} allRecipes={this.props.allRecipes} onHandleLike={this.props.onHandleLike}/>
      </div>
    )
  }
}

export default RecipeContainer;

// {
//   this.props.selectedRecipe === null ? null :
//       <RecipeModal selectedRecipe={this.props.selectedRecipe}/>
// }
