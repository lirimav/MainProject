<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Account</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel='stylesheet' type='text/css' media='screen' href='css/style.css'>
</head>

<body >
    <a id="back-to-top" href="#" class="btn btn-light btn-lg back-to-top" role="button"><i class="fas fa-chevron-up"></i></a>
    <div class="site-wrap">

    <div class="container">
        <div class="navbar">
            <div class="logo">
                <img src="images/logo.png" alt="logo" width="125px">
            </div>
            <nav>
                <ul id="MenuItems">
                
                    <li><a href="index.html">Home</a></li>
                    <li><a href="products.html">Products</a></li>
                    <li><a href="kontakti.php">Contact</a></li>
                    <li><a href="account.php">Account</a></li>
                </ul>
            </nav>
            <a href=cart.html> <img src="images/cart.png" width="30px" height="30px" alt="addtocart"></a>
            <img src="images/menu.png" class="menu-icon" onclick="menutoggle()">
        </div>
    </div>
            <?php 

                include_once('php/config.php');
                if (isset($_POST['submitrg'])) {
                   $username = $_POST['username'];
                   $email = $_POST['email'];
                   $password = $_POST['password'];
                   $password_hash = md5($password);
                   // PASSWORD_BCRYPT
                
                   $sql = "INSERT INTO users(username, email, password) VALUES (:username, :email, :password_hash)";
                
                   $newData = $connection->prepare($sql);
                
                   $newData->bindParam(':username', $username);
                   $newData->bindParam(':email', $email);
                   $newData->bindParam(':password_hash', $password_hash);
                
                
                   $result = $newData->execute();
                   echo '
                    <div class="row">
                        <h2 style="color:green;">
                            Jeni regjistruar me sukses
                        </h2>
                    </div>
                    ';
                }
            ?>
    <div class="account-page" style="background-color: white;">
        <div class="container">
            <div class="row">
                <div class="col-2">
                    <img src="images/logo.png" width="40%">
                </div>
                <center>
                <div class="col-2">
                   <div class="form-container">
                       <div class="form-btn">
                           <span onclick="login()">Login</span>
                           <span onclick="register()">Register</span>
                           <hr id="Indicator">
                       </div>
                       <form id="LoginForm">
                           <input type="text" placeholder="Username" name="username" required>
                           <input type="password" placeholder="Password" name="password" required>
                            <button type="submit" class="btn">Login</button>
                             <a href="">Forgot Password</a>
                        </form>
                        <form id="RegForm" enctype="multipart/form-data" method="post">
                            <input type="text" placeholder="Username" name="username" required>
                            <input type="email" placeholder="Email" name="email" required>
                            <input type="password" placeholder="Password" name="password" required>
                             <button type="submit" name="submitrg" class="btn">Register</button>
                         </form>
                   </div>
                </div>
            </center>
            </div>
        </div>
    </div>



    <!-- footer -->

    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col-1">
                    <h3>Contact us</h3>
                
                    <a href="mailto:supportteam@unitech.org">supportteam@unitech.org</a>
                </div>
                <div class="footer-col-2">
                    <img src="images/logowhite.png" >
                    
                </div>
                <div class="footer-col-4">
                    <h3>Follow us</h3>
                    <div class="social">
                        <a href="https://www.facebook.com">Facebook</a>
                        <a href="https://www.instagram.com">Instagram</a>
                        <a href="https://www.twitter.com">Twitter</a>
                        <a href="https://www.youtube.com">YouTube</a>
                    </div>
                </div>
            </div>
            <hr>
            <p class="copyright">Copyright 2021 - UniTech/TicketsOnline</p>
        </div>
    </div>

    <!-- js for menu -->

    <script>
        var MenuItems = document.getElementById("MenuItems");

        MenuItems.style.maxHeight = "0px";

        function menutoggle() {
            if (MenuItems.style.maxHeight == "0px") {
                MenuItems.style.maxHeight = "200px";
            }
            else {
                MenuItems.style.maxHeight = "0px";
            }
        }
           
// login function heheh

        var LoginForm = document.getElementById("LoginForm");

        var RegForm = document.getElementById("RegForm");

        var Indicator = document.getElementById("Indicator");


        function register(){

        RegForm.style.transform = "translateX(0px)";

        LoginForm.style.transform = "translateX(0px)";
        
        Indicator.style.transform = "translateX(100px)";

        }

        function login(){

        RegForm.style.transform = "translateX(300px)";

        LoginForm.style.transform = "translateX(300px)";

        Indicator.style.transform = "translateX(0px)";

        }

    </script>
    <script src="js/script.js"></script>
</body>

</html>