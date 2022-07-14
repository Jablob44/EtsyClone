class FixAuthorId < ActiveRecord::Migration[5.2]
  def change
    # remove_index :listings, column: [:author_id], name: "index_listings_on_author_id"
    change_column :listings, :author_id, 'integer USING author_id::integer'
    # add_index :listings, :author_id
  end
end
