<?php

namespace App\Repository;

use App\Entity\Classe;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Query;

/**
 * @method Classe|null find($id, $lockMode = null, $lockVersion = null)
 * @method Classe|null findOneBy(array $criteria, array $orderBy = null)
 * @method Classe[]    findAll()
 * @method Classe[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ClasseRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Classe::class);
    }

    // /**
    //  * @return Classe[] Returns an array of Classe objects
    //  */
    public function findAllClasses()
    {
        return $this->createQueryBuilder('c')
            ->getQuery()
            ->getResult(Query::HYDRATE_ARRAY);
    }

    /*
    public function findOneBySomeField($value): ?Classe
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
