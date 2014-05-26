require 'test_helper'

class CoffeeshoplistsControllerTest < ActionController::TestCase
  setup do
    @coffeeshoplist = coffeeshoplists(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:coffeeshoplists)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create coffeeshoplist" do
    assert_difference('Coffeeshoplist.count') do
      post :create, coffeeshoplist: { coffeeshopaddress: @coffeeshoplist.coffeeshopaddress, coffeeshopname: @coffeeshoplist.coffeeshopname }
    end

    assert_redirected_to coffeeshoplist_path(assigns(:coffeeshoplist))
  end

  test "should show coffeeshoplist" do
    get :show, id: @coffeeshoplist
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @coffeeshoplist
    assert_response :success
  end

  test "should update coffeeshoplist" do
    patch :update, id: @coffeeshoplist, coffeeshoplist: { coffeeshopaddress: @coffeeshoplist.coffeeshopaddress, coffeeshopname: @coffeeshoplist.coffeeshopname }
    assert_redirected_to coffeeshoplist_path(assigns(:coffeeshoplist))
  end

  test "should destroy coffeeshoplist" do
    assert_difference('Coffeeshoplist.count', -1) do
      delete :destroy, id: @coffeeshoplist
    end

    assert_redirected_to coffeeshoplists_path
  end
end
