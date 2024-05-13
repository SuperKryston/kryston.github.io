const header_left_element = document.getElementById("header_left");

const header_left_elements = [
`<img style="padding-left: 20px;" width="50" height="50" src="assets/button/menu.svg" alt="Menu Bar.png" v:shapes="Picture_x0020_0" id="sidebar_menu_button_open">`,
`<img style="padding-left: 20px;" width="50" height="50" src="assets/logo/K_Border2.svg" alt="K-Logo.png" v:shapes="Picture_x0020_0">`,
`<label style="font-size: 35px;">ryston</label>`

]

header_left_elements.forEach((item, index) => {
    header_left_element.innerHTML = header_left_element.innerHTML + item;
});








const header_right_element = document.getElementById("header_right");

const header_right_elements = [
`<a href="https://mcpedl.com/user/kryston/"><div style="display: grid; width:80px; height:70px; padding: 3px; border: 2px solid black; border-radius: 10px; justify-items: center;"><img width="40" height="40" src="https://mcpedl.com/favicon.ico" alt="MCPEDL Logo"><label style="color:black; text-decoration:none;">MCPEDL</label></div></a>`,
`<a href="https://www.youtube.com/channel/UCj2Q1omyKPmY-dzCuJa6Ggg"><div style="display: grid; width:80px; height:70px; padding: 3px; border: 2px solid black; border-radius: 10px; justify-items: center;"><img width="40" height="40" src="https://youtube.com/favicon.ico" alt="Youtube Logo"><label style="color:black; text-decoration:none;">Youtube</label></div></a>`,
`<a href="https://discord.gg/jB7qcVwhMr"><div style="display: grid; width:80px; height:70px; padding: 3px; border: 2px solid black; border-radius: 10px; justify-items: center;"><img width="40" height="40" src="https://assets-global.website-files.com/5f8dd67f8fdd6f51f0b50904/60ae916347747e71167e21cc_favicon.png" alt="Discord Logo"><label style="color:black; text-decoration:none;">Discord</label></div></a>`

]

header_right_elements.forEach((item, index) => {
    header_right_element.innerHTML = header_right_element.innerHTML + item;
});