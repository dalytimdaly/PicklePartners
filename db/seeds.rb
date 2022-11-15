# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
require 'faker'


skills = ["pro", "advanced", "intermediate", "beginner"]

300.times do
  User.create(
    username: Faker::Internet.email,
    password_digest: Faker::Internet.password(min_length: 10, max_length: 20),
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    area: "Denver, CO",
    phone_number: Faker::PhoneNumber.cell_phone,
    bio: Faker::Hipster.paragraph(sentence_count: 8),
    skill_level: skills.sample,
  )
end


Court.create(
  name: "Gates Tennis Center", address: "3300 E Bayaud Ave, Denver, CO 80209", phone_number: "(303) 355-4461", open_hour: 6, close_hour:  22, hours: "6AM-10PM", image: "https://static.wixstatic.com/media/c6984b_38e0b12ae29049db841c4e3d6095e44b~mv2.png/v1/crop/x_6,y_0,w_1393,h_727/fill/w_560,h_278,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/gtc-pickle-holder.png", court_number1: 1,
  court_number2: 2, court_number3: 3, court_number4: 4, court_number5: 5, court_number6: 6, court_number7: 7, court_number8: 8, court_number9: 9, court_number10: 10)

Court.create(
name: "Congress Park", address: "2700 E 9th Ave, Denver, CO 80206", phone_number: "n/a", open_hour: 6, close_hour:  20, hours: "8AM-8PM", image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/CongressParkDenver.JPG", court_number1: 1,
court_number2: 2, court_number3: 3, court_number4: 4, court_number5: 5, court_number6: 6, court_number7: 7, court_number8: 8, court_number9: 9, court_number10: 10)

Court.create(
name: "Huston Lake Park", address: "850 S Bryant St, Denver, CO 80219", phone_number: "(720) 913-0738", open_hour: 6, close_hour:  23, hours: "5AM-11PM", image: "https://cdn.filestackcontent.com/cgXDhN5TRrGCp2e7wE9K", court_number1: 1,
court_number2: 2, court_number3: 3, court_number4: 4, court_number5: 5, court_number6: 6, court_number7: 7, court_number8: 8, court_number9: 9, court_number10: 10)

Court.create(
name: "Eisenhower Recreation Center",  address: "4300 E Dartmouth Ave, Denver, CO 80222", phone_number: "(720) 865-0730", open_hour: 6, close_hour:  20, hours: "7AM-8PM", image: "https://bradley.dpsk12.org/wp-content/uploads/sites/45/Eisenhower_Entrance.jpg.jpeg", court_number1: 1,
court_number2: 2, court_number3: 3, court_number4: 4, court_number5: 5, court_number6: 6, court_number7: 7, court_number8: 8, court_number9: 9, court_number10: 10)

Court.create(
name: "Cook Park Recreation Center",  address: "7100 Cherry Creek S Dr, Denver, CO 80224", phone_number: "(720) 865-0610", open_hour: 6, close_hour:  21, hours: "7AM-9PM", image: "https://i0.wp.com/spotlightnews.com/wp-content/uploads/2021/05/pickleball-web-7634.jpg?resize=720%2C576&ssl=1", court_number1: 1,
court_number2: 2, court_number3: 3, court_number4: 4, court_number5: 5, court_number6: 6, court_number7: 7, court_number8: 8, court_number9: 9, court_number10: 10)

Court.create(
name: "Bear Valley Park Pickleball Courts", address: "6990 W Dartmouth Ave, Denver, CO 80227", phone_number: "n/a", open_hour: 6, close_hour:  20, hours: "8AM-8PM", image: "https://images.squarespace-cdn.com/content/v1/50afefd0e4b01c11f0ec0c82/1657305578821-ZR6PQ6UV2LF0AO3TEG9P/BearValleyTennisPickleball-062921-36-EDIT.jpg", court_number1: 1,
court_number2: 2, court_number3: 3, court_number4: 4, court_number5: 5, court_number6: 6, court_number7: 7, court_number8: 8, court_number9: 9, court_number10: 10)

