class Api::ListingsController < ApplicationController
    def create
        @listing = Listing.new(listing_params)
        if @listing.save
            render :show
        else
            render json: @listing.errors.full_messages, status: 401
        end
    end

    def destroy

    end

    def show
        @listing = Listing.find(params[:id])

    end

    def index
        @listings = Listing.all
        render :index
    end

    def listing_params
        params.require(:listing).permit(:title, :body, :price, :author_id)
    end
end
