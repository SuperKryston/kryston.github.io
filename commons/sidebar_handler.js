


const sidebar_menu_button_open = document.getElementById("sidebar_menu_button_open");
const sidebar_menu_element = document.getElementById("sidebar");



sidebar_menu_button_open.addEventListener('click', (event)=> { 
  var flyout = 300;
  sidebar_menu_element.style.width = flyout;


  sidebar_menu_element.style.left = 0;
 // for (let i = 0; i < flyout; i++) {
 //     sidebar_menu_element.style.width = i;
 // }
})

sidebar_menu_button_close.addEventListener('click', (event)=> { 
  sidebar_menu_element.style.left = -300;
})

sidebar_menu_button_open.addEventListener('contextmenu', (event)=> { 
    event.preventDefault();
    window.location = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`;
})