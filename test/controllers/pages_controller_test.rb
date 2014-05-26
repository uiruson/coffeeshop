require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get coffeeshopguides" do
    get :coffeeshopguides
    assert_response :success
  end

end
