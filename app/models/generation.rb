#encoding: utf-8

class Generation < ActiveRecord::Base
  attr_accessible :number
  
  def name
    "Generación #{number}"
  end
  
  def identifier
    "generation_#{number}"
  end
end