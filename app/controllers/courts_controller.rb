class CourtsController < ApplicationController

  def index
    render json: Court.all
  end
  
  def show
    court = Court.find(params[:id])
    render json: court, status: :accepted
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
    params.permit(:id, :name, :address, :phone_number, :hours, :image, :court_number1,
    :court_number2, :court_number3, :court_number4, :court_number5, :court_number6, :court_number7, :court_number8, :court_number9, :court_number10)
  end

end
