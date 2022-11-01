class PickleballSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :court_id, :type_of_play, :size, :skill_level, :time, :date
end
