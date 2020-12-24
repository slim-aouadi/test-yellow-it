<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use App\Entity\Classe;
use App\Entity\User;

/**
* @Route("/api/teacher", name="teacher_")
*/
class TeacherController extends AbstractController
{
   
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


     /**
     * @Route("/remove-teacher/{id}", methods={"DELETE"})
     */
    public function removeTeacher(int $id): Response
    {
        $em = $this->getDoctrine()->getManager();
        $teacher=$this->getDoctrine()->getRepository(User::class)->find($id);
        $em->remove($teacher);
        $em->flush();
        return $this->json(
            "TEACHER REMOVED "
        );
    }
}
