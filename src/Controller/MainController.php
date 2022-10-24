<?php

namespace App\Controller;

use App\Repository\PossessionsRepository;
use App\Repository\UserRepository;
use App\Service\UserService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;


class MainController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(): Response
    {
        return $this->render('main/index.html.twig');
    }


    #[Route('/users', name: 'users')]
    public function User(UserRepository $repository, UserService $userService): Response
    {
        $users = $repository->findAll();

        foreach ($users as $user) {
            $age = $userService->userAge($user->getBirthDate());
            $user->setAge($age);
        }


        //serialization de données et conversion de données en JSON / reference circulaire
        $encoder = new JsonEncoder();
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getNom();
            },
        ];
        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);

        $serializer = new Serializer([$normalizer], [$encoder]);
        $jsonContent = ($serializer->serialize($users, 'json'));
        return new Response($jsonContent);

    }


    #[Route('/delete/{id}', name: 'user_delete')]
    public function deleteUser(UserRepository $userRepository, $id): Response
    {
        //elimination de l'utilisateur
        $userRepository->remove($userRepository->find($id), true);

        return $this->redirectToRoute('users');
    }



    #[Route('/possessions/{id}', name: 'possessions_user')]
    public function infoUser(UserRepository $userRepository, PossessionsRepository $possessionsRepository, $id): Response
    {
        //on a access a ID de l'utilisateur
        $user = $userRepository->find($id);
        //on passe ID de l'utilisateur pour chercher dans possessions
        $possessions = $possessionsRepository->findBy(['user'=>$id]);

        return $this->render('main/possessions.html.twig',[
            'user'=>$user,
            'possessions'=>$possessions



        ]);

    }

    /*CONTRÔLEUR A UTILISER EN CAS DE FAIRE UN AFFICHAGE AVEC REACT
     *
     * #[Route('/detail/{id}', name: 'app_detail_id')]
    public function showDetail( $id): Response
    {
        return $this->render('main/detail.html.twig',[
            'id'=>$id,
        ]);
    }*/

    #[Route('/adduser', name: 'add_user')]
    public function addUser (UserRepository $userRepository): Response
    {
        $user = new User();

        return new Response('Utilisateur ajouté');
    }



}
