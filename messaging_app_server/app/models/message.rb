class Message < ApplicationRecord
  belongs_to :user
  has_one :customer, through: :user
  validates :user_id, presence: true
  validates :message, presence: true
end
