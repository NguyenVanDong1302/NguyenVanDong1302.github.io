var total_records = 100;
var perpage = 10;
var total_pages = total_records / perpage;

$(document).ready(function(){
	var pagenum = 1;
    createpagination(pagenum);
	// fetch_data(perpage,pagenum);
    showData(products, data)
});


function createpagination(pagenum){
		$("#page_container").html("");
		
		if(pagenum == 1){
			$("#page_container").append("<li class='page-item disabled previous'><a href='javascript:void(0)' class='page-link'><</a></li>");
		}else{
			$("#page_container").append("<li class='page-item' onclick='makecall("+(pagenum-1)+")'><a href='javascript:void(0)' class='page-link'><</a></li>");
		}
		
		var i=0;
		for(i=0; i <= 2; i++){
			if(pagenum == (pagenum+i)){
				$("#page_container").append("<li class='page-item disabled'><a href='javascript:void(0)' class='page-link'>"+(pagenum+i)+"</a></li>");
			}else{
				if((pagenum+i)<=total_pages){
                    $("#page_container").append("<li class='page-item' onclick='makecall("+(pagenum+i)+")'><a href='javascript:void(0)' class='page-link'>"+(pagenum+i)+"</a></li>");					
				}
			}
		}
		
		if(pagenum == total_pages){
			$("#page_container").append("<li class='page-item disabled'><a href='javascript:void(0)' class='page-link'>></a></li>");
		}else{
			$("#page_container").append("<li class='page-item next' onclick='makecall("+(pagenum+1)+")'><a href='javascript:void(0)' class='page-link'>></a></li>");
		}
}



function makecall(pagenum){
	createpagination(pagenum);
	// fetch_data(perpage,pagenum);
    showData(products, data)
}
