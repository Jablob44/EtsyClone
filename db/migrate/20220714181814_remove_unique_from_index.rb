class RemoveUniqueFromIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :listings, name: "index_listings_on_author_id"
    add_index :listings, :author_id
  end
end
