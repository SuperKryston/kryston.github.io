const header_left_element = document.getElementById("header_left");

const header_left_elements = [
`<img style="padding-left: 20px;" width="50" height="50" src="https://superkryston.github.io/assets/button/menu.svg" alt="Menu Bar.png" v:shapes="Picture_x0020_0" id="sidebar_menu_button_open">`,
`<img style="padding-left: 20px;" width="50" height="50" src="https://superkryston.github.io/assets/logo/K_Border2.svg" alt="K-Logo.png" v:shapes="Picture_x0020_0">`,
`<label style="font-size: 35px; padding-bottom: 7px;">Gun Gen</label>`

]

header_left_elements.forEach((item, index) => {
    header_left_element.innerHTML = header_left_element.innerHTML + item;
});








const header_right_element = document.getElementById("header_right");

const header_right_elements = [
`<a href="https://mcpedl.com/user/kryston/"><div class="page_layout_header_right_button_element_body"><img height="40" src="https://mcpedl.com/favicon.ico" alt="MCPEDL Logo"></div></a>`,
`<a href="https://www.youtube.com/channel/UCj2Q1omyKPmY-dzCuJa6Ggg"><div class="page_layout_header_right_button_element_body"><img height="30" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/512px-YouTube_full-color_icon_%282017%29.svg.png?20240107144800" alt="Youtube Logo"></div></a>`,
`<a href="https://discord.gg/jB7qcVwhMr"><div class="page_layout_header_right_button_element_body"><img height="30" src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg" alt="Discord Logo"></div></a>`

]

header_right_elements.forEach((item, index) => {
    header_right_element.innerHTML = header_right_element.innerHTML + item;
});