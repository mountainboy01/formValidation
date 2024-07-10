const form = document.getElementById("form");
	 const username = document.getElementById("username");
	 const email = document.getElementById("email");
	 const password = document.getElementById("password");
	 const password2 = document.getElementById("confirmPassword");

    //error msg function

        function errorMsg(input,msg){
            const form_group =input.parentElement;
            form_group.className="form-group error";
            const small = form_group.querySelector("small");
            small.innerText=msg;
        }

    //success function 
        function successMsg(input){
            const form_group =input.parentElement; 
            form_group.className="form-group success";
          }

    //check email is valid
       function checkEmail(input) {
           const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              if (re.test(input.value.trim())) {
                 successMsg(input);
              } 
              else {
                 errorMsg(input, 'Email is not valid');
              }
            }

   //check passwords match

      function checkPasswordsMatch(password1, password2) {
             if (password1.value !== password2.value) {
                 errorMsg(password2, 'Passwords do not match');
              }
            }

   //check required fields
     function checkRequired(inputArr) {
          inputArr.forEach(function(input) {
            if(input.value.trim()===""){
            	errorMsg(input, `${upperCaseLetter(input)} is required`);
            }
            else
            {
            	successMsg(input);
            }
          });
          }

   //check input lenght
    function checkLength(input, min, max) {
          if (input.value.length < min) {
             errorMsg(input, `${upperCaseLetter(input)} must be at least ${min} characters`);
            } 
          else if (input.value.length > max) {
             errorMsg(input, `${upperCaseLetter(input)} must be less than ${max} characters`);
           }
          else {
             successMsg(input);
            }
           }


   function upperCaseLetter(input){
          return input.id.charAt(0).toUpperCase()+input.id.slice(1);
        }


   ///Event Listener
       form.addEventListener("submit", function(e){
       	   e.preventDefault();

          checkRequired([username, email, password, confirmPassword]);
          checkLength(username, 3, 15);
          checkLength(password, 6, 25);
          checkEmail(email);
          checkPasswordsMatch(password, confirmPassword);
       });