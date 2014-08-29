class HomeController < ActionController::Base
	def index
		# @url = Gravatar.new("JoeNoonan27@gmail.com").image_url
		# @url = "http://i884.photobucket.com/albums/ac41/jgnoonan27/1_zpse7b88fbb.jpg";
	end

	def download_resume
      send_file "app/assets/pdfs/Joe_Noonan_Resume.pdf"
	end
end
