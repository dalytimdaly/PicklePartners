class Pickleball < ApplicationRecord
  belongs_to :court
  belongs_to :user

  
  validates :court_number_id, uniqueness: {scope: [:court_id, :time, :date]}
  validates :time, presence: true
  validates :date, presence: true
  validates :court_number_id, presence: true

end
