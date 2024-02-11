class Api::MessagesController < ApplicationController
 
    def create
        # Strong parameters: Whitelist allowed parameters
        message_params = params.permit(:user_id, :message_body)
    
        # Check for required fields
        if message_params[:user_id].blank? || message_params[:message_body].blank?
          return render json: { error: "User ID and message body are required" }, status: :bad_request
        end
    
        # Create and save the message
        message = Message.create(message_params)
    
        if message.persisted?
          # Return the message along with additional information
          render json: {
            message: message,
            user: message.user, # Assuming the user association exists in the Message model
            created_at: message.created_at,
            updated_at: message.updated_at
          }, status: :created
        else
          # Return an error response if creation fails
          render json: { error: "Failed to create message" }, status: :unprocessable_entity
        end
      end 

        def index
          @messages = Message.all
          # Include user ID and message body in the rendered JSON
          @messages = Message.all
          render json: @messages #, include: [:user, :message_body] #, only: [:user_id, :message_body]
        end
       
end
