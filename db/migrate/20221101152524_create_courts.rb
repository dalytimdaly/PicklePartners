class CreateCourts < ActiveRecord::Migration[6.1]
  def change
    create_table :courts do |t|
      t.string :name
      t.string :address
      t.string :phone_number
      t.string :hours
      t.string :image
      t.integer :court_number1
      t.integer :court_number2
      t.integer :court_number3
      t.integer :court_number4
      t.integer :court_number5
      t.integer :court_number6
      t.integer :court_number7
      t.integer :court_number8
      t.integer :court_number9
      t.integer :court_number10


      t.timestamps
    end
  end
end
