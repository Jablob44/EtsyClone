# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

test_image = URI.open('https://jjustice-dev.s3.us-west-1.amazonaws.com/House+of+Harlow+1960+x+Etsy+Alana+Pillow+Cover.webp')
User.destroy_all
Listing.destroy_all
user1 = User.create!(username: "theUser", email: "theuser", password: "123456");
# Listing.create!(title: 'budgetkeanu', body: 'have this budget keanu reeves', price: "999", author_id: user1.id)
user2 = User.create!(username: "theUser2", email: "theuser2", password: "123456");
# Listing.create!(title: 'budgetkeanu but more expensive', body: 'have this budget keanu reeves but more expensive', price: "99999", author_id: user2.id)
user3 = User.create!(username: "theUser3", email: "theuser3", password: "123456");
# Listing.create!(title: 'budgetkeanu but actually budget', body: 'have this budget keanu reeves but its actually budget', price: "9", author_id: user3.id)
user4 = User.create!(username: "theUser4", email: "theuser4", password: "123456");
# Listing.create!(title: 'this is a different title', body: 'have this other other keanu.', price: "FREE", author_id: user4.id)
demoUser = User.create!(username: "demo", email: "demotheuser@gmail.com", password: "123456");
demo_listing = Listing.create!(title: 'Velvet throw pillow cover - Velvet pillow cover - velvet throw pillow -throw pillow cover -pillow cover -velvet pillow -velvet cushion cover', body: 'Freshen up your decor with these stylish Velvet Pillow Covers! 
    The pillow covers are made of the medium weight velvet fabric. Velvet fabric is used on both the front and the back. 
    All of our pillows are sewn with surged seams that adds strength and prevent fabric from fraying. 
    Invisible zipper enclosure on the bottom that matches the color of the fabric. 
    This sale is for one pillow cover and does not include the pillow insert.', price: "12", author_id: demoUser.id)
demo_listing.photo.attach(io: test_image, filename: 'House+of+Harlow+1960+x+Etsy+Alana+Pillow+Cover.webp')


test_image2 = URI.open('https://jjustice-dev.s3.us-west-1.amazonaws.com/cutting-board.webp')
demo_listing2 = Listing.create!(title: 'Custom Cutting Board, Custom Olive Wood Cutting Board. Personalized Rustic Olive Wood Cheese Board. Charcuterie Board. Rustic Cutting Board', body: 'Each batch of olive wood is completely different than the last. These boards are as natural and unique as the trees they come from. 

    Due to the nature of being natural wood and handmade, these boards do not always lie completely flat. 
    
    Please note the pictures are just an example of the board you will receive. The wood striations in olive wood 
    vary from board to board. No two boards are the same in shape, size or color. Not all have a bark edge. ', price: "70", author_id: user4.id)
demo_listing2.photo.attach(io: test_image2, filename: 'cutting-board.webp')


test_image3 = URI.open('https://jjustice-dev.s3.us-west-1.amazonaws.com/car-key-covers.webp')
demo_listing3 = Listing.create!(title: 'Key Fob Cover Crafted TPU Protector Case for GMC Yukon Denali Sierra Keyless Remote Entry', body: 'The ultra-thin, soft, tough and stylish designed from TPU material will be your best choice of key fob cover or protector for you GMC remote smart key.', price: "25", author_id: user4.id)
demo_listing3.photo.attach(io: test_image3, filename: 'car-key-covers.webp')

test_image4 = URI.open('https://jjustice-dev.s3.us-west-1.amazonaws.com/5aa3a15b577ea6ca36fe5520ed352f7e.jpeg')
demo_listing4 = Listing.create!(title: 'Cactus Marquee 24", Cactus Wall Decor, Light Up Cactus', body: 'Cactus Marquee Light | 24"

    Bring the desert indoors with this handmade light-up cactus!
    
    **Free shipping only includes the contiguous United States. Please contact us for shipping outside the United States.', price: "99.99", author_id: user3.id)
demo_listing4.photo.attach(io: test_image4, filename: '5aa3a15b577ea6ca36fe5520ed352f7e.jpeg')

test_image5 = URI.open('https://jjustice-dev.s3.us-west-1.amazonaws.com/best-etsy-shops-1-1.jpeg')
demo_listing5 = Listing.create!(title: 'Geode Coffee Mug 14 oz.', body: 'Enjoy your morning brew with some Mother Nature inspired sparkle before you glow about your day. 

    One of a kind hand painted and sealed with FDA approved food safe resin. Not microwave or dishwasher safe, so I encourage you to enjoy your mug a bit longer while hand washing only.
    
    Holds 14oz. of liquid energy.', price: "24.50", author_id: user2.id)
demo_listing5.photo.attach(io: test_image5, filename: 'best-etsy-shops-1-1.jpeg')

test_image6 = URI.open('https://jjustice-dev.s3.us-west-1.amazonaws.com/Flowery-Perler-Notebook.jpeg')
demo_listing6 = Listing.create!(title: 'Birth Flower Personalized Journal, Birth Month Flower Gift, Birthday Gift Notebook, Personalized Gratitude Journal, Meditation Journal', body: 'Personalized birth flower journal/notebook:

    Journals offer a special and unique connection between your mind and your written words. This beautiful personalized journal will become your constant companion and a prized possession that enriches your life, sparks your creativity, and lets you express your thoughts. ', price: "19", author_id: user2.id)
demo_listing6.photo.attach(io: test_image6, filename: 'Flowery-Perler-Notebook.jpeg')

test_image7 = URI.open('https://jjustice-dev.s3.us-west-1.amazonaws.com/resin-geode-white-coasters-etsy.webp')
demo_listing7 = Listing.create!(title: 'Geode Shaped Resin Coasters, Set of 4 (multi-shaped) in White or Black', body: "Made to order, uniquely designed for you set of 4 geode shaped resin coasters! These coasters make a wonderful, unique element in your home that will be a conversation starter for sure! Perfect for house warming gifts, Christmas gifts, birthdays etc! 

We hand make each set with food grade Alumlite epoxy resin. This listing is specifically for white OR black as the primary color. You have the option to keep it simple with just resin dye, or add gold leaf, silver leaf or copper leaf for the 'geode' look! The sides are painted with gold, silver, black, rose, copper and white metallic paint pen to complete the 'look' and will coordinate. 

Each coaster is a different shape with this set but they all coordinately perfectly. We add silicon feet to the bottom so they don't slip or scratch. 

*Please keep in mind that each set is one-of-a- kind so we cannot guarantee that the sets will be exactly the same as photos listed. We will send you pictures along the way to make sure you are happy with the finished product! 

Message us with questions we will do out best to respond promptly! 

Items will be ready to ship in 1-2 weeks. Please keep that in mind if you need an order quickly to message BEFORE purchasing. 
Shipping available to the US with USPS Priority. 

Thanks for shopping! 
E.E. Crafters", price: "30", author_id: user2.id)


demo_listing7.photo.attach(io: test_image7, filename: 'resin-geode-white-coasters-etsy.webp')

test_image8 = URI.open('https://jjustice-dev.s3.us-west-1.amazonaws.com/best-etsy-shops-1-2.jpeg')
demo_listing8 = Listing.create!(title: 'MADE-TO-ORDER: Classic Crystal Mug', body: "Here it is! The 'crystal' mug of your dreams! And guess what? You get to choose your colors! This sweeping 'crystal' design is unmistakable and signature to Essarai Ceramics, making this not only a classic but a lifetime piece to pass down. ", price: "60", author_id: user1.id)
demo_listing8.photo.attach(io: test_image8, filename: 'best-etsy-shops-1-2.jpeg')


test_image9 = URI.open('https://jjustice-dev.s3.us-west-1.amazonaws.com/sub-buzz-6929-1616380908-1.jpeg')
demo_listing9 = Listing.create!(title: 'Pokemon Terrarium Gifts For Him Pikachu Squirtle Charmander Eevee Bulbasaur Pokeball gifts Pokemon go Best Pokemon Best Gifts For Kids', body: "Best Pokemon Gifts For The Pokemon Lover", price: "59.99", author_id: user1.id)
demo_listing9.photo.attach(io: test_image9, filename: 'sub-buzz-6929-1616380908-1.jpeg')


test_image9 = URI.open('https://jjustice-dev.s3.us-west-1.amazonaws.com/618d7a083d74d00019f3fce5.webp')
demo_listing9 = Listing.create!(title: 'Birth Flower Earrings • Floral Signet Earrings • Flower Jewelry • Birthday Gift • Bridesmaid Gifts • Gift for Her • CM56', body: "S I G N E T ∙ F L O W E R ∙ E A R R I N G S

    • Material: High Quality Solid 925 Sterling Silver 
    
    • Dimensions: 0.6 inch Charm
    
    • Finish: Sterling Silver ∙ 18K Gold ∙ Rose Gold 
    
    • All our work is custom made by hand with Love and Care in our workshop ♡
    
    • Sold as a pair", price: "19.99", author_id: user1.id)
demo_listing9.photo.attach(io: test_image9, filename: '618d7a083d74d00019f3fce5.webp')


# https://jjustice-dev.s3.us-west-1.amazonaws.com/618d7a083d74d00019f3fce5.webp
# Listing.create!(title: 'test keanu2', body: 'tk2', price: "FREE", author_id: user4.id)
# Listing.create!(title: 'test keanu3', body: 'tk3', price: "FREE", author_id: user4.id)
# Listing.create!(title: 'test keanu4', body: 'tk4', price: "FREE", author_id: user4.id)
# Listing.create!(title: 'test keanu5', body: 'tk5', price: "FREE", author_id: user4.id)
# Listing.create!(title: 'test keanu6', body: 'tk6', price: "FREE", author_id: user4.id)
# Listing.create!(title: 'test keanu7', body: 'tk7', price: "FREE", author_id: user4.id)






