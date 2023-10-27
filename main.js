$(document).ready(function () {
  const $cursor = $(".cursor");
  const $holes = $(".hole");
  const $scoreEl = $(".score span");
  let score = 0;

  const sound = new Audio("assets/smash.mp3");

  function run() {
    const i = Math.floor(Math.random() * $holes.length);
    const $hole = $holes.eq(i);
    let timer = null;

    const $img = $("<img>");
    $img.addClass("mole");
    $img.attr("src", "assets/taupe.png");

    $img.on("click", () => {
      score += 10;
      sound.play();
      $scoreEl.text(score);
      $img.attr("src", "assets/smackMole.png");
      clearTimeout(timer);
      setTimeout(() => {
        $hole.empty();
        run();
      }, 500);
    });

    $hole.append($img);

    timer = setTimeout(() => {
      $hole.empty();
      run();
    }, 1500);
  }
  run();

  $(document).on("mousemove", (e) => {
    $cursor.css({
      top: e.pageY + "px",
      left: e.pageX + "px",
    });
  });

  $(document).on("mousedown", () => {
    $cursor.addClass("active");
  });

  $(document).on("mouseup", () => {
    $cursor.removeClass("active");
  });
});
