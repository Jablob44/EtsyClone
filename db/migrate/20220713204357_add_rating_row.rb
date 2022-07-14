class AddRatingRow < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :average_rating, :integer
  end
end