Court.create(
name: "Washington Park Recreation Center", address: "701 S Franklin St, Denver, CO 80209", phone_number: " (720) 865-3400", open_hour: 6, close_hour:  21, hours: "6AM-9PM", image: "https://www.pickleballonline.com/wp-content/uploads/2018/01/Washington-Park.jpg", court_number1: 1,
court_number2: 2, court_number3: 3, court_number4: 4, court_number5: 5, court_number6: 6, court_number7: 7, court_number8: 8, court_number9: 9, court_number10: 10)

Court.create(
name: "Sheridan Recreation Center", address: "3325 W Oxford Ave, Denver, CO 80236", phone_number: "(303) 761-2241", open_hour: 6, close_hour:  19, hours: "11AM-7PM", image: "https://www.ssprd.org/Portals/0/Images/parks/FieldImages/SheridanRecPark.jpg", court_number1: 1,
court_number2: 2, court_number3: 3, court_number4: 4, court_number5: 5, court_number6: 6, court_number7: 7, court_number8: 8, court_number9: 9, court_number10: 10)

Court.create(
name: "Meadow Creek Tennis and Fitness Club", address: "6305 W 6th Ave, Denver, CO 80214", phone_number: "(303) 232-6272", open_hour: 6, close_hour:  22, hours: "7AM-10PM", image: "https://www.admin.foundationtennis.com/pages/meadowcreekco/image/platformMC_web.jpg", court_number1: 1,
court_number2: 2, court_number3: 3, court_number4: 4, court_number5: 5, court_number6: 6, court_number7: 7, court_number8: 8, court_number9: 9, court_number10: 10)

Court.create(
name: "Johnson Recreation Center", address: "4809 Race St, Denver, CO 80216", phone_number: "(720) 865-5660", open_hour: 6, close_hour:  20, hours: "10AM-8PM", image: "https://www.denvergov.org/files/assets/public/parks-and-recreation/images/cityparkareial_panarama.jpg?w=480", court_number1: 1,
court_number2: 2, court_number3: 3, court_number4: 4, court_number5: 5, court_number6: 6, court_number7: 7, court_number8: 8, court_number9: 9, court_number10: 10)

Court.create(
name: "Martin Luther King Jr. Recreation Center", address: "3880 Newport St, Denver, CO 80207", phone_number: "(720) 865-0530", open_hour: 6, close_hour:  19, hours: "6AM-7PM", image: "https://cdn.5280.com/2021/05/pickleball-stock-960x567.jpg", court_number1: 1,
court_number2: 2, court_number3: 3, court_number4: 4, court_number5: 5, court_number6: 6, court_number7: 7, court_number8: 8, court_number9: 9, court_number10: 10)

Court.create(
name: "Apex Pickleball Courts", address: "11706 W 82nd Ave, Arvada, CO 80005", phone_number: "n/a", open_hour: 6, close_hour:  22, hours: "6AM-10PM", image: "https://i0.wp.com/pickleballinsider.com/wp-content/uploads/2020/12/Apex-Arvada-CO-1.png?resize=900%2C900&ssl=1", court_number1: 1,
court_number2: 2, court_number3: 3, court_number4: 4, court_number5: 5, court_number6: 6, court_number7: 7, court_number8: 8, court_number9: 9, court_number10: 10)

Court.create(
name: "Cornerstone Park", address: "5150 S Windermere St, Littleton, CO 80120", phone_number: "(303) 953-7625", open_hour: 6, close_hour:  23, hours: "6AM-11PM", image: "https://images.squarespace-cdn.com/content/v1/5445285ae4b03c0c4bd4ea29/1503435243516-ZWR9E9DIM6U6JFVRZ5IS/DJI_0110ra.jpg?format=1000w", court_number1: 1,
court_number2: 2, court_number3: 3, court_number4: 4, court_number5: 5, court_number6: 6, court_number7: 7, court_number8: 8, court_number9: 9, court_number10: 10)

