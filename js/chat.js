$(document).ready(function(){const o="http://85.209.9.38:5000",a=$("#messages"),c=$("#user-input");function l(e,s,t){t=$("<div>").addClass("message "+t).text(e+": "+s);a.append(t),a.scrollTop(a[0].scrollHeight)}$("#send-button").click(function(){var s,t,e=localStorage.getItem("username"),a=localStorage.getItem("chat_id"),n=c.val();console.log(`Sender: ${e}, Chat ID: ${a}, Message: `+n),""!==$.trim(n)&&(s=e,e=a,t=n,$.ajax({type:"POST",url:o+"/send_message",contentType:"application/json",data:JSON.stringify({sender:s,chat_id:e,message:t}),success:function(e){"Message sent successfully"===e.status&&l(s,t,"user-message")}}),c.val(""))}),setInterval(function(){var e;e=localStorage.getItem("chat_id"),$.ajax({type:"GET",url:o+"/get_chat_messages/"+e,contentType:"application/json",success:function(e){e=e.messages;console.log(e),a.empty(),e.forEach(function(e){var s=e[0],e=e[1];s===localStorage.getItem("username")?l(s,e,"user-message"):l(s,e,"interlocutor-message")})}})},2e3)});