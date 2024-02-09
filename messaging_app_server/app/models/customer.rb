class Customer < ApplicationRecord
    belongs_to :user
    has_many :messages, through: :user
end
