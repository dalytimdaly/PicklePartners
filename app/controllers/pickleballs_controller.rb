class PickleballsController < ApplicationController

  def index
    pickles = Pickleball.all
    if(params[:my_id])
      pickles = User.find(params[:my_id]).pickles
    end
    if(params[:q])
      pickles = Pickleball.all.filter do |pickle|
        pickle.court_id(params[:q])
      end
    end
  end
  
  
  def show
    pickle = Pickleball.find(params[:id])
  end

  def create
    pickle = Pickleball.create!(pickleball_params)
    render json: pickle, status: :created
  end

  def destroy
    pickle = Pickleball.find(params[:id])
    pickle.destroy
    render json: {}, status: :accepted
  end

  def update
    pickle = Pickleball.find(params[:id])
    if pickle.update(pickleball_params)
      render json: pickle, status: :accepted
    else
      render json: { errors: pickle.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private

  def pickleball_params
    params.permit(:id, :my_id, :user_id, :court_id, :type_of_play, :size, :skill_level, :time, :date)
  end

end
