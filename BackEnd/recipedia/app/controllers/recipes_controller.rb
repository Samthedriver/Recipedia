class RecipesController < ApplicationController
  def index
      render json: Recipe.all
  end

  def create
    recipe = Recipe.create(recipe_params)
    render json: recipe
  end

  def destroy
    Recipe.destroy(params[:id])
  end

  def update
    recipe = Recipe.find(params[:id])
    recipe.update_attributes(recipe_params)
    render json: recipe
  end

  private

  def recipe_params
    params.require(:recipe).permit(:id, :name, :likes, :cookTime, :videoLink, :imgUrl, :yield, :instructions, :ingredients, :category, :comments)
  end

end
