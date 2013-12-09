#encoding: utf-8

class Generation
  attr_accessor :number
  
  def initialize(number)
    self.number = number
  end
  
  def name
    "Generación #{number}"
  end
  
  def identifier
    "generation_#{number}"
  end
end