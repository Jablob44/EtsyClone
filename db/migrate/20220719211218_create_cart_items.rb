class CreateCartItems < ActiveRecord::Migration[5.2]
  def change
    create_table :cart_items do |t|
      t.integer :quantity, null: false
      t.string :user_id, null: false
      t.string :listing_id, null: false
      t.timestamps
    end
    add_index :cart_items, :user_id
    add_index :cart_items, :listing_id
  end
end
