class Api::ListingsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :delete]
    def create
        @listing = Listing.new(listing_params)
        # if !@listing.photo
        #     @listing.default_image
        # end
        if @listing.save
            render :show
        else
            render json: @listing.errors.full_messages, status: 401
        end
    end

    def update
        @listing = Listing.find(params[:id])
        if @listing.update(listing_params)
            render :show
        else
            render json: @listing.errors.full_messages, status: 401
        end
    end     

    def destroy
        @listing = Listing.find(params[:id])
        @listing.destroy
    end

    def show
        # @listing = Listing.with_attached_photos.find(params[:id])
        @listing = Listing.find(params[:id])
    end

    def index
        @listings = Listing.all
        render :index
    end

    def listing_params
        params.require(:listing).permit(:title, :body, :price, :author_id, :photo, :id, :category)
    end
end
