# Fluabs : Simple jQuery tabs plugin

A very simple jQuery plugin for tabbed content

  
Example Markup for Tabs :

**jQuery**

  (Requires jQuery-1.7.2 or higher)

    $('ul.tabs a').fluabs();


**HTML**

    <ul class="nav tabs">
      <li><a href="#one" class="current">Tab One</a></li>
      <li><a href="#two">Tab Two</a></li>
      <li><a href="#three">Tab Three</a></li>
    </ul>

    <div class="tabcontent">
      <div class="tab" data-tab="#one">
        <p>
          This is some sample tab content in <strong>Tab One</strong>
        </p>
      </div>
      <div class="tab" data-tab="#three">
        <p>
          This is some sample tab content in <strong>Tab Three</strong>
        </p>
      </div>
      <div class="tab"data-tab="#two">
        <p>
          This is some sample tab content in <strong>Tab Two</strong>
        </p>
      </div>
    </div>