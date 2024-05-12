const sidebar_menu_element = document.getElementById("sidebar");

const sidebar_elements = [
`<div class="sidebar_button" onclick="window.location = 'https://superkryston.github.io/'"><label>Home</label></div>`,
`<div class="sidebar_button" onclick="window.location = 'https://www.appsheet.com/start/d8eb3668-6bc6-4736-b86c-6d91fdd35f58'"><label>Appsheet Store</label></div>`

]

sidebar_elements.forEach((item, index) => {
    sidebar_menu_element.innerHTML = sidebar_menu_element.innerHTML + item;
    //console.log(item, index);
});
 

const sidebar_menu_button_open = document.getElementById("sidebar_menu_button_open");

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