class CreateCoffeeshoplists < ActiveRecord::Migration
  def change
    create_table :coffeeshoplists do |t|
      t.string :coffeeshopname
      t.string :coffeeshopaddress

      t.timestamps
    end
  end
end
