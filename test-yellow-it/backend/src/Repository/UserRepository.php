<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Query;

/**
 * @method Classe|null find($id, $lockMode = null, $lockVersion = null)
 * @method Classe|null findOneBy(array $criteria, array $orderBy = null)
 * @method Classe[]    findAll()
 * @method Classe[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }

    // /**
    //  * @return Classe[] Returns an array of Classe objects
    //  */
    
    public function findAllUsers()
    {
        return $this->createQueryBuilder('u')
            ->getQuery()
            ->getResult(Query::HYDRATE_ARRAY);
    }


    /**
 * @param string $role
 *
 * @return array
 */
public function findByRole($role)
{
    $qb = $this->_em->createQueryBuilder();
    $qb->select('u')
        ->from($this->_entityName, 'u')
        ->where('u.roles LIKE :roles')
        ->setParameter('roles', '%"'.$role.'"%');

    return $qb->getQuery()->getResult(Query::HYDRATE_ARRAY);
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
