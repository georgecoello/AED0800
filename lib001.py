class HTMLUL: 
    def __init__(self): 
        pass 
    def convert(self, array): 
        html = []
        for element in array: 

            if(not isinstance(element, list)): 
                html.append("<li>%s</li>"%(element))
            else: 
                html.append("<li>%s</li>"%(self.convert(element)))
        
        return "<ul>%s</ul>"%("".join(html))