class User < ApplicationRecord
  has_secure_password
  has_many :pickleballs
  has_many :courts, through: :pickleballs
  has_one_attached :avatar

  validates :username, presence: true, uniqueness: true

  def avatar_url
    return Rails.application.routes.url_helpers.url_for(avatar) if avatar.attached?
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIqcwio8gGLw-sSaYm0SYl13oLFpscvutmkk8l95s33AM3_kD0HivHJLzMF_t6w-VI2ow&usqp=CAU'
  end

end
