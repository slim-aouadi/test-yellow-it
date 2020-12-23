<?php
// src/Entity/User.php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @ORM\Table(name="fos_user")
 */
class User extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $firstName;

     /**
     * @ORM\Column(type="string", length=255)
     */
    private $lastName;


     /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Classe", inversedBy="teachers")
     */
    private $classes;

    public function __construct()
    {
        parent::__construct();
        // your own logic
        $this->classes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    /**
     * @return Collection|Classe[]
     */
    public function getClasses(): Collection
    {
        return $this->classes;
    }

    public function addClasses(Classe $classes): self
    {
        if (!$this->classes->contains($classes)) {
            $this->classes[] = $classes;
        }

        return $this;
    }

    public function removeClasses(Classe $classes): self
    {
        $this->classes->removeElement($classes);

        return $this;
    }


    
}