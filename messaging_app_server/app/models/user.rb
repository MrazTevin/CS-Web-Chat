class User < ApplicationRecord
    has_one :customer
    has_many :messages
end
