class ApplicationController < ActionController::Base
    def csrf_token
        render json: { csrfToken: form_authenticity_token }
      end
    protect_from_forgery with: :exception, prepend: true
    before_action :set_https_header

    def set_https_header
    response.set_header('X-Frame-Options', 'SAMEORIGIN')
    end
end
