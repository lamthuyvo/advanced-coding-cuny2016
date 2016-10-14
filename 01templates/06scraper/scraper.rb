# nokogiri
require 'nokogiri'

require 'open-uri'

require 'csv'

# open html
url ="https://en.wikipedia.org/wiki/List_of_animated_short_films"

# loac URL into Nokogiri for parscing and downloading page into csv
data = Nokogiri::HTML(open(url))

# target data using css selectors
rows = data.css('tr')

# open a csv file for data to be dumped into
csv = CSV.open("dates.csv", "wb")


# method for messages

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