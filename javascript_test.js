<meta charset="utf-8">
<meta name="generator" content="AlterVista - Editor HTML">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<title></title>

<b>Your API key (not saved): </b><input id="userapikey" value="">
<div id="divchatbot" style="border-style: solid; position: fixed; bottom: 10px; left:2%; width:96%; text-align: center; z-index: 1000; background-color: rgba(200, 200, 200, 1); visibility: visible; height: 200px; overflow-y : scroll; ">
<p align="left">
  <input id="chatuserinput" value="Enter chat here" style="font-size:20px;" placeholder="Type here to chat with bot" onkeydown="if (event.keyCode == 13) { chatbotprocessinput() }  ;  if (event.keyCode == 38) { repeatuser() }"></p>
  <button type="button" align="left" onclick="chatbotprocessinput()" title="" id="chatbotbutton"><font size="4">Send</font></button>
<p id="chatlog" align="left" style="width:95%; word-wrap:break-word;"><b>Assistant:</b> This is a test bot for gpt-3</p>

</div>
<script></p>
<p>var prompt = "Hello, I am a test bot by Josh Harris"</p>
<p>var chatbotprocessinput = function(){<br />
  var apikey = "Bearer " + document.getElementById("userapikey").value<br />
  theprompt = prompt + "Q: " + document.getElementById("chatuserinput").value<br />
  document.getElementById("chatuserinput").value = ""<br />
  document.getElementById("chatlog").innerHTML = "Thinking..."<br />
  $.ajax({<br />
      url: "gpt3withyourapikey.php?prompt=" + theprompt + "&apikey=" + apikey<br />
    }).done(function(data) {<br />
      console.log(data)<br />
      var textupdate = data.replace(prompt,"").replace("https://api.openai.com/v1/engines/text-davinci-002/completions","")<br />
      document.getElementById("chatlog").innerHTML = textupdate.replace(/Q: /g,"<br /><b>Visitor: </b>").replace(/A: /g,"<br /><b>Assistant: </b>")<br />
      prompt = data.replace("https://api.openai.com/v1/engines/text-davinci-002/completions","")<br />
      console.log("------\n" + prompt)<br />
  });<br />
}</p>
<p></script>