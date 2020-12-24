<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
* @Route("/auth", name="auth_")
*/
class AuthController extends AbstractController
{
    /**
     * @Route("/register", methods={"POST"})
     */
    public function register(Request $request): Response
    {

        $requestBody = json_decode($request->getContent(), true);
        $em=$this->getDoctrine()->getManager();
        $user = new User();
        $user->setUsername($requestBody['username']);
        $user->setUsernameCanonical($requestBody['username']);
        $user->setPlainPassword($requestBody['password']);
        $user->setEmail($requestBody['email']);
        $user->setFirstName($requestBody['firstName']);
        $user->setLastName($requestBody['lastName']);
        $user->setRoles(['ROLE_ADMIN']);
        $user->setEnabled(1);
        $em->persist($user);
        $em->flush();
        return $this->json(
            $user
        );
    }

    
}
