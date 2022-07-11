class Api::SessionsController < ApplicationController
    def destroy
        logout!
        render json: {}
    end

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login!(@user)
            render json: ["logged in"]
        else
            render json: ['Invalid  credentials'], status: 401
        end
    end
end
