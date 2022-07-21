

export const getAllListings = () => {
    return $.ajax({
        url: '/api/listings',
        method: 'GET'
    })
}

export const getListing = (listingId) => {
    return $.ajax({
        url: `api/listings/${listingId}`,
        method: 'GET'
    })
}

export const createListing = (listing) => {
    return $.ajax({
        url: 'api/listings',
        method: 'POST',
        data: {listing}
    })
}

export const updateListing = (listing) => {
    console.log(listing)
    return $.ajax({
        url: `api/listings/${listing.id}`,
        method: 'PATCH',
        data: {listing},
        contentType: false,
        processData: false
    })
}

export const deleteListing = (listingId) => {
    return $.ajax({
        url: `api/listings/${listingId}`,
        method: 'DELETE'
    })
}