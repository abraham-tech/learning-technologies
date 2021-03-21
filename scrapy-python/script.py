import scrapy

#Example news spider spider
class NewsSpider(scrapy.Spider):
    name = 'news'

#selector for links
links = response.xpath('//a/@href')

#selector for divs
divs = response.xpath('//div')

#selector for paragraph
paragraph = response.xpath('//p/')


#Example Item class
class Article(scrapy.Item):
    headline = scrapy.Field()
