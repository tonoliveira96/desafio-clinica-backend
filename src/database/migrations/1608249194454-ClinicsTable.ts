import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class ClinicsTable1608249194454 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "clinics",
          columns: [
            {
              name: "id",
              type: "integer",
              unsigned: true,
              isPrimary: true,
              isGenerated: true,
              generationStrategy: "increment",
            },
            {
              name: "name",
              type: "varchar",
            },
              {
              name: "email",
              type: "varchar",
            },
              {
              name: "phone",
              type: "varchar",
            },
              {
              name: "cep",
              type: "varchar",
            },
              {
              name: "adress",
              type: "varchar",
            },
              {
              name: "services",
              type: "varchar",
            },
            {
              name: "about",
              type: "varchar",
            },


          ],
        })
      )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('clinics')
    }

}
