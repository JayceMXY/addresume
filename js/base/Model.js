window.Model = function (options) {
    let resourceName = options.resourceName
    return {
        init: function () {
            var APP_ID = 'yvo6wYG1D58fwLvRb0WrLT8E-gzGzoHsz'
            var APP_KEY = 'cFbBlNOs359M9dTYX4RkKh51'
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
        fetch: function () {
            var query = new AV.Query(resourceName);
            var now = new Date()
            query.lessThanOrEqualTo('createdAt', now);
            query.limit(6);
            query.descending('createdAt');
            return query.find() //promise对象
        },
        //创建数据
        save: function (object) {
            var X = AV.Object.extend(resourceName);
            var x = new X();
            return x.save(object)
        }
    }
}