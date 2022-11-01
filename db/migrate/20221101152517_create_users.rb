class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.string :area
      t.string :phone_number
      t.string :bio
      t.string :skill_level
      t.string :profile_picture

      t.timestamps
    end
  end
end
