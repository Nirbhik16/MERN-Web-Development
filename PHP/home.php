<?php
$x="Saurabh";
$y=23;
$z=45.56;
?>
<html>
    <head>
        <style>
            h1{
                color:navy;
            }
            p{
                color:blue;
            }
        </style>
        <script>
            dovument.write("Thus is javascript");
        </script>
    </head>
    <body>
        <?php $y++; $z="Hello"; ?>
        <h1>Hello, <?php echo $x; ?> This is a heading</h1>
        <p>This is a paragraph</p>
    </body>
</html>
