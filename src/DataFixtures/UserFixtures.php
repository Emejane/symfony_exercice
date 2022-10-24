<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class UserFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        for ($i = 0; $i < 10; $i++) {

            $user = new User();
            $user->setNom('nom-'. $i)
                ->setPrenom('prenom-'. $i)
                ->setEmail('email-'. $i)
                ->setAdresse('address-'. $i)
                ->setTel('tel-'. $i);

       /*
       $data = ['test', 'test', 'test', 'test', 'test'];

       foreach( $data as $value){
            $user = new User();
            $user->setNom($value)
                ->setPrenom($value)
                ->setEmail($value)
                ->setAdresse('address-'. $i)
                ->setTel($value);*/

            $manager->persist($user);
        }

        $manager->flush();
    }
}
