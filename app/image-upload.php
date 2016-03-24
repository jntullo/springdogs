<?php
$filename = $_FILES['file']['name'];
$tags = $_POST['tags'];  // $tags = array('dark', 'moon');
$destination = 'img/' . $filename;
move_uploaded_file( $_FILES['file']['tmp_name'] , $destination );