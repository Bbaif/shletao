/**
 * Created by Administrator on 2018/6/25.
 */









if ( location.href.indexOf("login.html") === -1 ) {
  // 如果索引为 -1, 说明在地址栏参数中没有 login.html 需要登陆拦截
  $.ajax({
    type: "get",
    url: "/employee/checkRootLogin",
    dataType: "json",
    success: function( info ) {
      console.log( info );
      if ( info.error === 400 ) {
        // 当前用户没登陆, 拦截到登陆页
        location.href = "login.html";
      }

      if ( info.success ) {
        // 当前用户已登录, 不需要拦截, 啥事都不用干, 让用户访问页面
        console.log( "当前用户已登陆" );
      }
    }
  });
}






// 实现进度条功能 (给 ajax 请求加), 注意需要给所有的 ajax 都加
// 发送 ajax 开启进度条, ajax结束, 关闭进度条

// 开启进度条
//NProgress.start();
//
//setTimeout(function() {
//  // 关闭进度条
//  NProgress.done();
//}, 500);


// ajax 全局事件
// .ajaxComplete()  每个ajax完成时调用, (不管成功还是失败)
// .ajaxSuccess()   每个ajax成功时调用
// .ajaxError()     每个ajax失败时调用
// .ajaxSend()      每个ajax发送前调用

// .ajaxStart()     第一个ajax发送时调用
// .ajaxStop()      所有的ajax请求都完成时调用

// 第一个ajax发送时, 开启进度条
$(document).ajaxStart(function() {
  NProgress.start();
});

// 所有的ajax请求完成时调用, 关闭进度条
$(document).ajaxStop(function() {

  // 模拟网络延迟
  setTimeout(function() {
    NProgress.done();
  }, 500)
});
