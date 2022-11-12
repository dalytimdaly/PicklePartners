class User < ApplicationRecord
  has_secure_password
  has_many :pickleballs
  has_many :courts, through: :pickleballs
  has_one_attached :avatar

  validates :username, presence: true, uniqueness: true

  def avatar_url
    return Rails.application.routes.url_helpers.url_for(avatar) if avatar.attached?
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
  end

end
