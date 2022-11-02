class Court < ApplicationRecord
  has_many :pickleballs
  has_many :users, through: :pickleballs

  
end
