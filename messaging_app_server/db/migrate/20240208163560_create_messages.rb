class CreateMessages < ActiveRecord::Migration[7.1]
  def change
    create_table :messages do |t|
      t.references :customer, null: false, foreign_key: true
      t.text :content
      t.boolean :urgent
      t.boolean :resolved

      t.timestamps
    end
  end
end
