class SetDefaultAverageRating < ActiveRecord::Migration[5.2]
  def change
    change_column :listings, :average_rating, :integer, default: 0
  end
end
