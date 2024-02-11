# config/initializers/cors.rb
Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins '*' # Allow requests from all origins
      resource '*', headers: :any, methods: [:get, :post, :options,:put, :delete]
      credentials: true
    end
  end
# Compare this snippet from messaging_app_server/config/application.rb:
  