<?php

namespace App\Service;

use DateTime;

class UserService{

    public function userAge($birthDate){

        if ($birthDate != null){
            $now = new \DateTime();
            $difference = $now->diff($birthDate);
            return $difference->format('%y');
        }else{
            return('0');
        }


    }

}