class Ordering < ActiveRecord::Base
  attr_accessible :identifier, :position
  validates_uniqueness_of :position
end
