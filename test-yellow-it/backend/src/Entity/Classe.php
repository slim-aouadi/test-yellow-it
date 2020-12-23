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
     * @ORM\ManyToMany(targetEntity="App\Entity\User", mappedBy="classe")
     */
    private $teachers;

    public function __construct()
    {
        $this->teachers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getTeachers(): Collection
    {
        return $this->teachers;
    }

    public function addTeachers(User $teacher): self
    {
        if (!$this->teachers->contains($teacher)) {
            $this->teachers[] = $teacher;
            $teacher->addClasses($this);
        }

        return $this;
    }

    public function removeTeachers(User $teacher): self
    {
        if ($this->teachers->removeElement($teacher)) {
            $teacher->removeClasses($this);
        }

        return $this;
    }




}
