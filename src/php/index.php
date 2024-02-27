<?php
 
$mysqli = new mysqli('s31.cyber-folks.pl' , 'v55582726_marcin' , 'megapunkt500' , 'v55582726_viptour');

if($mysqli -> connect_errno)
{
    echo "<br> Failed to connect databaee </br" .$mysqli -> connect_error ;
    exit()

}

else echo "<br>Connected </br>";


$mysqli -> close();


?>