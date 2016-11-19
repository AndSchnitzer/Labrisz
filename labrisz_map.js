
function addMarkers(map)
{
	for(var i=0;i<LABRISZ_DATA.length;i++)
	{
		data_row=LABRISZ_DATA[i];
		console.log(data_row);
		marker=new google.maps.Marker({
			position:data_row["location"],
			map:map
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

