class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :cookTime
      t.string :yield
      t.integer :likes
      t.string :imgUrl
      t.string :videoLink

      t.timestamps
    end
  end
end
