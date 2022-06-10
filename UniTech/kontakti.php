<?php include('php/contact.php'); ?>
<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Contact</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"
        integrity="sha512-fzff82+8pzHnwA1mQ0dzz9/E0B+ZRizq08yZfya66INZBz86qKTCt9MLU0NCNIgaMJCgeyhujhasnFUsYMsi0Q=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel='stylesheet' type='text/css' media='screen' href='css/kontakti.css'>
    <link rel='stylesheet' type='text/css' media='screen' href='css/style.css'>
</head>

<body>
    <a id="back-to-top" href="#" class="btn btn-light btn-lg back-to-top" role="button"><i class="fas fa-chevron-up"></i></a>
    <div class="site-wrap">

    <div class="header" style="background-color: white;">
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
            <div class="row">
                <div class="col-2">
                    <h1>Contact Us</h1>

                </div>

            </div>
        </div>
</div>
    <div class="background" style="background-color: white;">
        <div class="container1">
            <div class="screen">
                <div class="screen-header">
                    <div class="screen-header-left">
                        <div class="screen-header-button close"></div>
                        <div class="screen-header-button maximize"></div>
                        <div class="screen-header-button minimize"></div>
                    </div>
                    <div class="screen-header-right">
                        <div class="screen-header-ellipsis"></div>
                        <div class="screen-header-ellipsis"></div>
                        <div class="screen-header-ellipsis"></div>
                    </div>
                </div>
                <div class="screen-body">
                    <div class="screen-body-item left">
                        <div class="app-title">
                            <span>CONTACT</span>
                            <span>US</span>
                            <br>
                        <?php echo $alert; ?>
                        </div>
                        <div class="app-contact">CONTACT INFO : +383-44-999-666</div>
                    </div>
                    <div class="screen-body-item">
                        <div class="app-form">
                            <form action="" method="post" id="contact_form">
                                <div class="app-form-group">
                                    <input class="app-form-control" type="text" placeholder="NAME" name="name" required>
                                </div>
                                <div class="app-form-group">
                                    <input class="app-form-control" type="email" placeholder="EMAIL" name="email" required>
                                </div>
                                <div class="app-form-group">
                                    <input class="app-form-control" type="tel" placeholder="Number" name="number">
                                </div>
                                <div class="app-form-group message">
                                    <input class="app-form-control" type="text" placeholder="MESSAGE" required name="message">
                                </div>
                                <div class="app-form-group buttons">
                                    <button class="app-form-button" type="reset">CANCEL</button>
                                    <button class="btn" name="submit" type="submit">SEND</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
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
                    <img src="images/logowhite.png">
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
    </script>
    <script src="js/script.js"></script>
</body>

</html>
