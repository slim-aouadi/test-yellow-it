<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201223183428 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE user_classe (user_id INT NOT NULL, classe_id INT NOT NULL, INDEX IDX_EAD5A4ABA76ED395 (user_id), INDEX IDX_EAD5A4AB8F5EA509 (classe_id), PRIMARY KEY(user_id, classe_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user_classe ADD CONSTRAINT FK_EAD5A4ABA76ED395 FOREIGN KEY (user_id) REFERENCES fos_user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_classe ADD CONSTRAINT FK_EAD5A4AB8F5EA509 FOREIGN KEY (classe_id) REFERENCES classe (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE fos_user DROP FOREIGN KEY FK_957A64798F5EA509');
        $this->addSql('DROP INDEX IDX_957A64798F5EA509 ON fos_user');
        $this->addSql('ALTER TABLE fos_user DROP classe_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE user_classe');
        $this->addSql('ALTER TABLE fos_user ADD classe_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE fos_user ADD CONSTRAINT FK_957A64798F5EA509 FOREIGN KEY (classe_id) REFERENCES classe (id)');
        $this->addSql('CREATE INDEX IDX_957A64798F5EA509 ON fos_user (classe_id)');
    }
}
