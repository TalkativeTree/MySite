require 'sinatra'
require 'sinatra/activerecord'
require './environments'
require 'sinatra/flash'
require 'sinatra/redirect_with_flash'

get '/stylesheets/:name.css' do
  content_type 'text/css', :charset => 'utf-8'
  sass(:"stylesheets/#{params[:name]}", Compass.sass_engine_options )
end

get "/" do
  @stylesheet = 'home'
  erb :"home"
end

get "/about" do
  @stylesheet = 'about'
  erb :"about"
end

get "/portfolio" do
  @stylesheet = 'portfolio'
  erb :"portfolio"
end