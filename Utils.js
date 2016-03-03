var Utils = function() {
    var result =  {
        /**
         * 寄生继承
         * @param  {[type]} obj [父类]
         * @return {[type]}     [子类对象]
         */
        object: function(obj) {
            function F() {}
            F.prototype = obj;

            return new F();
        }, 

        /**
         * 继承原型
         * @return {[type]} [description]
         */
        inheritPrototype: function(subType, superType) {
            //创建对象取得supertype副本
            var prototype = this.object(superType.prototype); 
            prototype.constructor = subType;
            subType.prototype = prototype;
        }
    };

    return result;

}();
