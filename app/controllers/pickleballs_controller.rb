class PickleballsController < ApplicationController

  def index
    if(params[:my_id])
      pickles = User.find(params[:my_id]).pickleballs
    end
    if(params[:q])
      pickles = Pickleball.where(:court_id => (params[:q]))
    end
    render json: pickles
  end
  
  
  def show
    pickle = Pickleball.find(params[:id])
    render json: pickle, status: :ok
  end

  def create
    pickle = Pickleball.create(pickleball_params)
    if pickle.valid?
      render json: pickle, status: :created
    else
      render json: { errors: pickle.errors.full_messages }, status: :unprocessable_entity
    end
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
    params.permit(:id, :my_id, :user_id, :court_id, :court_number_id, :type_of_play, :size, :skill_level, :time, :date, :user2_id, :user3_id, :user4_id)
  end

end
