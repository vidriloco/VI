class CreateGenerations < ActiveRecord::Migration
  def change
    create_table :generations do |t|
      t.integer       :number
      t.timestamps
    end
  end
end
