import React from 'react'
import recipediaLogo2 from '../recipediaLogo2.png'

class RecipeCard extends React.Component {

  render() {
    return (
      <div className="ui column">

        <div className="ui card" onClick={() => {this.props.handleClick(this.props.recipe)}}>
          <div className="content">
            <div className="Medium Header">
              {this.props.recipe.name}
            </div>
          </div>
          <div className="image">
            <img alt="Whoops!" src={this.props.recipe.imgUrl} />
          </div>

          <div className="extra content">
            <span>
              <i className="icon red heart" />
              {this.props.recipe.likes}
            </span>

            <span>
              <i className="icon green utensils" />
              {this.props.recipe.yield}
            </span>
            <span>
              <i className="icon blue clock outline" />
              {this.props.recipe.cookTime}
            </span>
          </div>
        </div>
      </div>
    );
  }

};

export default RecipeCard;
