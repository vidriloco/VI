module ApplicationHelper
  def complete_url(url)
    url.gsub(/^www/, "http://www")
  end
  
  def twitter_url_for(string)
    "http://www.twitter.com/#{string}"
  end
end
