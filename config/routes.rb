PersonalSite::Application.routes.draw do
  get '/',                 to: 'home#index'
  get '/download_resume',  to: "home#download_resume"
  root 'home#index'
end
