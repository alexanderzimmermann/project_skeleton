<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <!-- build:css css/styles.min.css  -->
    <link rel="stylesheet" type="text/css" href="css/style-1.css">
    <link rel="stylesheet" type="text/css" href="css/style-2.css">
    <!-- endbuild -->

    <title>Title</title>
</head>
<body>
<p class="green"><?php echo 'Green from style-1.css'; ?></p>
<p class="blue"><?php echo 'Blue from style-2.css'; ?></p>
</body>
</html>