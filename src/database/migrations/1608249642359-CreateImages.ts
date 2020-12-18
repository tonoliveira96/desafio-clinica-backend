import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateImages1608249642359 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "images",
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
              name: "path",
              type: "varchar",
            },
            {
              name: "clinic_id",
              type: "integer",
            },
          ],
          foreignKeys: [
            {
              name: "ImageClinic",
              columnNames: ["clinic_id"],
              referencedTableName: "clinic",
              referencedColumnNames: ["id"],
              onUpdate: "CASCADE",
              onDelete: "CASCADE",
            },
          ],
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("images")
    }

}
