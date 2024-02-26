 const wordlist = [
        "חח לא",
        "חח כן",
        "חח אולי",
        "ברמת העיקרון לא",
        "לא יכול לחזות כרגע",
        "אל תבני על זה",
        "חבר שלך ידע",
        "תחזרי מאוחר יותר",
        "🤷",
        "העיקר שחבר שלך אוהב אותך",
        "תנסי קודם לחבק את אופק"
    ];

    
document.getElementById('shakeButton').addEventListener('click', function() {
    document.getElementById('magic8ball').classList.add('shake-animation');
    setTimeout(function () {
        document.getElementById('magic8ball').classList.remove('shake-animation');
        animate();

    }, 500); // Adjust the duration as needed
});

function buildSlotItem (text) {
    return $('<div>').addClass('slottt-machine-recipe__item')
                     .text(text)
}  
  
  function buildSlotContents ($container, wordlist) {
        $items = wordlist.map(buildSlotItem);
        $container.append($items);
  }
  
  function popPushNItems ($container, n) {
      $children = $container.find('.slottt-machine-recipe__item');
      $children.slice(0, n).insertAfter($children.last());
  
      if (n === $children.length) {
        popPushNItems($container, 1);
      }
  }
  
  // After the slide animation is complete, we want to pop some items off
  // the front of the container and push them onto the end. This is
  // so the animation can slide upward infinitely without adding
  // inifinte div elements inside the container.
  function rotateContents ($container, n) {
      setTimeout(function () {
        popPushNItems($container, n);
        $container.css({top: 0});
      }, 300);    
  }
  
  function randomSlotttIndex(max) {
    return Math.floor(Math.random() * max);
 }
  
    
    
  function animate() {
    var wordIndex = randomSlotttIndex(wordlist.length);
    $wordbox.animate({top: -wordIndex*150}, 500, 'swing', function () {
      rotateContents($wordbox, wordIndex);
    });
  }
  
  $(function () {
    $wordbox = $('#wordbox .slottt-machine-recipe__items_container');
    buildSlotContents($wordbox, wordlist);  
    buildSlotContents($wordbox, wordlist);  
    buildSlotContents($wordbox, wordlist);  
    buildSlotContents($wordbox, wordlist);  
    
  });