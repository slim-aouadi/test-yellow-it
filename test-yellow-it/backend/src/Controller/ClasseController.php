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
* @Route("/api/classe", name="classe")
*/
class ClasseController extends AbstractController
{
    /**
     * @Route("/new-classe", methods={"POST"})
     */
    public function createNewClasse(Request $request): Response
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
        $encoders = [new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);
        $em = $this->getDoctrine()->getManager();
        $classes = $em->getRepository(Classe::class)->findAll();
        return new Response($serializer->serialize($classes, 'json'));
    }


    /**
     * @Route("/classe-details/{id}", methods={"GET"})
     */
    public function fetchClasseDetails(Request $request,int $id): Response
    {
        $encoders = [new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);
        $em = $this->getDoctrine()->getManager();
        $classe = $em->getRepository(Classe::class)->find($id);
        return new Response($serializer->serialize($classe, 'json'));
    }


    
    /**
     * @Route("/remove-classe/{id}", methods={"DELETE"})
     */
    public function removeClasse(int $id): Response
    {
        $em = $this->getDoctrine()->getManager();
        $classe = $em->getRepository(Classe::class)->find($id);
        $em->remove($classe);
        $em->flush();
        return $this->json(
            "CLASS REMOVED "
        );
    }


     /**
     * @Route("/update-classe/{id}", methods={"PUT"})
     */
    public function updateClasse(int $id,Request $request): Response
    {
        $requestBody = json_decode($request->getContent(), true);
        $entityManager = $this->getDoctrine()->getManager();
        $classe = $entityManager->getRepository(Classe::class)->find($id);
        $classe->setName($requestBody['name']);
        $classe->clearUserClass();
       foreach ($requestBody['teachers'] as $teacher) {
        $foundTeacher=$this->getDoctrine()->getRepository(User::class)->find($teacher['id']);
        $classe->addUserClass($foundTeacher);
        }

        $entityManager->flush();

        return $this->json(
            $requestBody['teachers']
        );
    }
}
