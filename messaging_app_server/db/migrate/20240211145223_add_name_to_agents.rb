class AddNameToAgents < ActiveRecord::Migration[7.1]
  def change
    add_column :agents, :name, :string
  end
end
