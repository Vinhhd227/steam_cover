//Sidebar 
function sb_open() {
  sidebarAnimation(1);
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("overflow").style.overflow = "hidden";
  document.getElementById("overlay").style.display = "block";

}

function sb_close(event) {
  var mouseClickWidth = event.clientX;
  if (mouseClickWidth >= 280) {
    sidebarAnimation(-1);
    document.getElementById("overflow").style.overflow = "scroll";
    document.getElementById("overlay").style.display = "none";
  }
}

document.addEventListener("click", sb_close);

function sidebarAnimation(act) {
  let pos = 0;
  let id = null;
  const elem = document.getElementById("sidebar");
  clearInterval(id);
  if (act === 1) {
    pos = -280;
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
      } else {
        pos += 10;
        elem.style.left = pos + "px";
        console.log(pos);
      }
    }
  }
  if (act === -1) {
    pos = 0;
    id = setInterval(frame, 5);
    function frame() {
      if (pos == -280) {
        clearInterval(id);``
      } else {
        pos -= 10;
        elem.style.left = pos + "px";
      }
    }
  }
}
//tab_script
function showTabPreview(x) {
  let index = x.id.substr(x.id.length - 1);
  document.getElementById("tab_preview_" + index).style.display = "block";
}

function hideTabPreview(x) {
  let index = x.id.substr(x.id.length - 1);
  document.getElementById("tab_preview_" + index).style.display = "none";}