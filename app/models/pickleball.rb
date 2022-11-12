class Pickleball < ApplicationRecord
  belongs_to :court
  belongs_to :user

  
  validates :court_number_id, uniqueness: {scope: [:court_id, :time, :date]}
  

end
