#encoding: utf-8

class Company
  def self.categories
    Category.all
  end
  
  def self.generations
    Generation.all
  end
  
  def self.platforms
    [Platform.new(:name => "")]+Platform.all
  end
end