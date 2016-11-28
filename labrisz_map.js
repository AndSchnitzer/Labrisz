

function createclosure(i) {
    return function() { select_item(i); };
}
function addMarkers(map)
{
	/*var pink_icon={
		url: 'pink_triangle.png',
		// This marker is 20 pixels wide by 32 pixels high.
		size: new google.maps.Size(32, 30),
		// The origin for this image is (0, 0).
		origin: new google.maps.Point(0, 0),
		// The anchor for this image is the base of the flagpole at (0, 32).
		anchor: new google.maps.Point(16, 16)
	};*/
	var pink_icon="img/pink_triangle_outline_24.png";

	for(var i=0;i<LABRISZ_DATA.length;i++)
	{
		var data_row=LABRISZ_DATA[i];
		console.log(data_row);
		var marker=new google.maps.Marker({
			position:data_row["location"],
			map:map,
			icon:pink_icon
		});
		var p=i;
		marker.addListener('click', createclosure(i));

	}
}

function select_item(id)
{
	console.log(id);
	var data_row=LABRISZ_DATA[id];
	console.log(data_row);
	$('#labrisz_content_title').html(data_row["name"]);
	$('#labrisz_content_subheading').html(data_row["description"]);
	var photos=data_row["photos"];
	var ht='<div id="labrisz_content_image_carousel_r">';
	for(var k=0;k<photos.length;k++)
	{
		var p=photos[k];
		ht+='<div>'
		if(p["img"] != "")
		{
			ht+='<img style="width: 100%" src="data_img/';
			ht+=p["img"];
			ht+='"/>';
		}
		ht+='<p>';
		ht+=p["text"];
		ht+="</p></div>";
	}
	ht+="</div>";
	$('#labrisz_content_image_carousel').empty();
	$('#labrisz_content_image_carousel').html(ht);
	reset_slider();
}

function reset_slider()
{
	$('#labrisz_content_image_carousel_r').slick(
		{dots: true,arrows:true}
	);
}

function labrisz_mapReady() 
{
	var budapest = {lat:47.484585, lng:19.1184723};
	var map = new google.maps.Map(document.getElementById('labrisz_map'), {
		zoom: 12,
		center: budapest
	});
	addMarkers(map);
}

$(document).ready(function()
{
	
});
