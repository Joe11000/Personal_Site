PersonalSite::Application.routes.draw do
  get '/', to: 'homes#index'
  get '/download_resume', to: "homes#download_resume"
  root 'homes#index'
end
