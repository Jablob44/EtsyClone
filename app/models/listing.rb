require 'open-uri'
class Listing < ApplicationRecord
    validates :title, :body, :price, :author_id, presence: true
    validates :title, :body, uniqueness: true

    before_validation :default_image, on: :create
    belongs_to :user,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_one_attached :photo

    def default_image
        if !self.photo.attached?
            default_image = URI.open('https://jjustice-dev.s3.us-west-1.amazonaws.com/no-photo-available.png')
            self.photo.attach(io: default_image, filename: 'no-photo-available.png')
        end
    end
end
