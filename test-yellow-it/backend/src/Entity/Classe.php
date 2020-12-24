<?php

namespace App\Entity;

use App\Repository\ClasseRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 *  @ORM\Entity
 *  @ORM\Entity(repositoryClass="App\Repository\ClasseRepository")
 *  @ORM\Table(name="classe")
 */
class Classe
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

     /**
     * @ORM\ManyToMany(targetEntity="App\Entity\User")
     * @ORM\JoinTable(name="user_classe",
     *          joinColumns={@ORM\JoinColumn(name="classe_id",referencedColumnName="id")},
     *          inverseJoinColumns={@ORM\JoinColumn(name="user_id",referencedColumnName="id")}
     * )
     */
    private $userClasses;

    public function __construct()
    {
        $this->userClasses = new ArrayCollection();
    }



    /**
     * Get the value of name
     */ 
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @return  self
     */ 
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection|User[]
     */
    public function getUserClasses(): Collection
    {
        return $this->userClasses;
    }

    public function addUserClass(User $userClass): self
    {
        if (!$this->userClasses->contains($userClass)) {
            $this->userClasses[] = $userClass;
        }

        return $this;
    }

    public function removeUserClass(User $userClass): self
    {
        $this->userClasses->removeElement($userClass);

        return $this;
    }
}
