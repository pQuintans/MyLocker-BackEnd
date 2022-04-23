import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

// eslint-disable-next-line prettier/prettier
export class AlterStudentAddProfilePictureURL1650600211934 implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'student',
      new TableColumn({
        name: 'profile_picture_url',
        type: 'varchar',
        isNullable: true,
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('student', 'profile_picture_url')
  }
}
