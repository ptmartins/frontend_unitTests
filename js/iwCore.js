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
    hasClass: function(elem, className) {
        return (' ' + elem.className + ' ').indexOf(' ' + className + ' ') > -1;
    }
};

module.exports = iwCore;