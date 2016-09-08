require 'open-uri'
require 'rubygems'
require 'nokogiri'

page = Nokogiri::HTML(open("https://prism.com/about/"))
staff_list = page.css('ul.img-container')
staff = staff_list.css('li')

puts "\nThere are " + staff.length.to_s + " people on the Prism team. They are: \n\n"

staff.each do |employee|
  puts employee.css('p')[0].text + ", " + employee.css('p')[1].text
end
