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
        $user->setRoles(['ROLE_ADMIN']);
        $user->setEnabled(1);
        $em->persist($user);
        $em->flush();
        return $this->json(
            $user
        );
    }

     /**
     * @Route("/new-teacher", methods={"POST"})
     */
    public function addNewTeacher(Request $request): Response
    {

        $requestBody = json_decode($request->getContent(), true);
        $em=$this->getDoctrine()->getManager();
        $user = new User();
        $user->setUsername($requestBody['firstName'].$requestBody['lastName']);
        $user->setUsernameCanonical($requestBody['firstName'].$requestBody['lastName']);
        $user->setPlainPassword('0000');
        $user->setEmail($requestBody['email']);
        $user->setRoles(['ROLE_TEACHER']);
        $user->setFirstName($requestBody['firstName']);
        $user->setLastName($requestBody['lastName']);
        $user->setEnabled(1);
        $em->persist($user);
        $em->flush();
        return $this->json(
            $user->getId()
        );
    }


       /**
     * @Route("/teachers-list", methods={"GET"})
     */
    public function fetchAllTeachers(Request $request): Response
    {
        //$teachersList=$this->getDoctrine()->getRepository(User::class)->findAll();
        $em = $this->getDoctrine()->getManager();
        $users = $em->getRepository(User::class)->findByRole('ROLE_TEACHER');
        return new JsonResponse($users, 200);
    }
    
}
