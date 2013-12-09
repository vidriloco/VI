#encoding: utf-8

class Company
  def self.categories
    ["Salud", "Movilidad", "Finanzas", "Comercio Electrónico"].map { |item| Category.new(item) }
  end
  
  def self.generations
    (1...20).to_a.map { |item| Generation.new(item) }
  end
end