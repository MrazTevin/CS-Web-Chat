class AddAgentIdToMessages < ActiveRecord::Migration[7.1]
  def change
    add_column :messages, :agent_id, :integer
  end
end
