class HomesController < ActionController::Base
	def index
		@url = Gravatar.new("JoeNoonan27@gmail.com").image_url
	end

	def download_resume
   send_file "app/assets/pdfs/Joe_Noonan_Resume.pdf"
	end
end