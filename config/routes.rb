PersonalSite::Application.routes.draw do
  get '/',                 					to: 'homes#index'
  get '/download_resume',  					to: "homes#download_resume"
  get '/get_images_for_slide_show', to: "homes#get_images_for_slide_show", as: :get_images_for_slide_show
  root 'homes#index'
end
