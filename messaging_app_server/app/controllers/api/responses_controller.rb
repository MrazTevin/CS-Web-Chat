class Api::ResponsesController < ApplicationController
    skip_before_action :verify_authenticity_token
  
    def create
        agent = Agent.find_or_create_by(name: response_params[:name])
        message = Message.find(response_params[:message_id])

        @response = Response.new(body: response_params[:body], agent: agent, message: message)
        if @response.save
          render json: @response, status: :created
        else
            puts @response.errors.full_messages
          render json: @response.errors, status: :unprocessable_entity
        end
      end
    
      private
    
      def response_params
        params.require(:response).permit(:body, :message_id, :agent_id, :name)
      end
end
