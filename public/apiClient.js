
                
            //     function bindEvent(element, eventName, eventHandler) {
            //         if (element.addEventListener) {
            //             element.addEventListener(eventName, eventHandler, false);
            //         } else if (element.attachEvent) {
            //             element.attachEvent('on' + eventName, eventHandler);
            //         }
            //     }


            //     var iframes = document.getElementsByTagName('iframe');
   

            //     for(var i=0; i<frames.length;i++){
            //             var a =  document.getElementsByTagName("iframe")[i].style.width = parent.document.body.clientWidth+"px";
            //             var body = parent.document.body, html = parent.document.documentElement;
            //             var height = Math.max( body.scrollHeight, body.offsetHeight, 
            //             html.clientHeight, html.scrollHeight, html.offsetHeight );
            //             var b =  document.getElementsByTagName("iframe")[i].style.height = height +"px";
                           
            //     }
             
            //      var place = document.querySelectorAll('iframe[data-url]');
            //     var datos = [];
            
            //          for(var i = 0; i < place.length; i++){
            //                 datos[i] = place[i].getAttribute('data-url');
            //                  console.log(place[i].getAttribute('data-url'));

            //          }

            //           var iframeEl = document.getElementById('graph1');
            //           iframeEl.contentWindow.postMessage("http://localhost:8080/hello", '*');


            //     document.getElementsByTagName("script")[0].setAttribute("data-url", "http://localhost:8080/hello");

                
          
            // //document.getElementsByTagName("script")[1].setAttribute("data-url", "data.csv");
            
           
        
             
             
            //    // alert("popo");



              // addEventListener support for IE8
        function bindEvent(element, eventName, eventHandler) {
            if (element.addEventListener){
                element.addEventListener(eventName, eventHandler, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + eventName, eventHandler);
            }
        }
        // Send a message to the child iframe
        var iframeEl = document.getElementById('the_iframe'),
            messageButton = document.getElementById('message_button'),
            results = document.getElementById('results');
            var place = document.querySelector('iframe[data-url]');
            var datos = place.getAttribute('data-url');
        // Send a message to the child iframe
        var sendMessage = function(msg) {
            // Make sure you are sending a string, and to stringify JSON
            iframeEl.contentWindow.postMessage(msg, '*');
        };
        // Send random messge data on every button click
          
          bindEvent(window, 'load', function (e) {
              var random = Math.random();
              sendMessage('' + datos );
          });

        // Listen to message from child window
        bindEvent(window, 'message', function (e) {
            results.innerHTML = e.data;
        });