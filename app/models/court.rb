class Court < ApplicationRecord
  has_many :pickleballs
  has_many :users, through: :pickleballs

  validates :reservations6, numericality: {less_than_or_equal_to: 10}
   validates :reservations7, numericality: {less_than_or_equal_to: 10}
   validates :reservations8, numericality: {less_than_or_equal_to: 10}
   validates :reservations9, numericality: {less_than_or_equal_to: 10}
   validates :reservations10, numericality: {less_than_or_equal_to: 10}
   validates :reservations11, numericality: {less_than_or_equal_to: 10}
   validates :reservations12, numericality: {less_than_or_equal_to: 10}
   validates :reservations13, numericality: {less_than_or_equal_to: 10}
   validates :reservations14, numericality: {less_than_or_equal_to: 10}
   validates :reservations15, numericality: {less_than_or_equal_to: 10}
   validates :reservations16, numericality: {less_than_or_equal_to: 10}
   validates :reservations17, numericality: {less_than_or_equal_to: 10}
   validates :reservations18, numericality: {less_than_or_equal_to: 10}
   validates :reservations19, numericality: {less_than_or_equal_to: 10}
   validates :reservations20, numericality: {less_than_or_equal_to: 10}
   validates :reservations21, numericality: {less_than_or_equal_to: 10}
   validates :reservations22, numericality: {less_than_or_equal_to: 10}
end
