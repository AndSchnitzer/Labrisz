
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
		data_row=LABRISZ_DATA[i];
		console.log(data_row);
		marker=new google.maps.Marker({
			position:data_row["location"],
			map:map,
			icon:pink_icon
		});
	}
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

