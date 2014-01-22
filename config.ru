# config.ru

require './app'

set :app_file, __FILE__

configure do
  # See: http://www.sinatrarb.com/faq.html#sessions
  enable :sessions
  set :session_secret, ENV['SESSION_SECRET'] || 'this is a secret shhhhh'

  # Set the views to
  set :views, settings.root + '/app/views'
  set :public_folder, File.dirname(__FILE__) + '/public'
end

run Sinatra::Application
