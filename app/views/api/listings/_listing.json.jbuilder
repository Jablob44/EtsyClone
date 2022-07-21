json.extract! listing, :title, :body, :price, :average_rating, :id
json.photoUrl url_for(listing.photo)