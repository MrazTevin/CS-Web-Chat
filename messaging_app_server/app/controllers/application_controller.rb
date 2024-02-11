class ApplicationController < ActionController::Base
    include ActionController::Cookies
    after_action :set_csrf_cookie
    def fallback_index_html
      render file: 'public/index.html'
    end

    def csrf_token
        render json: { csrfToken: form_authenticity_token }
      end
    protect_from_forgery with: :exception, prepend: true
    before_action :set_https_header

    def set_csrf_cookie
        cookies["CSRF-TOKEN"] = {
          value: form_authenticity_token,
          secure: true,
        }
      end
    def set_https_header
    response.set_header('X-Frame-Options', 'SAMEORIGIN')
    end
end

