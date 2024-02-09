class Message < ApplicationRecord
  belongs_to :user
  has_one :customer, through: :user
end
