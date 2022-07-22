class AddCategoryToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :category, :string
    add_index :listings, :category
  end
end
