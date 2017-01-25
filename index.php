<?php

    $q = explode("/", $_SERVER['REQUEST_URI'])[1];

    if($q == "api") {
        include("api/api.php");
        die();
    } else {
        if($q == "admin") {
            include "partials/admin.html";
            die();
        }
    }

require("partials/main.html");
