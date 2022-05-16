$(function () {
  // padding内側の横幅を取得し、変数に格納
  const w = $(".l-contents_main_article_new_img").height();

  // コンソールログに表示
  console.log(w);

  const change_W = w + 80;

  console.log(change_W);

  jQuery(".l-contents").css("height", change_W);
});
