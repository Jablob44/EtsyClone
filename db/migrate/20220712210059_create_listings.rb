class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.string :price, null: false
      t.string :author_id, null: false
      t.timestamps
    end
    add_index :listings, :author_id, unique: true
  end
end
