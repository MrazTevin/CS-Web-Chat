class Agent < ApplicationRecord
    has_many :responses
    has_many :messages, through: :responses
end
