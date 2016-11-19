import csv
import json
import sys

with open(sys.argv[1],'rb') as csvfile:
	reader=csv.DictReader(csvfile,fieldnames=["name","location","address","description","photo","photofile","year"])
	out=list(reader)
	for p in out:
		llstr=p['location'].split(',')
		
		loc={'lat':float(llstr[0]),'lng':float(llstr[1])}
		p['location']=loc
	jsonstr=json.dumps(out,sort_keys=True,indent=4, separators=(',', ': '))
	woutf=open('labrisz_data.js','w');
	woutf.write("var LABRISZ_DATA=%s;" % (jsonstr))
	
