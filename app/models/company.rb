#encoding: utf-8

class Company
  def self.categories
    ["Movilidad", "Servicios Financieros", "Servicios de Salud", "Big Data", "E-Commerce", "Educación", "Tecnología aplicada a servicios"].map { |item| Category.new(item) }
  end
  
  def self.generations
    (1...7).to_a.map { |item| Generation.new(item) }
  end
  
  def self.platforms
    [String.new, "Transformadora Ciel", "Posible"].map { |item| Platform.new(item) }
  end
end