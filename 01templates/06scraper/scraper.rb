# 'require' is like linking to a library; this is where you preload all the Ruby 'gems' — pre-written Ruby code with methods you can use — before you start writing your scraper

# nokogiri is a scraping gem
require 'nokogiri'
# open-uri allows you to open html pages and web sites
require 'open-uri'
# this allows you to open and write comma-separated values files 
require 'csv'

# open html
url ="https://en.wikipedia.org/wiki/List_of_animated_short_films"

# load URL into Nokogiri for parsing and downloading page into csv
data = Nokogiri::HTML(open(url))

# target data using css selectors
rows = data.css('tr')

# open a csv file for data to be dumped into
csv = CSV.open("films.csv", "wb")


# method for rows and items
rows.each do |row|
	# creates an array
	array = []
	# get me each item in the table
	items = row.css('td')

	items.each do |item|
		# take the text of each row item and put it in my array
		array << item.text
	end
		
	# put array into csv
	csv << array
end


csv.close