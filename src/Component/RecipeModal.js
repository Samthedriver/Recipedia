import _ from 'lodash'
import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

const RecipeModal = (props) => (
  <Modal open={props.open} >
    <Modal.Header>
      <span>

        <h1><i className="x icon" onClick={props.handleClick}></i>{props.recipe.name}</h1>
      </span>
      <div className="ui horizontal segments">
        <div className="ui segment">
        <i className="icon red heart" />Likes:
        {props.recipe.likes}
        </div>
        <div className="ui segment">
        <i className="icon green utensils" />Yields:
        {props.recipe.yield}
        </div>
        <div className="ui segment">
        <i className="icon clock blue outline" />Cook Time:
        {props.recipe.cookTime}
        </div>
      </div>
    </Modal.Header>
    <div className="ui grid">
      <div className="one wide column">

      </div>
      <div className="seven wide column">
        <br/>
        <br/>
        <Modal.Content image>
          <Image wrapped size='medium' src={props.recipe.imgUrl} />
          <div className="ui labeled button">
            <div className="ui green button" onClick={props.onHandleComment}>
              <i className="plus icon"></i>
            </div>
            <a className="ui basic green left pointing label">
              Add a comment.
            </a>
          </div>
          <div className="ui labeled button">
            <div className="ui red button" onClick={props.onHandleLike}>
              <i className="heart icon"></i>
            </div>
            <a className="ui basic red left pointing label">
              Like
            </a>
          </div>
          <h4>Comments</h4>
          <p>
            {props.recipe.comments}
          </p>
        </Modal.Content>
      </div>

      <div className="seven wide column">
      <br/>
      <br/>
        <Modal.Description>

              <h4>Ingredients</h4>
              <p>
                {props.recipe.ingredients}
              </p>
              <br />

            <h4>Instructions</h4>
            <p>
              {props.recipe.instructions}
            </p>



        </Modal.Description>
      </div>
      <div className="one wide column">

      </div>

    </div>




  </Modal>
)
export default RecipeModal
