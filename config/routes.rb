Rails.application.routes.draw do
  resources :pickleballs
  resources :courts
  resources :users

  post '/login', to:'sessions#create'
  delete '/destroy', to: 'sessions#destroy'
  
  get '/me', to:'users#showme'
  post '/signup', to: 'users#create'

  post '/setavatar', to: 'users#set_avatar'

end

