const sidebar_menu_element = document.getElementById("sidebar");

sidebar_menu_element.innerHTML = `
      <div style="display: flex;align-items: center;align-content: center; padding-top: 20px; background: #797979; padding-bottom: 20px;">
        <img style="padding-left: 20px;" width="50" height="50" src="https://superkryston.github.io/assets/button/arrow_left_dark.svg" alt="Menu Bar.png" v:shapes="Picture_x0020_0" id="sidebar_menu_button_close">
        <img style="padding-left: 20px;" width="50" height="50" src="https://superkryston.github.io/assets/logo/K_Border2.svg" alt="K-Logo.png" v:shapes="Picture_x0020_0">
        <label style="font-size: 35px; padding-bottom: 7px;">ryston</label>
      </div>
`

const sidebar_elements = [
`<div class="sidebar_button" onclick="window.location = 'https://superkryston.github.io/'"><label>Home</label></div>`,
`<div class="sidebar_button" onclick="window.location = 'https://www.appsheet.com/start/d8eb3668-6bc6-4736-b86c-6d91fdd35f58'"><label>Appsheet Store</label></div>`,
`<div class="sidebar_button" onclick="window.location = 'https://superkryston.github.io/donate'"><label>Donate</label></div>`

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