# config.ru

require './app'

set :app_file, __FILE__

configure do
  set :views, settings.root + '/app/views'
  set :public_folder, File.dirname(__FILE__) + '/public'
  Compass.add_project_configuration(File.join(Sinatra::Application.root, 'config', 'compass.config'))
end

run Sinatra::Application
