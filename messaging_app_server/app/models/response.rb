class Response < ApplicationRecord
    belongs_to :message
    belongs_to :agent
end