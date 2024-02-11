class Api::ResponsesController < ApplicationController
    skip_before_action :verify_authenticity_token
  
    def create
        @response = Api::Response.new(response_params)
    
        if @response.save
          render json: @response, status: :created
        else
          render json: @response.errors, status: :unprocessable_entity
        end
      end
    
      private
    
      def response_params
        params.require(:response).permit(:body, :message_id, :agent_id)
      end
end
