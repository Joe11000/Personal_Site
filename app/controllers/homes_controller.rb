class HomesController < ActionController::Base
	def index
		@url = Gravatar.new("JoeNoonan27@gmail.com").image_url
		# debugger
	end

	def download_resume
   send_file "app/assets/pdfs/WebDeveloperResume.pdf"
	end
end