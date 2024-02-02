const iwCore = {
    addClassName: function(elem, className) {
        if (elem) {
            var classes = elem.className.split(' '),
                classesToAdd = className.split(' '),
                added = false;
                
                for (var i= 0,l=classesToAdd.length; i<l; i++) {
                    if (!iwCore.hasClass(elem, classesToAdd[i])) {
                        classes.push(classesToAdd[i]);
                        added = true;
                    }
                }
            if (added) {
                elem.className = classes.join(' ');
            }
        }
    },
    removeClassName: function(elem, className) {
        if (elem) {
            var classes = elem.className.split(' '),
                classesToRemove = className.split(' '),
                removed = false;
            for (var i= 0, l=classesToRemove.length; i<l; i++) {
                var index = classes.indexOf(classesToRemove[i]);
                if (index !== -1) {
                    // remove the class from the array
                    classes.splice(index, 1);
                    removed = true;
                }
            }
    
            if (removed) {
                elem.className = classes.join(' ');
            }
        }
    
    },
    hasClass: function(elem, className) {
        return (' ' + elem.className + ' ').indexOf(' ' + className + ' ') > -1;
    },
    toggleClassName: function(elem, className) {

        if (!iwCore.hasClass(elem,className)){
            iwCore.addClassName(elem,className);
        }else{
            iwCore.removeClassName(elem,className);
        }
    
    },
    isChild: function(parent, child) {
        var node = child.parentNode;
        while (node != null) {
            if (node == parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    },
    convertHtmlStringToNodeList: function(HtmlString, targetEl) {	
        var parser = new DOMParser();	
        if(targetEl) {		
            var results = parser.parseFromString(HtmlString, "text/html").body.childNodes;		
            
            while (results[0]) {			
                targetEl.appendChild(results[0]);		
            }	
        } else {		
            return parser.parseFromString(HtmlString, "text/html").body.childNodes;	
        }
    }
};

module.exports = iwCore;