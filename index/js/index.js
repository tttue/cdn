$(document).ready(function(){
	if (window.screen.width<768){
		$("tr.dir").each(function () {
			//$this = $(this);
			this.children[1].children[0].text = "<Dir>"
			this.children[2].children[0].text = "<Dir>"
		})
	}
});