# jQuery Essential Methods

## Attribute methods

We have already seen the .html() and .css() methods. It's important to understand that we can use these both to set the html and css, and to get the html and css.

So, we have 

```<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery Methods</title>
</head>
<body>
<h1>Essential jQuery Methods</h1>
<h2 id="leader">I am the leader</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi architecto assumenda culpa distinctio dolor eius facere fugit hic impedit in, laboriosam minima modi neque nesciunt numquam temporibus veritatis vitae!</p>
<h2 id="follower">I am the follower</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid deserunt eligendi expedita illum quaerat ratione veritatis! Ea eligendi est facilis incidunt molestiae neque omnis optio, pariatur quidem, quis totam.</p>
<script src="js/jquery-3.6.0.min.js"></script>
<script>
  var lead = $("#leader").html();
  alert(lead);
</script>
</body>
</html>
```
Don't forget the () after the method, or you will get the code for the method itself, which is actually interesting.

var htmlMethod = $("#leader").html;
alert(htmlMethod);

You can use getting the html to make decisions
```
var followerContent = $("#follower").html();
  if (followerContent === "I am the leader"){
      $("#leader").html("What you are is a copycat");
  }
```

We've seen the css method. We can actually use this to get a css property as much as to set one. This is often useful when creating user control over styles that can be toggled.

So
```
$("#font-changer").click(function(){
      var currentFontFamily = $("body").css("font-family");
      //alert(currentFontFamily);
      if (currentFontFamily === "serif") {
          $("body").css("font-family", "sans-serif");
      } else {
          $("body").css("font-family", "serif");
      }
  });
```

Another very useful technique is to pre-define classes and then add and remove them based on an event

Let's say we add a class to the css, something like a background color to highlight

```
<style>
        .highlight {
            background-color: cornsilk;
        }
    </style>
```

```
  $("h2").mouseenter(function(){
      $(this).addClass("highlight");
  });

```

And we can then use the corresponding remove class method

```
 $("h2").mouseleave(function(){
     $(this).removeClass("highlight");
  });
```

// There is also a toggle class that will just add it if it's not there and remove it if it is

```
@font-face {
            font-family: "Marsneveneksk";
            src: url(fonts/MARSNEVENEKSK.otf);
        }
 .wildIt {
            font-family: Marsneveneksk;
            background-image: url("images/pexels-shonejai-1227511.jpg");
            font-size: 500%;
            width: 95%;
            margin: 0 auto;
            padding: 10px;
            border-style: solid;
            border-width: 5px;
            border-color: darkgoldenrod;
            text-align: center;
        }   
         
  // toggle class
  $("h1").hover(function(){
     $(this).toggleClass("wildIt");
  });
          
```

Exercise time - Attributes and CSS

## Traversing the DOM with jQuery

We peeked ahead to some of the traversal methods in the intro to jQuery. Now we will get a little further into it. DOM traversal is about how to get from one place to another in the DOM, for example when you click on one thing, have something happen to another element that is a sibling or child or parent of the element clicked on. For this we need to understand the tree / ancestor structure of the DOM.

Given a certain html structure, how do we accomplish particular targeting of elements?

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Traversing the DOM in jQuery</title>
</head>
<body>
  <header>
    <h1>Big Header</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur deleniti distinctio dolore doloremque doloribus ea ex impedit, laboriosam magni minima molestias, nam nihil placeat quis sunt tempora tempore vitae?</p>
  </header>
  <main>
    <h2>Secondary header</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut consequuntur cumque dolore impedit incidunt inventore ipsa ipsam nam quas quia quis rerum sequi similique sint ut, vero. Ducimus, id.</p>
    <h2>Another topic</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cupiditate eos, eveniet hic impedit nam nulla qui vel! Commodi ea eaque facilis in laudantium obcaecati quod saepe sequi ullam! Voluptas?</p>
    <h2>Last topic</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut debitis molestiae molestias numquam quidem reiciendis rerum suscipit veniam vero voluptate. Alias ea ipsa magnam nesciunt sapiente? Doloremque eos numquam placeat.</p>
    <h2>A nice list</h2>
    <ul>
      <li>Cicero</li>
      <li>Virgil</li>
      <li>Caesar</li>
      <li>Augustus</li>
      <li>Horace</li>
    </ul>
  </main>
  <footer>
    <ul>
      <li><a href="#">About us</a></li>
      <li><a href="#">Contact us</a></li>
      <li><a href="#">Careers</a></li>
      <li><a href="#">Privacy Policy</a></li>
    </ul>
  </footer>
