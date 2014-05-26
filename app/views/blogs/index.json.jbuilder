json.array!(@blogs) do |blog|
  json.extract! blog, :id, :email
  json.url blog_url(blog, format: :json)
end
