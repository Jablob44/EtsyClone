

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