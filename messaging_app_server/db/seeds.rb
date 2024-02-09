# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

require 'csv'

# Define the absolute path to your CSV file
csv_file = File.expand_path('../../../../GeneralistRails_Project_MessageData.csv', __FILE__)

# Read the CSV file and seed the database
CSV.foreach(csv_file, headers: true) do |row|
  # Extract data from each row of the CSV file
  user_id = row['User ID']
  timestamp = row['Timestamp (UTC)']
  message_body = row['Message Body']

  # Find the User record corresponding to the user_id from the CSV file or create if it doesn't exist
#   user = User.find_by(id: user_id)

    user = User.find_or_create_by!(id: user_id)

  if user.nil?
    puts "User with ID #{user_id} not found. Skipping message creation."
  else
    # Create a Message associated with the found User
    begin
      Message.create!(user: user, timestamp: timestamp, message_body: message_body)
    rescue ActiveRecord::RecordInvalid => e
      puts "Failed to create message: #{e.record.errors.full_messages.join(", ")}"
    end
  end
end
