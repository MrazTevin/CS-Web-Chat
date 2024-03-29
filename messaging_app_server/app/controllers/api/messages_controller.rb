class Api::MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    # Strong parameters: Whitelist allowed parameters
    message_params = params.require(:message).permit(:user_id, :message_body)

    user = User.find_or_create_by(id: message_params[:user_id])

    # create the message and associate it with the user
    message = user.messages.new(message_body: message_params[:message_body])

    if message.save
      # Return the message along with additional information
      ActionCable.server.broadcast('messages', message)

      render json: {
        id: message.id,
        user_id: message.user_id,
        message_body: message.message_body,
        created_at: message.created_at,
        updated_at: message.updated_at
      }, status: :created
    else
      puts message.errors.full_messages # Log the error messages if creation fails
      # Return an error response if creation fails
      render json: { error: message.errors.full_messages.join(', ') }, status: :unprocessable_entity
    end
  end

  def index
    @messages = Message.all
    render json: @messages
  end
end
