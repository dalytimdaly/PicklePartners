class PickleballsController < ApplicationController



  private

  def pickleball_params
    params.permit(:id, :my_id, :user_id, :court_id, :type_of_play, :size, :skill_level, :time, :date)
  end

end
