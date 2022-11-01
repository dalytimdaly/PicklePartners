class User < ApplicationRecord
  has_secure_password
  has_many :pickleballs
  has_many :courts, through: :pickleballs

  validates :username, presence: true, uniqueness: true

end
