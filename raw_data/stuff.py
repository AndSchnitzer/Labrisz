import sys
import unicodedata
#from unidecode import unidecode
import shutil

def unidecode(f):
	return unicodedata.normalize('NFKD', f).encode('ascii','ignore')

def newname(f):
	return "../../data_img/"+f.replace(' ','_').replace('(','').replace(')','').lower()

for p in sys.stdin:
	p=p.strip()
	shutil.copy2(p,newname(p))
