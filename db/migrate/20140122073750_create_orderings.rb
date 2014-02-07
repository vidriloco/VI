class CreateOrderings < ActiveRecord::Migration
  def change
    create_table :orderings do |t|
      t.string        :identifier
      t.integer       :position
      t.timestamps
    end
  end
end
