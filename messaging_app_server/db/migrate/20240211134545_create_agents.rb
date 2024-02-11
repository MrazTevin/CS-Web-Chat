class CreateAgents < ActiveRecord::Migration[7.1]
  def change
    create_table :agents do |t|

      t.timestamps
    end
  end
end
