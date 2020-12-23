<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Classe;
use App\Entity\User;

/**
* @Route("/classe", name="classe")
*/
class ClasseController extends AbstractController
{
    /**
     * @Route("/new-classe", methods={"POST"})
     */
    public function index(Request $request): Response
    {
        $requestBody = json_decode($request->getContent(), true);
        $em=$this->getDoctrine()->getManager();
        $classe = new Classe();
        $classe->setName($requestBody['name']);
        foreach ($requestBody['teachers'] as $teacher) {
        $foundTeacher=$this->getDoctrine()->getRepository(User::class)->find($teacher['id']);
           $classe->addTeachers($foundTeacher);
        }
        $em->persist($classe);
        $em->flush();

        return $this->json(
            "SUCCESS"
        );
        
    }


     /**
     * @Route("/classes-list", methods={"GET"})
     */
    public function fetchAllClasses(Request $request): Response
    {
        $em = $this->getDoctrine()->getManager();
        $users = $em->getRepository(Classe::class)->findAllClasses();
        return new JsonResponse($users, 200);
    }
}