</body>
</html>
```

The first method we examine is the .each() method. We saw this briefly in the lecture on selectors. It iterates over a set of elements selected by their tag name

```
$("li").each(function(){
        $(this).css("font-style", "italic");
    });
```

Why does *this* work with the each() method? Because the each() method, each time it iterates over the nodeList, returns an object representing an element. *This* always applies to the currently referenced object, in this case, whatever element is being iterated over at that particular moment.

We can add two parameters to the function call, index and element

```
$("li").each(function(index){
       if (index % 2 !== 0){
           $(this).css("background-color", "cornsilk");
       }
    });
```

```
$("li").each(function(index, element){
        $(element).css("font-family", "sans-serif");
    })
```

We can also modify our selector so as to choose only one or the other list, without adding ids

```
 $("main ul li").each(function(index){
       if (index % 2 !== 0){
           $(this).css("background-color", "cornsilk");
       }
    });
```

And we can target just the first and last if we want.

```
$("main ul li").first().css("font-size", "110%");

    $("main ul li").last().css("text-decoration", "underline dotted");
```

But most of the time, we use events to trigger changes in css, so let's do that

The main methods are the children();

```
<aside>
      <section>
        <p><button id="font-changer">Change Another Topic Font</button></p>
      </section>
    </aside>
```

```
  $("#font-changer").click(function(){
        //$("main").children().css("font-family", "sans-serif");
         $("main").children().toggleClass("sansSerif");
    });
```

The next();

```
   $("h2").hover(function(){
        $(this).next().slideUp("slow");
    },
        function(){
        $(this).next().slideDown("slow");
        });

$("h2").hover(function(){
        $(this).next().slideToggle();
    });
```

And the parent()

```
  $("h1, h1 + p").hover(
        function(){
            $(this).parent().addClass("darkMode");
    },
        function(){
            $(this).parent().removeClass("darkMode");
        }
    );

    // the above gives less than ideal results due to a space between
    // h1 and h1+p, so we can try eliminating the margin
