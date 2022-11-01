class CreateCourts < ActiveRecord::Migration[6.1]
  def change
    create_table :courts do |t|
      t.string :name
      t.string :address
      t.string :phone_number
      t.string :hours
      t.integer :reservations6
      t.integer :reservations7
      t.integer :reservations8
      t.integer :reservations9
      t.integer :reservations10
      t.integer :reservations11
      t.integer :reservations12
      t.integer :reservations13
      t.integer :reservations14
      t.integer :reservations15
      t.integer :reservations16
      t.integer :reservations17
      t.integer :reservations18
      t.integer :reservations19
      t.integer :reservations20
      t.integer :reservations21
      t.integer :reservations22


      t.timestamps
    end
  end
end
