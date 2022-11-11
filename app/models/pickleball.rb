class Pickleball < ApplicationRecord
  belongs_to :court
  belongs_to :user

  
  validates :court_number_id, uniqueness: {scope: [:court_id, :time, :date]}
  
  validates :user_id, :user2_id, :user3_id, :user4_id, uniqueness: {scope: [:time, :date]}
  

end
