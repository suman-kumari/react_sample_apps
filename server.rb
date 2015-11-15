require 'webrick'
require 'json'

port = ENV['PORT'].nil? ? 3000 : ENV['PORT'].to_i

puts "Server started: http://localhost:#{port}/"

root = File.expand_path './public'
# root = File.expand_path './udemy_tuto'

server = WEBrick::HTTPServer.new Port: port, DocumentRoot: root

server.mount_proc '/api/comments' do |req, res|
  comments = JSON.parse(File.read('./comments.json', encoding: 'UTF-8'))

  if req.request_method == 'POST'
    # Assume it's well formed
    comment = {}
    req.query.each do |key, value|
      comment[key] = value.force_encoding('UTF-8')
    end
    comments << comment
    File.write(
      './comments.json',
      JSON.pretty_generate(comments, indent: '    '),
      encoding: 'UTF-8'
    )
  end

  # always return json
  res['Content-Type'] = 'application/json'
  res['Cache-Control'] = 'no-cache'
  res.body = JSON.generate(comments)
end

trap('INT') { server.shutdown }

server.start
