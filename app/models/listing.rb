class Listing < ApplicationRecord
    validates :title, :body, :price, :author_id, presence: true
    validates :title, :body, uniqueness: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :User
end
