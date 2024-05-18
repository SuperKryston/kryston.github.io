const content_page_element = document.getElementById("body");

content_page_element.innerHTML = `
        <div id="content_page" class="page_content_content_page">
          <div style="display:flex;">
            <div class="grid-item_sub1">
              <img id="page_content_icon_image" src="{icon_image}" width=75 height=75 class="grid-item_img">
            <div class="grid-item_sub2">
              <label id="page_content_title_text" class="page_content_title_text">{item.name}</label><br>
              <label id="page_content_title_type" class="grid-item_sub2t2">{item.type}</label><br>
              <label id="page_content_title_version" class="grid-item_sub2t3">{item.version}</label>
            </div>
          </div>
        </div>
        <div id="buttons" style="padding-top: 20px;">
        </div>
        <div id="info" style="padding-top: 20px;">
        </div>
        <div id="description" style="padding-top: 20px;">
        </div>
      </div>
`

loadcontent();