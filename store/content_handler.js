const content_page_element = document.getElementById("body");

content_page_element.innerHTML = `
<div id="content_page" class="page_content_content_page">
        <div style="display:flex;">
          <div class="grid-item_sub1">
            <img src="{icon_image}" width=75 height=75 class="grid-item_img">
          <div class="grid-item_sub2">
            <label class="page_content_title_text">{item.name}</label><br>
            <label class="grid-item_sub2t2">{item.type}</label><br>
            <label class="grid-item_sub2t3">{item.version}</label>
          </div>
        </div>
      </div>
      </div>
      <div id="buttons">
      </div>
      <div id="info">
      </div>
      <div id="description">
      </div>
`

loadcontent();