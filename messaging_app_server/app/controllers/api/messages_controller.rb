class Api::MessagesController < ApplicationController
    
        def index
          @messages = Message.all
          # Include user ID and message body in the rendered JSON
          @messages = Message.all
          render json: @messages #, include: [:user, :message_body] #, only: [:user_id, :message_body]
        end
      
      
end