200.times do
  Pickleball.create(
    user_id: User.all.pluck(:id).sample,
    court_id: Court.all.pluck(:id).sample,
    type_of_play: "casual",
    size: 2,
    skill_level: skills.sample,
    time: rand(6..22),
    date: Faker::Date.forward(days: 6),
    court_number_id: rand(1..10),
    user2_id: User.all.pluck(:id).sample,
  )
end

200.times do
  Pickleball.create(
    user_id: User.all.pluck(:id).sample,
    court_id: Court.all.pluck(:id).sample,
    type_of_play: "competitive",
    size: 2,
    skill_level: skills.sample,
    time: rand(6..22),
    date: Faker::Date.forward(days: 6),
    court_number_id: rand(1..10),
    user2_id: User.all.pluck(:id).sample,
  )
end

200.times do
  Pickleball.create(
    user_id: User.all.pluck(:id).sample,
    court_id: Court.all.pluck(:id).sample,
    type_of_play: "practice",
    size: 2,
    skill_level: skills.sample,
    time: rand(6..22),
    date: Faker::Date.forward(days: 6),
    court_number_id: rand(1..10),
    user2_id: User.all.pluck(:id).sample,
  )
end

200.times do
  Pickleball.create(
    user_id: User.all.pluck(:id).sample,
    court_id: Court.all.pluck(:id).sample,
    type_of_play: "practice",
    size: 2,
    skill_level: skills.sample,
    time: rand(6..22),
    date: Faker::Date.forward(days: 6),
    court_number_id: rand(1..10),
   
  )
end


200.times do
  Pickleball.create(
    user_id: User.all.pluck(:id).sample,
    court_id: Court.all.pluck(:id).sample,
    type_of_play: "casual",
    size: 4,
    skill_level: skills.sample,
    time: rand(6..22),
    date: Faker::Date.forward(days: 6),
    court_number_id: rand(1..10),
    user2_id: User.all.pluck(:id).sample,
    user3_id: User.all.pluck(:id).sample,
    user4_id: User.all.pluck(:id).sample
  )
end

200.times do
  Pickleball.create(
    user_id: User.all.pluck(:id).sample,
    court_id: Court.all.pluck(:id).sample,
    type_of_play: "competitive",
    size: 4,
    skill_level: skills.sample,
    time: rand(6..22),
    date: Faker::Date.forward(days: 6),
    court_number_id: rand(1..10),
    user2_id: User.all.pluck(:id).sample,
    user3_id: User.all.pluck(:id).sample,
    user4_id: User.all.pluck(:id).sample
  )
end

200.times do
  Pickleball.create(
    user_id: User.all.pluck(:id).sample,
    court_id: Court.all.pluck(:id).sample,
    type_of_play: "competitive",
    size: 4,
    skill_level: skills.sample,
    time: rand(6..22),
    date: Faker::Date.forward(days: 6),
    court_number_id: rand(1..10),
    user2_id: User.all.pluck(:id).sample,
    user4_id: User.all.pluck(:id).sample
  )
end


200.times do
  Pickleball.create(
    user_id: User.all.pluck(:id).sample,
    court_id: Court.all.pluck(:id).sample,
    type_of_play: "practice",
    size: 4,
    skill_level: skills.sample,
    time: rand(6..22),
    date: Faker::Date.forward(days: 6),
    court_number_id: rand(1..10),
    user2_id: User.all.pluck(:id).sample,
    user3_id: User.all.pluck(:id).sample,
    user4_id: User.all.pluck(:id).sample
  )
end

200.times do
  Pickleball.create(
    user_id: User.all.pluck(:id).sample,
    court_id: Court.all.pluck(:id).sample,
    type_of_play: "practice",
    size: 4,
    skill_level: skills.sample,
    time: rand(6..22),
    date: Faker::Date.forward(days: 6),
    court_number_id: rand(1..10),
    user2_id: User.all.pluck(:id).sample,
    user3_id: User.all.pluck(:id).sample,
    
  )
end