class Category < ActiveRecord::Base
  attr_accessible :name
  
  def identifier
    name.downcase.gsub(' ', '_')
  end
end
