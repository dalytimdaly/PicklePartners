class Pickleball < ApplicationRecord
  belongs_to :court
  belongs_to :user

  validates :time, numericality: {less_than_or_equal_to: 22, greater_than_or_equal_to: 6}

  validates :user3_id, numericality: {less_than_or_equal_to: 0}, if: :size_2?
  validates :user4_id, numericality: {less_than_or_equal_to: 0}, if: :size_2?

  validates :date_cannot_be_more_than_7_days_ahead


  def date_cannot_be_more_than_7_days_ahead
    if date.present? && date > Date.today + 7.days
      errors.add(:date, "can't reserve more than a week ahead")
    end
  end

  def size_2?
    size == 2
  end
end
