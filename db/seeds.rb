# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
require 'faker'


skills = ["pro", "advanced", "intermediate", "beginner"]

100.times do
  User.create(
    username: Faker::Internet.email,
    password_digest: Faker::Internet.password(min_length: 10, max_length: 20),
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    area: "Denver, CO",
    phone_number: Faker::PhoneNumber.cell_phone,
    bio: Faker::Hipster.paragraph(sentence_count: 8),
    skill_level: skills.sample,
    profile_picture: "https://loremflickr.com/600/#{rand(425..450).to_s}/athlete"
  )
end


Court.create(
  name: "Gates Tennis Center", address: "3300 E Bayaud Ave, Denver, CO 80209", phone_number: "(303) 355-4461", hours: "6AM-10AM", court_number1: 1
  court_number2: 2, court_number3: 3, court_number4: 4, court_number5: 5, court_number6: 6, court_number7: 7, court_number8: 8, court_number9: 9, court_number10: 10)

Court.create(
name: "Congress Park", address: "2700 E 9th Ave, Denver, CO 80206", phone_number: "n/a", hours: "8AM-8AM", court_number1: 1
court_number2: 2, court_number3: 3, court_number4: 4, court_number5: 5, court_number6: 6, court_number7: 7, court_number8: 8, court_number9: 9, court_number10: 10)

Court.create(
name: "Huston Lake Park", address: "850 S Bryant St, Denver, CO 80219", phone_number: "(720) 913-0738", hours: "5AM-11AM", court_number1: 1
court_number2: 2, court_number3: 3, court_number4: 4, court_number5: 5, court_number6: 6, court_number7: 7, court_number8: 8, court_number9: 9, court_number10: 10)

Court.create(
name: "Eisenhower Recreation Center",  address: "4300 E Dartmouth Ave, Denver, CO 80222", phone_number: "(720) 865-0730", hours: "7AM-8AM", court_number1: 1
court_number2: 2, court_number3: 3, court_number4: 4, court_number5: 5, court_number6: 6, court_number7: 7, court_number8: 8, court_number9: 9, court_number10: 10)

Court.create(
name: "Cook Park Recreation Center",  address: "7100 Cherry Creek S Dr, Denver, CO 80224", phone_number: "(720) 865-0610", hours: "7AM-9AM", court_number1: 1
court_number2: 2, court_number3: 3, court_number4: 4, court_number5: 5, court_number6: 6, court_number7: 7, court_number8: 8, court_number9: 9, court_number10: 10)

Court.create(
name: "Bear Valley Park Pickleball Courts", address: "6990 W Dartmouth Ave, Denver, CO 80227", phone_number: "n/a", hours: "8AM-8AM", court_number1: 1
court_number2: 2, court_number3: 3, court_number4: 4, court_number5: 5, court_number6: 6, court_number7: 7, court_number8: 8, court_number9: 9, court_number10: 10)

Court.create(
name: "Washington Park Recreation Center", address: "701 S Franklin St, Denver, CO 80209", phone_number: " (720) 865-3400", hours: "6AM-9AM", court_number1: 1
court_number2: 2, court_number3: 3, court_number4: 4, court_number5: 5, court_number6: 6, court_number7: 7, court_number8: 8, court_number9: 9, court_number10: 10)

Court.create(
name: "Sheridan Recreation Center", address: "3325 W Oxford Ave, Denver, CO 80236", phone_number: "(303) 761-2241", hours: "11AM-7AM", court_number1: 1
court_number2: 2, court_number3: 3, court_number4: 4, court_number5: 5, court_number6: 6, court_number7: 7, court_number8: 8, court_number9: 9, court_number10: 10)

Court.create(
name: "Meadow Creek Tennis and Fitness Club", address: "6305 W 6th Ave, Denver, CO 80214", phone_number: "(303) 232-6272", hours: "7AM-10AM", court_number1: 1
court_number2: 2, court_number3: 3, court_number4: 4, court_number5: 5, court_number6: 6, court_number7: 7, court_number8: 8, court_number9: 9, court_number10: 10)

