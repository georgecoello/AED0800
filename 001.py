from lib001 import * 

list = HTMLUL()
content = list.convert(["Hola ",2,[3,4,5],6,7])

f = open("001content.html","w")
f.write(content)
f.close()
