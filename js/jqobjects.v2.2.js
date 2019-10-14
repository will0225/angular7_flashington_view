/* J Objects
 * A better way to write Javascript
 * Version : 2.1
 */

//Turn On Function Logging "this will log to the console every function that's called as they are called
var EnableJOjectFunctionLoggin = false;

var BaseJObject = function () {
    this.html = {};
    this.objectName = null;
    this.ShowHtmlBindings = function () {
        var container = $("<div></div>").appendTo("body");
        var peakLables = [];
        var collision = function ($div1, $div2) {
            var x1 = $div1.offset().left;
            var y1 = $div1.offset().top;
            var h1 = $div1.outerHeight(true);
            var w1 = $div1.outerWidth(true);
            var b1 = y1 + h1;
            var r1 = x1 + w1;
            var x2 = $div2.offset().left;
            var y2 = $div2.offset().top;
            var h2 = $div2.outerHeight(true);
            var w2 = $div2.outerWidth(true);
            var b2 = y2 + h2;
            var r2 = x2 + w2;

            if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
            return true;
        }

        for (prop in this.html) {
            //get cords
            var cords = this.html[prop].offset();
            cords.top -= 17;
            var label = $('<div class="jqobjectPeakLabel">' + prop + '</div>').appendTo(container).offset(cords);;

            var collisionCount = 0;

            if (peakLables.length > 0)
                for (var i = 0; i < peakLables.length; i++) {
                    if (collision(peakLables[i], label)) {
                        cords.top -= 25;
                        collisionCount++;
                    }
                }


            label.offset(cords);
            peakLables.push(label);
            var pointerHeight = 17 + (25 * collisionCount)
            $('<div class="jqobjectPeakPointer"></div>').appendTo(container).offset(cords).css("height", pointerHeight);
        }


    }


    this.CheckHtmlBindings = function () {
        //little reflection magic to check each html property for an object
        for (prop in this.html) {
            if (this.html[prop].length == 0)
                console.warn(" jqobject: Couldn't find any bindings for " + this.objectName + ".html." + prop + ", please check the selector");
        }
    }
}


//This is used to wrap function, it basically logs to the console which functions are called as they are called
//NOTE there is a argument limit of 20, if 20 because a major issue, need to use the getArgs function to build out a dynamically  created excute function
var FunctionWrapper = function () {
    var self = this;
    this.theFunction = null;
    this.functionName = null;
    this.objectName = null;

    this.getArgs = function (func) {
        return (func + '').replace(/\s+/g, '')
            .replace(/[/][*][^/*]*[*][/]/g, '') // strip simple comments
            .split('){', 1)[0].replace(/^[^(]*[(]/, '') // extract the parameters
            .replace(/=[^,]+/g, '') // strip any ES6 defaults
            .split(',').filter(Boolean); // split & filter [""]
    }

    this.execute = function (p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20) {
        //build arguments string for console log output

        var args = self.getArgs(self.theFunction);
        var argsString = "";
        if (args != null && args.length > 0) {
            args.forEach(function (arg) {
                argsString += (arg + ", ");
            });

            argsString = argsString.substring(0, argsString.length - 2);
        }


        console.log("Excuted Function:  jqobject." + self.objectName + "." + self.functionName + "(" + argsString + "); ");

        if (typeof self.theFunction == 'function')
            self.theFunction.call(jqobject[self.objectName], p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20);
    }
}


var jqobject = new function () {
    var self = this;
    this.Create = function (nameOrObject, jqobject, container) {
        //Determine if only a object was passed in, or if they passed a name
        var name = "Generic" + (this.All.length + 1);
        if (typeof nameOrObject == "string")
            name = nameOrObject;
        else
            jqobject = nameOrObject; //this means they just passed an object in

        //Add the Base Object
        jqobject.prototype = new BaseJObject(this.All);

        //Create the html object
        var theObject;
        try {
            if(typeof container == "undefined")
                theObject = new jqobject(jqobject.prototype.html);
            else
                theObject = new jqobject($(container), jqobject.prototype.html);
        } catch (error) {
            console.log("jqobject: Error while Creating " + name + " : " + error);
            return null;
        }

        //Extend jqobject with the new jqobject
        self[name] = theObject;

        //Set the object name
        theObject.objectName = name;

        //wrap all jqobject functions with a wrapper that allows the user to see in the console as functions are called
        if (EnableJOjectFunctionLoggin)
            for (var key in theObject) {
                if (typeof theObject[key] !== "function" || key == "CheckHtmlBindings")
                    continue;

                //setup function wrapper
                var functionWrapper = new FunctionWrapper();
                functionWrapper.objectName = name;
                functionWrapper.functionName = key;
                functionWrapper.theFunction = theObject[key];

                //replace object function with function wrapper
                theObject[key] = functionWrapper.execute;
            }

        //check  if their is an OOP constructor aka the init function, and run it
        if (typeof theObject.init == 'function')
            theObject.init();

        //Check html bindings
        theObject.CheckHtmlBindings();

        //Add to the html objects
        this.All.push(theObject);

        return theObject;
    }

    this.CreateFor = function (nameOrObject, selector, jqobject) {
        if (typeof selector == "undefined") {
            console.log("jqobject: Please pass in a selector for CreateForEach");
            return;
        }

        var elms = $(selector);
        if (elms.length == 0) {
            console.log("jqobject: Couldn't find any elements for " + nameOrObject);
        }

        if (typeof nameOrObject != "string")
            nameOrObject = "Generic";

        if(elms.length == 1)
            this.Create(nameOrObject, jqobject, elms[0]);
        else
        //foreach through elements and create an jqobject for each
            for (var i = 0; elms.length > i; i++) {
                this.Create(nameOrObject + (i + 1), jqobject, elms[i]);
            }
    }

    this.All = [];
}

var jqo = jqobject;