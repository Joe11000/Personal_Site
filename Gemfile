source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.0.0'

# Use sqlite3 as the database for Active Record
gem 'pg'

gem 'gravatar-ultimate'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.0'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'

group :production do
	gem 'rails_12factor'
	gem 'thin'
	# gem 'rails_log_stdout', github: 'heroku/rails_log_stdout'
	# gem 'rails3_serve_static_assets', github: 'heroku/rails3_serve_static_assets'
end
# Use jquery as the JavaScript library
gem 'jquery-rails'
gem 'jquery-ui-rails'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 1.2'

gem 'pg'


group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano', group: :development

	group :development, :test do
	  gem 'rspec-rails'
	  gem 'factory_girl_rails'
	  gem 'shoulda-matchers'
	  gem 'binding_of_caller'
  	gem 'guard-rspec'
	  gem 'faker'
	end

	group :development do
	  gem 'better_errors'
  	gem 'debugger'
	end

	group :test do
  	gem 'capybara'
  	gem 'launchy'
	end

