# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_11_01_152557) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "courts", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "phone_number"
    t.string "hours"
    t.string "image"
    t.integer "court_number1"
    t.integer "court_number2"
    t.integer "court_number3"
    t.integer "court_number4"
    t.integer "court_number5"
    t.integer "court_number6"
    t.integer "court_number7"
    t.integer "court_number8"
    t.integer "court_number9"
    t.integer "court_number10"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "pickleballs", force: :cascade do |t|
    t.integer "user_id"
    t.integer "court_id"
    t.string "type_of_play"
    t.integer "size"
    t.string "skill_level"
    t.integer "time"
    t.datetime "date"
    t.integer "court_number_id"
    t.integer "user2_id"
    t.integer "user3_id"
    t.integer "user4_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "first_name"
    t.string "last_name"
    t.string "area"
    t.string "phone_number"
    t.string "bio"
    t.string "skill_level"
    t.string "profile_picture"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
