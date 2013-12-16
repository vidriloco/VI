#encoding: utf-8

class Platform
  attr_accessor :name
  
  def initialize(name)
    self.name = name
  end
  
  def identifier
    name.downcase.gsub(' ', '_')
  end
end