```

If there is still time, add some information
Expanded html

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Traversing the DOM in jQuery</title>
  <style>

    div {
      display: table;
    }
    div main {
      display: table-cell;
      width: 70%;
    }
    div aside {
      display: table-cell;
      padding-left: 20px;
    }
    aside p {
      margin-right: 30px;
    }

    div aside section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    div, footer {
      position: relative;
      bottom: 20px;
    }

    h1 {
      margin-bottom: 0;
    }

    h1 + p {
      margin-top: 0;
      padding-top: 10px;
    }
    h2 {
      width: 25%;
      text-align: center;
      background-color: cornsilk;
      cursor: pointer;
    }

    .darkMode {
      color: white;
      background-color: black;
    }

    .sansSerif {
      font-family: sans-serif;
    }
  </style>
</head>
<body>
<header>
  <h1>Big Header</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur deleniti distinctio dolore doloremque
    doloribus ea ex impedit, laboriosam magni minima molestias, nam nihil placeat quis sunt tempora tempore
    vitae?</p>
</header>
<div>
  <main>
    <h2>Secondary header</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut consequuntur cumque dolore impedit
      incidunt inventore ipsa ipsam nam quas quia quis rerum sequi similique sint ut, vero. Ducimus, id.</p>
    <h2>Another topic</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cupiditate eos, eveniet hic impedit nam nulla
      qui vel! Commodi ea eaque facilis in laudantium obcaecati quod saepe sequi ullam! Voluptas?</p>
    <h2>Last topic</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut debitis molestiae molestias numquam quidem
      reiciendis rerum suscipit veniam vero voluptate. Alias ea ipsa magnam nesciunt sapiente? Doloremque eos
      numquam placeat.</p>
    <h2>A list of lists</h2>
    <ul>
      <li>
        <ul>
          <li>Catullus</li>
          <li class="stuffy">Virgil</li>
          <li>Ovid</li>
          <li>Eudocia</li>
          <li>Horace</li>
        </ul>
      </li>
      <li>
        <ul>
          <li>Federico Garcia Lorca</li>
          <li>Antonio Machado</li>
          <li>Juan Ramon Jimenez</li>
          <li>Sor Juana Ines de la Cruz</li>
          <li>Clara Janes</li>
        </ul>
      </li>
      <li>
        <ul>
          <li>William Blake</li>
          <li>William Shakespeare</li>
          <li>Bryher</li>
          <li>Kate Fox</li>
          <li class="stuffy">Lord Byron</li>
        </ul>
      </li>
      <li>
        <ul>
          <li>Charles Baudelaire</li>
          <li>Arthur Rimbaud</li>
          <li class="stuffy">Paul Verlaine</li>
          <li>Linda Maria Baros</li>
          <li>Anne-Marie Albiach</li>
        </ul>
      </li>
    </ul>
  </main>
  <aside>
    <section>
      <p><button id="font-changer">Change Main Section Font</button></p>
      <p><button id="latinBgone">Ummm... Latin?</button></p>
      <p><button id="latinBack">But I like Latin</button></p>
      <p><button id="stuffyDylan">Stuffy to Dylan</button></p>
      <p><button id="restoreStuffies">Dylan to Stuffy</button></p>
      <p><button id="slice">Give me a Slice</button></p>
    </section>
    <p id="output"></p>
  </aside>
</div>
<footer>
  <ul>
    <li><a href="#">About us</a></li>
    <li><a href="#">Contact us</a></li>
    <li><a href="#">Careers</a></li>
    <li><a href="#">Privacy Policy</a></li>
  </ul>
</footer>
<script src="js/jquery-3.6.0.min.js"></script>
<script src="js/jquery-dom-traversal-2.js"></script>
</body>
</html>
```

You can combine any of these methods with the find() method. The find() method takes as its starting point whatever you have selected, and searches its descendants for matches for the selector. The difference 
between 
```
    var $latinList;
    $("#latinBgone").click(function(){
        // build this up bit by bit
        var target = $(this).parent().parent().parent().prev().find("li").first();
        //console.log(target.html());
        //target.remove();
        // or we can do
       $latinList = target.detach();
    });

    $("#latinBack").click(function(){
        $(this).parent().parent().parent().prev().find("li").first().before($latinList);
    });
```

This does leave a problem, which is that after the Latin poets are gone, the LatinBGone button then still removes the first li, in this case the Spanish poets. So we could probably change our code a little.

```
var $latinList;
    $("#latinBgone").on('click', function(){
        // build this up bit by bit
        var target = $(this).parent().parent().parent().prev().find("li").first();
        //console.log(target.html());
        //target.remove();
        // or we can do
        $latinList = target.detach();
        $(this).off('click');
    });

    $("#latinBack").click(function(){
        $(this).parent().parent().parent().prev().find("li").first().before($latinList);
        $("#latinBgone").on('click', function(){
            var target = $(this).parent().parent().parent().prev().find("li").first();
            $latinList = target.detach();
            $(this).off('click');
        });
    });
```

If I want to replace some things with something else, I can do it like this:

```
 $("#stuffyDylan").click(function(){
        $(".stuffy").replaceWith("<li class='dylan'>Bob Dylan</li>");
    })
```

But then if we want to return it to its previous state, we can't, the original text is gone. Instead, I can do:

```
   $("#stuffyDylan").click(function(){
        $(".stuffy").after("<li class='dylan'>Bob Dylan</li>");
        $stuffies = $(".stuffy").detach();
    });
```
And then to restore it, I can do:

```
   $("#restoreStuffies").click(function(){
        $(".dylan").each(function(i){
            $(this).after($stuffies[i]);
        });
        $(".dylan").remove();
    });
```
