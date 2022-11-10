class CourtSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :phone_number, :open_hour, :close_hour, :hours, :image, :court_number1,
  :court_number2, :court_number3, :court_number4, :court_number5, :court_number6, :court_number7, :court_number8, :court_number9, :court_number10
end