Court.create(
name: "Johnson Recreation Center", address: "4809 Race St, Denver, CO 80216", phone_number: "(720) 865-5660", hours: "10AM-8AM", court_number1: 1
court_number2: 2, court_number3: 3, court_number4: 4, court_number5: 5, court_number6: 6, court_number7: 7, court_number8: 8, court_number9: 9, court_number10: 10)

Court.create(
name: "Martin Luther King Jr. Recreation Center", address: "3880 Newport St, Denver, CO 80207", phone_number: "(720) 865-0530", hours: "6AM-7AM", court_number1: 1
court_number2: 2, court_number3: 3, court_number4: 4, court_number5: 5, court_number6: 6, court_number7: 7, court_number8: 8, court_number9: 9, court_number10: 10)

Court.create(
name: "Apex Pickleball Courts", address: "11706 W 82nd Ave, Arvada, CO 80005", phone_number: "n/a", hours: "6AM-10AM", court_number1: 1
court_number2: 2, court_number3: 3, court_number4: 4, court_number5: 5, court_number6: 6, court_number7: 7, court_number8: 8, court_number9: 9, court_number10: 10)

Court.create(
name: "Cornerstone Park", address: "5150 S Windermere St, Littleton, CO 80120", phone_number: "(303) 953-7625", hours: "6AM-11AM", court_number1: 1
court_number2: 2, court_number3: 3, court_number4: 4, court_number5: 5, court_number6: 6, court_number7: 7, court_number8: 8, court_number9: 9, court_number10: 10)

20.times do
  Pickleball.create(
    user_id: User.all.pluck(:id).sample,
    court_id: Court.all.pluck(:id).sample,
    type_of_play: "casual",
    size: 2,
    skill_level: skills.sample,
    time: rand(6..22),
    date: Faker::Date.forward(days: 7),
    court_number_id: rand(1..10),
    user2_id: User.all.pluck(:id).sample,
    
  )
end

20.times do
  Pickleball.create(
    user_id: User.all.pluck(:id).sample,
    court_id: Court.all.pluck(:id).sample,
    type_of_play: "competitive",
    size: 2,
    skill_level: skills.sample,
    time: rand(6..22),
    date: Faker::Date.forward(days: 7),
    court_number_id: rand(1..10),
    user2_id: User.all.pluck(:id).sample,
    
  )
end

20.times do
  Pickleball.create(
    user_id: User.all.pluck(:id).sample,
    court_id: Court.all.pluck(:id).sample,
    type_of_play: "practice",
    size: 2,
    skill_level: skills.sample,
    time: rand(6..22),
    date: Faker::Date.forward(days: 7),
    court_number_id: rand(1..10),
    user2_id: User.all.pluck(:id).sample,
   
  )
end


20.times do
  Pickleball.create(
    user_id: User.all.pluck(:id).sample,
    court_id: Court.all.pluck(:id).sample,
    type_of_play: "casual",
    size: 4,
    skill_level: skills.sample,
    time: rand(6..22),
    date: Faker::Date.forward(days: 7),
    court_number_id: rand(1..10),
    user2_id: User.all.pluck(:id).sample,
    user3_id: User.all.pluck(:id).sample,
    user4_id: User.all.pluck(:id).sample
  )
end

20.times do
  Pickleball.create(
    user_id: User.all.pluck(:id).sample,
    court_id: Court.all.pluck(:id).sample,
    type_of_play: "competitive",
    size: 4,
    skill_level: skills.sample,
    time: rand(6..22),
    date: Faker::Date.forward(days: 7),
    court_number_id: rand(1..10),
    user2_id: User.all.pluck(:id).sample,
    user3_id: User.all.pluck(:id).sample,
    user4_id: User.all.pluck(:id).sample
  )
end


20.times do
  Pickleball.create(
    user_id: User.all.pluck(:id).sample,
    court_id: Court.all.pluck(:id).sample,
    type_of_play: "practice",
    size: 4,
    skill_level: skills.sample,
    time: rand(6..22),
    date: Faker::Date.forward(days: 7),
    court_number_id: rand(1..10),
    user2_id: User.all.pluck(:id).sample,
    user3_id: User.all.pluck(:id).sample,
    user4_id: User.all.pluck(:id).sample
  )
end