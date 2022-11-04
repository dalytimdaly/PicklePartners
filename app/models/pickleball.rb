class Pickleball < ApplicationRecord
  belongs_to :court
  belongs_to :user

  validates :time, numericality: {less_than_or_equal_to: 22, greater_than_or_equal_to: 6}

  validates :time, presence: true, uniqueness: { scope: :court_number_id }
  validates :user_id, presence: true, uniqueness: { scope: [ :time, :id ] }
  validates :user2_id, uniqueness: { scope:  [ :time, :id ] }
  validates :user3_id, uniqueness: { scope:  [ :time, :id ] }
  validates :user4_id, uniqueness: { scope:  [ :time, :id ] }

  validates :user3_id, numericality: {less_than_or_equal_to: 0}, if: :size_2?
  validates :user4_id, numericality: {less_than_or_equal_to: 0}, if: :size_2?

  def size_2?
    size == 2
  end
end
