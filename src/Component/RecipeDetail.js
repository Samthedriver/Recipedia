import React from "react";

const RecipeDetail = (props) => {

  return (
    <div className="ui segment">
      <div className="row">
        <div className="two wide column">
            <i className="icon large circular red heart" />
            <strong>{props.selectedRecipe.likes}</strong>
          </div>
          <div className="two wide column">
            <i className="icon large circular green clock outline" />
            <strong>{props.selectedRecipe.cookTime}</strong>
          </div>
          <div className="two wide column">
            <i className="icon large circular blue utensils" />
            <strong>{props.selectedRecipe.yield}</strong>
          </div>
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="Whoops!"
              className="ui medium image"
              src="https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA"
            />
          </div>

          <div className="four wide column">
            <h2>{props.selectedRecipe.name}</h2>
            <p>
              <strong>Ingredients: </strong>
              ...
            </p>
            <strong>
              Instructions: ...
            </strong>
            <br />
          </div>

          <button
            className="ui button fluid"
            onClick={() =>
              console.log('connect this to a function that shows all bots')
            }
          >
            Go Back
          </button>

          <button
            className="ui button fluid"
            onClick={() =>
              console.log(
                "connect this to a function that adds this bot to your bot army list"
              )
            }
          >
            Enlist
          </button>

        </div>
      </div>
    </div>
  </div>
  );

};

export default RecipeDetail;
