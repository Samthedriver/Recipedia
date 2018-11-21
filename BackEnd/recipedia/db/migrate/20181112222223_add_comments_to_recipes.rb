class AddCommentsToRecipes < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :comments, :text
  end
end
