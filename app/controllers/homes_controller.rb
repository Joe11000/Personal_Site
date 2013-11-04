class HomesController < ActionController::Base
	def index
	end

	def download_resume
   send_file "app/assets/pdfs/WebDeveloperResume.pdf"
	end
end