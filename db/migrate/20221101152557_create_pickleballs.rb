class CreatePickleballs < ActiveRecord::Migration[6.1]
  def change
    create_table :pickleballs do |t|
      t.integer :user_id
      t.integer :court_id
      t.string :type_of_play
      t.string :size
      t.string :skill_level
      t.integer :time
      t.datetime :date
      t.integer :user2_id
      t.integer :user3_id
      t.integer :user4_id


      t.timestamps
    end
  end
end
