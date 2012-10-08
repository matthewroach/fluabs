# Fluabs : Simple jQuery tabs plugin

A very simple jQuery plugin for tabbed content

  
Example Markup for Tabs :

**jQuery**

  (Requires jQuery-1.7.2 or higher)

    $('#tabs').fluabs();

    or

    $('#tabs').fluabs({ 
      tabs    : 'li a', 
      current : 'current', 
      content : '.tabcontent' 
    });

## Options

`tabs : 'li a'` : the element within the selector you attach fluabs to  
`current : 'current'` : the class you wish to use for your active state on the tab link  
`content : '.tabcontent'` : the wrapper div for your tab's content divs  

**HTML**

    <ul id="tabs">
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