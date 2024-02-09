class CreateMessages < ActiveRecord::Migration[7.1]
  def change
    create_table :messages do |t|
      t.references :user
      t.text :message_body  # Change from `content` to `message_body`
      t.boolean :urgent
      t.boolean :resolved
      # t.string :user_id # Change from `customer_id` to `user_id`
      # t.integer :user_id
      t.timestamps
    end
  end
end
