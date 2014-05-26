class CoffeeshoplistsController < ApplicationController
  before_action :set_coffeeshoplist, only: [:show, :edit, :update, :destroy]

  # GET /coffeeshoplists
  # GET /coffeeshoplists.json
  def index
    @contact = Contact.new
  end

  # GET /coffeeshoplists/1
  # GET /coffeeshoplists/1.json
  def show
  end

  # GET /coffeeshoplists/new
  def new
    @coffeeshoplist = Coffeeshoplist.new
  end

  # GET /coffeeshoplists/1/edit
  def edit
  end

  # POST /coffeeshoplists
  # POST /coffeeshoplists.json
  def create
    @coffeeshoplist = Coffeeshoplist.new(coffeeshoplist_params)

    respond_to do |format|
      if @coffeeshoplist.save
        format.html { redirect_to @coffeeshoplist, notice: 'Coffeeshoplist was successfully created.' }
        format.json { render :show, status: :created, location: @coffeeshoplist }
      else
        format.html { render :new }
        format.json { render json: @coffeeshoplist.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /coffeeshoplists/1
  # PATCH/PUT /coffeeshoplists/1.json
  def update
    respond_to do |format|
      if @coffeeshoplist.update(coffeeshoplist_params)
        format.html { redirect_to @coffeeshoplist, notice: 'Coffeeshoplist was successfully updated.' }
        format.json { render :show, status: :ok, location: @coffeeshoplist }
      else
        format.html { render :edit }
        format.json { render json: @coffeeshoplist.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /coffeeshoplists/1
  # DELETE /coffeeshoplists/1.json
  def destroy
    @coffeeshoplist.destroy
    respond_to do |format|
      format.html { redirect_to coffeeshoplists_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_coffeeshoplist
      @coffeeshoplist = Coffeeshoplist.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def coffeeshoplist_params
      params.require(:coffeeshoplist).permit(:coffeeshopname, :coffeeshopaddress)
    end
end
