class HomesController < ActionController::Base
	def index
	end

	def download_resume
		send_file '/assets/pdfs/WebDeveloperResume.pdf', :type=>"application/pdf", :x_sendfile=>true
	end
end