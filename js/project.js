$(`.project .tab li`).click(function(evevt){
    let $index = $(this).index()
    $(this).addClass('active').siblings().removeClass('active')
    
    $(`.project .content li`).removeClass('active').eq($index).addClass('active')
})