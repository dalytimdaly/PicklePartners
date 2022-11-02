class CourtsController < ApplicationController

  def index
    render json: Court.all
  end
  
  def show
    court = Court.find(params[:id])
  end

  def create
    court = Court.create!(court_params)
    render json: court, status: :created
  end

  def destroy
    court = Court.find(params[:id])
    court.destroy
    render json: {}, status: :accepted
  end

  def update
    court = Court.find(params[:id])
    if court.update(court_params)
      render json: court, status: :accepted
    else
      render json: { errors: court.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private

  def court_params
    params.permit(:id, :name, :address, :phone_number, :hours, :reservation6, :reservation7, :reservation8, :reservation9, :reservation10, :reservation11, :reservation12, :reservation13, :reservation14, :reservation15, :reservation16, :reservation17, :reservation18, :reservation19, :reservation20, :reservation21,  :reservation22)
  end

end
