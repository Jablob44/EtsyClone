# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

test_image = URI.open('https://jjustice-dev.s3.us-west-1.amazonaws.com/Screen+Shot+2022-07-12+at+3.27.45+PM.png')
User.destroy_all
Listing.destroy_all
# user1 = User.create!(username: "theUser", email: "theuser", password: "123456");
# Listing.create!(title: 'budgetkeanu', body: 'have this budget keanu reeves', price: "999", author_id: user1.id)
# user2 = User.create!(username: "theUser2", email: "theuser2", password: "123456");
# Listing.create!(title: 'budgetkeanu but more expensive', body: 'have this budget keanu reeves but more expensive', price: "99999", author_id: user2.id)
# user3 = User.create!(username: "theUser3", email: "theuser3", password: "123456");
# Listing.create!(title: 'budgetkeanu but actually budget', body: 'have this budget keanu reeves but its actually budget', price: "9", author_id: user3.id)
user4 = User.create!(username: "theUser4", email: "theuser4", password: "123456");
# Listing.create!(title: 'this is a different title', body: 'have this other other keanu.', price: "FREE", author_id: user4.id)
demoUser = User.create!(username: "demo", email: "demotheuser@gmail.com", password: "123456");
demo_listing = Listing.create!(title: 'test keanu', body: 'tk', price: "FREE", author_id: demoUser.id)
demo_listing.photo.attach(io: test_image, filename: 'Screen+Shot+2022-07-12+at+3.27.45+PM.png')
# Listing.create!(title: 'test keanu2', body: 'tk2', price: "FREE", author_id: user4.id)
# Listing.create!(title: 'test keanu3', body: 'tk3', price: "FREE", author_id: user4.id)
# Listing.create!(title: 'test keanu4', body: 'tk4', price: "FREE", author_id: user4.id)
# Listing.create!(title: 'test keanu5', body: 'tk5', price: "FREE", author_id: user4.id)
# Listing.create!(title: 'test keanu6', body: 'tk6', price: "FREE", author_id: user4.id)
# Listing.create!(title: 'test keanu7', body: 'tk7', price: "FREE", author_id: user4.id)






