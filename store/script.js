const content_containers_element = document.getElementById("content_containers");

const app_content = [
{
  name: "GTA SA Hud",
  type: "MCPEDL Content",
  version: "v2.0",
  back_image: "https://my.mcpedl.com/storage/addons/1251/images/gta-sa-hud-beta-006_2.png",
  icon_image: "https://superkryston.github.io/assets/logo/K_Border2.svg",
  description:"Customize your game to have a more closer look to GTA San Andreas",
  redirect: "https://mcpedl.com/gta-sa-hud-pack/"
}


]




app_content.forEach((item, index) => {
  var back_image = item.back_image
  if (item.back_image == "" || item.back_image == null) {
    back_image = "blank.svg"
  }

  var icon_image = item.icon_image
  if (item.icon_image == "" || item.icon_image == null) {
    icon_image = "blank.svg"
  }

    var content_div_element = `
<div class="grid-item" onclick='window.location = "${item.redirect}";'>
  <img src="${back_image}" width=350 height=175 class="grid-item_img">
  <div class="grid-item_sub1">
    <img src="${icon_image}" width=75 height=75 class="grid-item_img">
    <div class="grid-item_sub2">
      <label class="grid-item_sub2t1">${item.name}</label><br>
      <label class="grid-item_sub2t2">${item.type}</label><br>
      <label class="grid-item_sub2t3">${item.version}</label>
    </div>
  </div>
  <label class="grid-item_paragraph">${item.description}</label>
</div>
`

    content_containers_element.innerHTML = content_containers_element.innerHTML + content_div_element;
    //console.log(item, index);
});