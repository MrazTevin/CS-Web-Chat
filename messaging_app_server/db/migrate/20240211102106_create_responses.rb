class CreateResponses < ActiveRecord::Migration[7.1]
  def change
    create_table :responses do |t|
      t.text :body
      t.integer :message_id
      t.integer :agent_id

      t.timestamps
    end
  end
end
