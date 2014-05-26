json.array!(@coffeeshoplists) do |coffeeshoplist|
  json.extract! coffeeshoplist, :id, :coffeeshopname, :coffeeshopaddress
  json.url coffeeshoplist_url(coffeeshoplist, format: :json)
end
