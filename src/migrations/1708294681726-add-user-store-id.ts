import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserStoreId1708293582134 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Change store_id column type to character varying to match the store table id type
        await queryRunner.query(`ALTER TABLE "user" ADD "store_id" character varying`);

        // Add index for store_id in the user table
        await queryRunner.query(`CREATE INDEX "IDX_UserStoreId" ON "user" ("store_id")`);
        
        // Add foreign key constraint for store_id
        // Ensure the reference is correctly set to the type used in the store table (character varying)
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_UserStore" FOREIGN KEY ("store_id") REFERENCES "store"("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Remove foreign key constraint
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_UserStore"`);
        
        // Remove index for store_id
        await queryRunner.query(`DROP INDEX "IDX_UserStoreId"`);
        
        // Remove store_id column
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "store_id"`);
    }
}

